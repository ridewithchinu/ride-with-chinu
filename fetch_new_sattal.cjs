const fs = require('fs');
const path = require('path');

// A beautiful, highly relevant image of a green lake surrounded by dense forest, perfectly matching Sattal's description.
const sattalUrl = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000";

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/11.0' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  console.log(`Downloading new exact image for sattal...`);
  const fileName = `sattal_nature.jpg`;
  const filePath = path.join(outRoot, fileName);

  try {
    await downloadImage(sattalUrl, filePath);
    console.log(`Saved new image for sattal -> ${fileName}`);
    
    let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
    const match = destsContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
    const dests = JSON.parse(match[1]);

    const dest = dests.find(d => d.id === 'sattal');
    if (dest) {
      dest.image = `/images/destinations/${fileName}`;
    }

    const newContent = destsContent.replace(match[1], JSON.stringify(dests, null, 2));
    fs.writeFileSync('src/data/destinations.ts', newContent);
    console.log('Done updating sattal image');
  } catch (e) {
    console.error(`Failed to download sattal:`, e.message);
  }
}

run();
