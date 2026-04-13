const fs = require('fs');
const path = require('path');

const places = {
  "bhimtal": "Bhimtal Lake",
  "sattal": "Sattal Lake",
  "naukuchiatal": "Naukuchiatal Lake",
  "tehri-lake": "Tehri Dam Lake"
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function commonsSearch(query, limit = 10) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/8.0' } });
  const data = await res.json();
  const pages = data.query?.pages || {};
  const results = [];
  for (const key in pages) {
    const p = pages[key];
    if (p.imageinfo && p.imageinfo[0]) {
      const ii = p.imageinfo[0];
      if (ii.url && !ii.url.toLowerCase().endsWith('.svg') && !ii.url.toLowerCase().endsWith('.pdf') && !ii.url.toLowerCase().endsWith('.tif')) {
        results.push({
          title: p.title,
          url: ii.url,
          width: ii.width || 0,
          height: ii.height || 0
        });
      }
    }
  }
  results.sort((a, b) => (b.width * b.height) - (a.width * a.height));
  return results;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/8.0' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
  const match = destsContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
  const dests = JSON.parse(match[1]);

  for (const [slug, query] of Object.entries(places)) {
    console.log(`Searching for distinct image for ${slug}...`);
    let candidates = await commonsSearch(query, 10);
    
    if (candidates.length > 0) {
      const best = candidates[0];
      const extMatch = best.url.match(/\.(jpg|jpeg|png|webp)(\?|$)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const fileName = `${slug}_distinct.${ext}`;
      const filePath = path.join(outRoot, fileName);

      try {
        await downloadImage(best.url, filePath);
        console.log(`Saved distinct image for ${slug} -> ${fileName}`);
        
        const dest = dests.find(d => d.id === slug);
        if (dest) {
          dest.image = `/images/destinations/${fileName}`;
        }
      } catch (e) {
        console.error(`Failed to download ${slug}:`, e.message);
      }
    } else {
      console.log(`No distinct image found for ${slug}`);
    }
  }

  const newContent = destsContent.replace(match[1], JSON.stringify(dests, null, 2));
  fs.writeFileSync('src/data/destinations.ts', newContent);
  console.log('Done updating distinct images for tals');
}

run();
