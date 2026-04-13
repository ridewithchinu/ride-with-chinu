const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
const publicImagesDir = path.join(__dirname, 'public', 'images');

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch (e) {
    console.error("Error downloading", url, e.message);
    return false;
  }
}

async function run() {
  let updatedContent = fileContent;
  
  // Sattal
  const sattalUrl = "https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=1000";
  const sattalPath = path.join(publicImagesDir, 'kumaon', 'nainital', 'sattal.jpg');
  await downloadImage(sattalUrl, sattalPath);
  updatedContent = updatedContent.replace(/"image": "https:\/\/picsum\.photos\/seed\/sattal\/800\/600"/, '"image": "/images/kumaon/nainital/sattal.jpg"');
  
  // Jageshwar
  const jageshwarUrl = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000";
  const jageshwarPath = path.join(publicImagesDir, 'kumaon', 'almora', 'jageshwar.jpg');
  await downloadImage(jageshwarUrl, jageshwarPath);
  updatedContent = updatedContent.replace(/"image": "https:\/\/picsum\.photos\/seed\/jageshwar\/800\/600"/, '"image": "/images/kumaon/almora/jageshwar.jpg"');

  fs.writeFileSync('src/data/destinations.ts', updatedContent);
  console.log("Fixed missing images!");
}

run();
