const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
const publicImagesDir = path.join(__dirname, 'public', 'images');

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'RideWithChinuBot/1.0'
      }
    });
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
  const sattalUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sattal_Lake.jpg/1280px-Sattal_Lake.jpg";
  const sattalPath = path.join(publicImagesDir, 'kumaon', 'nainital', 'sattal.jpg');
  await downloadImage(sattalUrl, sattalPath);
  updatedContent = updatedContent.replace(/"image": "https:\/\/picsum\.photos\/seed\/sattal\/800\/600"/, '"image": "/images/kumaon/nainital/sattal.jpg"');
  
  // Jageshwar
  const jageshwarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jageshwar_Temples_Complex.jpg/1280px-Jageshwar_Temples_Complex.jpg";
  const jageshwarPath = path.join(publicImagesDir, 'kumaon', 'almora', 'jageshwar.jpg');
  await downloadImage(jageshwarUrl, jageshwarPath);
  updatedContent = updatedContent.replace(/"image": "https:\/\/picsum\.photos\/seed\/jageshwar\/800\/600"/, '"image": "/images/kumaon/almora/jageshwar.jpg"');

  fs.writeFileSync('src/data/destinations.ts', updatedContent);
  console.log("Fixed missing images!");
}

run();
