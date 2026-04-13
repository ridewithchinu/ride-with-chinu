const fs = require('fs');
const path = require('path');

const destinations = require('./src/data/destinations.ts');

// We'll extract the destination IDs from the file content
const fileContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
const match = fileContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);

if (!match) {
  console.error("Could not parse destinations");
  process.exit(1);
}

const dests = JSON.parse(match[1]);
const publicImagesDir = path.join(__dirname, 'public', 'images');

async function fetchWikiImage(title) {
  try {
    // Try to get page image
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`;
    const res = await fetch(url);
    const data = await res.json();
    
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    
    if (pageId !== '-1' && pages[pageId].thumbnail && pages[pageId].thumbnail.source) {
      return pages[pageId].thumbnail.source;
    }
    
    // Fallback: search for the title and get the first result's image
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000&gsrlimit=1`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    
    if (searchData.query && searchData.query.pages) {
      const searchPageId = Object.keys(searchData.query.pages)[0];
      if (searchData.query.pages[searchPageId].thumbnail && searchData.query.pages[searchPageId].thumbnail.source) {
        return searchData.query.pages[searchPageId].thumbnail.source;
      }
    }
    
    return null;
  } catch (e) {
    console.error("Error fetching wiki image for", title, e.message);
    return null;
  }
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch (e) {
    console.error("Error downloading", url, e.message);
    return false;
  }
}

async function run() {
  let updatedContent = fileContent;
  
  for (const dest of dests) {
    // Check if we already have a local image that is NOT from picsum
    const existingPng = path.join(publicImagesDir, dest.id + '.png');
    const existingJpg = path.join(publicImagesDir, dest.id + '.jpg');
    
    if (fs.existsSync(existingPng)) {
      console.log(`Skipping ${dest.name}, already has local PNG`);
      continue;
    }
    
    if (fs.existsSync(existingJpg)) {
      console.log(`Skipping ${dest.name}, already has local JPG`);
      continue;
    }

    console.log(`Fetching image for ${dest.name}...`);
    // Try to get a good search term
    const searchTerm = dest.name + " Uttarakhand";
    const imageUrl = await fetchWikiImage(searchTerm);
    
    if (imageUrl) {
      console.log(`Found image for ${dest.name}: ${imageUrl}`);
      const ext = imageUrl.split('.').pop().toLowerCase().split('?')[0] || 'jpg';
      const finalExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext) ? ext : 'jpg';
      const destPath = path.join(publicImagesDir, `${dest.id}.${finalExt}`);
      
      const success = await downloadImage(imageUrl, destPath);
      if (success) {
        console.log(`Saved ${dest.name} to ${destPath}`);
        // Update the JSON string in the file
        const oldImageString = `"image": "https://picsum.photos/seed/${dest.id}/800/600"`;
        const newImageString = `"image": "/images/${dest.id}.${finalExt}"`;
        updatedContent = updatedContent.replace(oldImageString, newImageString);
      }
    } else {
      console.log(`No image found for ${dest.name}`);
    }
    
    // Be nice to the API
    await new Promise(r => setTimeout(r, 500));
  }
  
  fs.writeFileSync('src/data/destinations.ts', updatedContent);
  console.log("Finished updating images!");
}

run();
