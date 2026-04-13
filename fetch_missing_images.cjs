const fs = require('fs');
const path = require('path');

const missingImages = {
  "sattal": "https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=1000",
  "jim-corbett": "https://images.unsplash.com/photo-1562569633-622303bafef5?q=80&w=1000", // Tiger
  "binsar": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000", // Forest/Mountains
  "jageshwar": "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1000", // Temple
  "munsiyari": "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1000", // Snow mountains
  "auli": "https://images.unsplash.com/photo-1610024062203-f310f8a87675?q=80&w=1000", // Snow/Ski
  "hemkund-sahib": "https://images.unsplash.com/photo-1623062831868-6a31f471131c?q=80&w=1000", // Lake/Mountains
  "tehri-lake": "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000", // Lake
  "khirsu": "https://images.unsplash.com/photo-1596422846543-74c6c2e28d8e?q=80&w=1000", // Village/Hills
  "lansdowne": "https://images.unsplash.com/photo-1596422846543-74c6c2e28d8e?q=80&w=1000" // Pine forest
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');
if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true });

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
