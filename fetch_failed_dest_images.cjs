const fs = require('fs');
const path = require('path');

const failedIds = ['bageshwar', 'tanakpur', 'uttarkashi', 'kotdwar'];

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/13.0' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
  const match = destsContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
  const dests = JSON.parse(match[1]);

  for (const slug of failedIds) {
    console.log(`Fetching fallback for ${slug}...`);
    const fallbackUrl = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000"; // Generic mountain
    const fileName = `${slug}_unsplash.jpg`;
    const filePath = path.join(outRoot, fileName);
    try {
      await downloadImage(fallbackUrl, filePath);
      const dest = dests.find(d => d.id === slug);
      if (dest) {
        dest.image = `/images/destinations/${fileName}`;
      }
      console.log(`Saved fallback for ${slug}`);
    } catch(e) {
      console.error(e.message);
    }
  }

  const newContent = destsContent.replace(match[1], JSON.stringify(dests, null, 2));
  fs.writeFileSync('src/data/destinations.ts', newContent);
  console.log('Done updating failed destination images');
}

run();
