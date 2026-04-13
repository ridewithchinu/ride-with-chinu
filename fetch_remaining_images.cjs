const fs = require('fs');
const path = require('path');

const missingDestinations = {
  "binsar": "Binsar wildlife sanctuary Himalayas",
  "jageshwar": "Jageshwar temple complex Uttarakhand",
  "pithoragarh": "Pithoragarh fort hills Uttarakhand",
  "berinag": "Berinag tea gardens Himalayas",
  "lohaghat": "Lohaghat Uttarakhand scenic town",
  "champawat": "Champawat Uttarakhand temples heritage",
  "dehradun": "Dehradun Uttarakhand city caves",
  "joshimath": "Joshimath Uttarakhand base town",
  "hemkund-sahib": "Hemkund Sahib Uttarakhand",
  "ukhimath": "Ukhimath Uttarakhand temple town",
  "kanatal": "Kanatal Uttarakhand camps orchards",
  "dhanaulti": "Dhanaulti Uttarakhand eco park",
  "khirsu": "Khirsu Uttarakhand village views",
  "lansdowne": "Lansdowne Uttarakhand pine forest"
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');
if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true });

const delay = ms => new Promise(res => setTimeout(res, ms));

async function commonsSearch(query, limit = 5) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/3.0 (ridewithchinu@gmail.com)' } });
  if (!res.ok) throw new Error(`Commons API HTTP ${res.status}`);
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

async function wikimediaPageImage(pageTitle) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&pithumbsize=1200&piprop=thumbnail|name`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/3.0 (ridewithchinu@gmail.com)' } });
  if (!res.ok) throw new Error(`Wiki API HTTP ${res.status}`);
  const data = await res.json();
  const pages = data.query?.pages || {};
  for (const key in pages) {
    const thumb = pages[key].thumbnail?.source;
    if (thumb) return thumb;
  }
  return null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/3.0 (ridewithchinu@gmail.com)' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');

  for (const [slug, query] of Object.entries(missingDestinations)) {
    console.log(`Processing ${slug}...`);
    let candidates = [];
    try {
      candidates = await commonsSearch(query, 5);
    } catch (e) {
      console.error(`Commons search failed for ${slug}:`, e.message);
    }

    if (candidates.length === 0) {
      const wikiTitle = query.split(' ')[0].charAt(0).toUpperCase() + query.split(' ')[0].slice(1);
      try {
        const img = await wikimediaPageImage(wikiTitle);
        if (img) candidates.push({ url: img });
      } catch (e) {
        console.error(`Wiki page search failed for ${slug}:`, e.message);
      }
    }

    const best = candidates[0];
    if (best) {
      const extMatch = best.url.match(/\.(jpg|jpeg|png|webp)(\?|$)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const fileName = `${slug}_fetched.${ext}`;
      const filePath = path.join(outRoot, fileName);

      try {
        await downloadImage(best.url, filePath);
        console.log(`Saved ${slug} -> ${fileName}`);

        // Update destinations.ts
        const regex = new RegExp(`"id": "${slug}"[\\s\\S]*?"image": "(.*?)"`);
        const match = destsContent.match(regex);
        if (match) {
          destsContent = destsContent.replace(match[0], match[0].replace(match[1], `/images/destinations/${fileName}`));
        }
      } catch (e) {
        console.error(`Failed to download ${slug}:`, e.message);
      }
    } else {
      console.log(`No image found for ${slug}`);
    }
    
    // Add a 2.5 second delay to avoid HTTP 429 Too Many Requests
    await delay(2500);
  }

  fs.writeFileSync('src/data/destinations.ts', destsContent);
  console.log('Done updating destinations.ts');
}

run();
