const fs = require('fs');
const path = require('path');

const places = {
  "bhimtal": "Bhimtal Lake",
  "sattal": "Sattal",
  "naukuchiatal": "Naukuchiatal",
  "tehri-lake": "Tehri Dam"
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function wikimediaPageImage(pageTitle) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&pithumbsize=1200&piprop=thumbnail|name`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/9.0' } });
  const data = await res.json();
  const pages = data.query?.pages || {};
  for (const key in pages) {
    const thumb = pages[key].thumbnail?.source;
    if (thumb) return thumb;
  }
  return null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/9.0' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
  const match = destsContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
  const dests = JSON.parse(match[1]);

  for (const [slug, title] of Object.entries(places)) {
    console.log(`Searching Wiki for distinct image for ${slug}...`);
    const imgUrl = await wikimediaPageImage(title);
    
    if (imgUrl) {
      const extMatch = imgUrl.match(/\.(jpg|jpeg|png|webp)(\?|$)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const fileName = `${slug}_distinct_wiki.${ext}`;
      const filePath = path.join(outRoot, fileName);

      try {
        await downloadImage(imgUrl, filePath);
        console.log(`Saved distinct WIKI image for ${slug} -> ${fileName}`);
        
        const dest = dests.find(d => d.id === slug);
        if (dest) {
          dest.image = `/images/destinations/${fileName}`;
        }
      } catch (e) {
        console.error(`Failed to download ${slug}:`, e.message);
      }
    } else {
      console.log(`No distinct wiki image found for ${slug}`);
    }
  }

  const newContent = destsContent.replace(match[1], JSON.stringify(dests, null, 2));
  fs.writeFileSync('src/data/destinations.ts', newContent);
  console.log('Done updating distinct wiki images for tals');
}

run();
