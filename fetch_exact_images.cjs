const fs = require('fs');
const path = require('path');

const exactImages = {
  "jageshwar": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Jageshwar_Temples_Complex.jpg",
  "hemkund-sahib": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Hemkunt-003.jpg",
  "khirsu": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Dehradun_view_from_maggi_point.jpg" // Fallback to a nice mountain view
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/7.0' } });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
  const match = destsContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
  const dests = JSON.parse(match[1]);

  for (const [slug, url] of Object.entries(exactImages)) {
    console.log(`Downloading exact image for ${slug}...`);
    const fileName = `${slug}_exact.jpg`;
    const filePath = path.join(outRoot, fileName);

    try {
      await downloadImage(url, filePath);
      console.log(`Saved exact image for ${slug} -> ${fileName}`);
      
      const dest = dests.find(d => d.id === slug);
      if (dest) {
        dest.image = `/images/destinations/${fileName}`;
      }
    } catch (e) {
      console.error(`Failed to download ${slug}:`, e.message);
    }
  }

  const newContent = destsContent.replace(match[1], JSON.stringify(dests, null, 2));
  fs.writeFileSync('src/data/destinations.ts', newContent);
  console.log('Done updating exact images');
}

run();
