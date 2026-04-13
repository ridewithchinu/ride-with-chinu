const fs = require('fs');
const path = require('path');

const missingImages = {
  "auli": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000", // Taj Mahal / India generic fallback if needed, or better: mountains
  "hemkund-sahib": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000", // Mountains
  "khirsu": "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000", // Nature
  "lansdowne": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000" // Forest
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');

  for (const [slug, url] of Object.entries(missingImages)) {
    console.log(`Processing missing image: ${slug}...`);
    const fileName = `${slug}.jpg`;
    const filePath = path.join(outRoot, fileName);

    try {
      await downloadImage(url, filePath);
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
  }

  fs.writeFileSync('src/data/destinations.ts', destsContent);
  console.log('Done updating missing images in destinations.ts');
}

run();
