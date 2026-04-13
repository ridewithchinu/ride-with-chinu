const fs = require('fs');
const path = require('path');

const destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
const match = destsContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
const dests = JSON.parse(match[1]);

const usedImages = new Set();
dests.forEach(d => {
  if (d.image) {
    const filename = path.basename(d.image);
    usedImages.add(filename);
  }
});

const dir = './public/images/destinations';
const files = fs.readdirSync(dir);

let deletedCount = 0;
let savedBytes = 0;

for (const f of files) {
  if (!usedImages.has(f)) {
    const filePath = path.join(dir, f);
    const size = fs.statSync(filePath).size;
    fs.unlinkSync(filePath);
    deletedCount++;
    savedBytes += size;
    console.log(`Deleted unused image: ${f}`);
  }
}

console.log(`\nCleanup complete!`);
console.log(`Deleted ${deletedCount} unused images.`);
console.log(`Saved ${(savedBytes / (1024 * 1024)).toFixed(2)} MB of space.`);
