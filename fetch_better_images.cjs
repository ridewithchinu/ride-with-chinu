const fs = require('fs');
const path = require('path');

const destinations = require('./src/data/destinations.ts');

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
    // Search for the page first
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(title)}&utf8=&format=json&srlimit=1`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    
    if (!searchData.query || !searchData.query.search || searchData.query.search.length === 0) {
      return null;
    }
    
    const pageTitle = searchData.query.search[0].title;
    
    // Get the original image for that page
    const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&format=json&piprop=original`;
    const imgRes = await fetch(imgUrl);
    const imgData = await imgRes.json();
    
    const pages = imgData.query.pages;
    const pageId = Object.keys(pages)[0];
    
    if (pageId !== '-1' && pages[pageId].original && pages[pageId].original.source) {
      const source = pages[pageId].original.source;
      if (!source.toLowerCase().endsWith('.svg') && !source.toLowerCase().includes('map')) {
        return source;
      }
    }
    
    // Fallback: get images from the page
    const imagesUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=images&format=json&imlimit=10`;
    const imagesRes = await fetch(imagesUrl);
    const imagesData = await imagesRes.json();
    
    const imgPages = imagesData.query.pages;
    const imgPageId = Object.keys(imgPages)[0];
    
    if (imgPageId !== '-1' && imgPages[imgPageId].images) {
      for (const img of imgPages[imgPageId].images) {
        const imgTitle = img.title;
        if (imgTitle.toLowerCase().endsWith('.svg') || imgTitle.toLowerCase().includes('map') || imgTitle.toLowerCase().includes('logo')) {
          continue;
        }
        
        // Get the actual URL for this image
        const fileUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(imgTitle)}&prop=imageinfo&iiprop=url&format=json`;
        const fileRes = await fetch(fileUrl);
        const fileData = await fileRes.json();
        
        const filePages = fileData.query.pages;
        const filePageId = Object.keys(filePages)[0];
        
        if (filePageId !== '-1' && filePages[filePageId].imageinfo && filePages[filePageId].imageinfo[0].url) {
          return filePages[filePageId].imageinfo[0].url;
        }
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
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'RideWithChinuBot/1.0 (ridewithchinu@gmail.com)'
      }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
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
  
  // Create region/district folders
  for (const dest of dests) {
    const regionDir = path.join(publicImagesDir, dest.region.toLowerCase());
    const districtDir = path.join(regionDir, dest.district.toLowerCase().replace(/ /g, '-'));
    
    if (!fs.existsSync(regionDir)) fs.mkdirSync(regionDir, { recursive: true });
    if (!fs.existsSync(districtDir)) fs.mkdirSync(districtDir, { recursive: true });
    
    console.log(`Fetching image for ${dest.name}...`);
    const searchTerm = dest.name + " Uttarakhand";
    const imageUrl = await fetchWikiImage(searchTerm);
    
    if (imageUrl) {
      console.log(`Found image for ${dest.name}: ${imageUrl}`);
      const ext = imageUrl.split('.').pop().toLowerCase().split('?')[0] || 'jpg';
      const finalExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext) ? ext : 'jpg';
      const relativePath = `/images/${dest.region.toLowerCase()}/${dest.district.toLowerCase().replace(/ /g, '-')}/${dest.id}.${finalExt}`;
      const destPath = path.join(__dirname, 'public', relativePath);
      
      const success = await downloadImage(imageUrl, destPath);
      if (success) {
        console.log(`Saved ${dest.name} to ${destPath}`);
        
        // Find the current image path in the JSON string
        const regex = new RegExp(`"id": "${dest.id}"[\\s\\S]*?"image": "(.*?)"`);
        const match = updatedContent.match(regex);
        if (match) {
          const oldImageString = `"image": "${match[1]}"`;
          const newImageString = `"image": "${relativePath}"`;
          updatedContent = updatedContent.replace(oldImageString, newImageString);
        }
      }
    } else {
      console.log(`No image found for ${dest.name}`);
    }
    
    await new Promise(r => setTimeout(r, 1000));
  }
  
  fs.writeFileSync('src/data/destinations.ts', updatedContent);
  console.log("Finished updating images!");
}

run();
