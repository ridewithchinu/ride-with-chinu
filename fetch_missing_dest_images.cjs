const fs = require('fs');
const path = require('path');

const missingIds = [
  'bhowali',    'pangot',
  'ramnagar',   'kaladhungi',
  'ranikhet',   'bageshwar',
  'tanakpur',   'tehri',
  'govindghat', 'mana',
  'guptkashi',  'sonprayag',
  'deoria-tal', 'harsil',
  'uttarkashi', 'barkot',
  'pauri',      'srinagar-garhwal',
  'kotdwar'
];

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function commonsSearch(query, limit = 5) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/12.0' } });
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
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/12.0' } });
  const data = await res.json();
  const pages = data.query?.pages || {};
  for (const key in pages) {
    const thumb = pages[key].thumbnail?.source;
    if (thumb) return thumb;
  }
  return null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/12.0' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
  const match = destsContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
  const dests = JSON.parse(match[1]);

  for (const slug of missingIds) {
    console.log(`Fetching image for ${slug}...`);
    const query = slug.replace(/-/g, ' ') + ' Uttarakhand';
    
    let candidates = [];
    try {
      candidates = await commonsSearch(query, 5);
    } catch (e) {
      console.error(`Commons search failed for ${slug}`);
    }

    if (candidates.length === 0) {
      const wikiTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      try {
        const img = await wikimediaPageImage(wikiTitle);
        if (img) candidates.push({ url: img });
      } catch (e) {
        console.error(`Wiki search failed for ${slug}`);
      }
    }

    if (candidates.length > 0) {
      const best = candidates[0];
      const extMatch = best.url.match(/\.(jpg|jpeg|png|webp)(\?|$)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const fileName = `${slug}_fetched.${ext}`;
      const filePath = path.join(outRoot, fileName);

      try {
        await downloadImage(best.url, filePath);
        console.log(`Saved image for ${slug} -> ${fileName}`);
        
        const dest = dests.find(d => d.id === slug);
        if (dest) {
          dest.image = `/images/destinations/${fileName}`;
        }
      } catch (e) {
        console.error(`Failed to download ${slug}:`, e.message);
      }
    } else {
      console.log(`No image found for ${slug}, using fallback.`);
      // Unsplash fallback
      const fallbackUrl = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000"; // Generic mountain
      const fileName = `${slug}_unsplash.jpg`;
      const filePath = path.join(outRoot, fileName);
      try {
        await downloadImage(fallbackUrl, filePath);
        const dest = dests.find(d => d.id === slug);
        if (dest) {
          dest.image = `/images/destinations/${fileName}`;
        }
      } catch(e) {}
    }
    
    await delay(2000);
  }

  const newContent = destsContent.replace(match[1], JSON.stringify(dests, null, 2));
  fs.writeFileSync('src/data/destinations.ts', newContent);
  console.log('Done updating missing destination images');
}

run();
