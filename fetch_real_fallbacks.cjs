const fs = require('fs');
const path = require('path');

const places = {
  "binsar": "Binsar wildlife sanctuary Uttarakhand",
  "jageshwar": "Jageshwar temple Almora",
  "hemkund-sahib": "Hemkund Sahib gurudwara",
  "khirsu": "Khirsu Pauri Garhwal",
  "lansdowne": "Lansdowne Uttarakhand"
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function commonsSearch(query, limit = 10) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/4.0 (ridewithchinu@gmail.com)' } });
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
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/4.0 (ridewithchinu@gmail.com)' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  for (const [slug, query] of Object.entries(places)) {
    console.log(`Searching for ${slug}...`);
    let candidates = await commonsSearch(query, 10);
    
    if (candidates.length > 0) {
      const best = candidates[0];
      const extMatch = best.url.match(/\.(jpg|jpeg|png|webp)(\?|$)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const fileName = `${slug}_real.${ext}`;
      const filePath = path.join(outRoot, fileName);

      try {
        await downloadImage(best.url, filePath);
        console.log(`Saved REAL image for ${slug} -> ${fileName}`);
        
        // Delete the unsplash one
        const unsplashPath = path.join(outRoot, `${slug}_unsplash.jpg`);
        if (fs.existsSync(unsplashPath)) {
          fs.unlinkSync(unsplashPath);
          console.log(`Deleted fake unsplash image for ${slug}`);
        }
      } catch (e) {
        console.error(`Failed to download ${slug}:`, e.message);
      }
    } else {
      console.log(`Still no real image found for ${slug}`);
    }
  }
}

run();
