const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
const match = fileContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);
const dests = JSON.parse(match[1]);

dests.forEach(dest => {
  const slug = dest.id;
  
  // If the current image is an unsplash or generic one, let's try to find the original
  if (dest.image.includes('unsplash') || dest.image.includes('_exact') || dest.image.includes('_wiki')) {
    console.log(`Checking original for ${slug}...`);
    
    // Search in the old directory structure
    const oldDirs = [
      `kumaon/almora/${slug}.jpg`,
      `kumaon/bageshwar/${slug}.jpg`,
      `kumaon/champawat/${slug}.jpg`,
      `kumaon/nainital/${slug}.jpg`,
      `kumaon/pithoragarh/${slug}.jpg`,
      `garhwal/chamoli/${slug}.jpg`,
      `garhwal/dehradun/${slug}.jpg`,
      `garhwal/haridwar/${slug}.jpg`,
      `garhwal/pauri-garhwal/${slug}.jpg`,
      `garhwal/rudraprayag/${slug}.jpg`,
      `garhwal/tehri-garhwal/${slug}.jpg`,
      `garhwal/uttarkashi/${slug}.jpg`
    ];

    for (const oldDir of oldDirs) {
      if (fs.existsSync(path.join(__dirname, 'public', 'images', oldDir))) {
        dest.image = `/images/${oldDir}`;
        console.log(`Restored ${slug} to ${dest.image}`);
        break;
      }
    }
  }
});

const newContent = fileContent.replace(match[1], JSON.stringify(dests, null, 2));
fs.writeFileSync('src/data/destinations.ts', newContent);
console.log('Done restoring original images');
