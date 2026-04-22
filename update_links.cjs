const fs = require('fs');

const csv = fs.readFileSync('c:/Users/savya/Downloads/ride with chinu/new-updated-images/manifest.csv', 'utf8');
const lines = csv.trim().split('\n').slice(1);
const map = {};
for(let line of lines) {
  let parts = line.split('","');
  if(parts.length >= 2) {
    let place = parts[0].replace(/^"/, '');
    let url = parts[1];
    map[place] = url;
  }
}

let tsContent = fs.readFileSync('c:/Users/savya/Downloads/ride with chinu/project/zip/src/data/destinations.ts', 'utf8');

let replacedCount = 0;
for (const [placeKey, url] of Object.entries(map)) {
    let place = placeKey.replace(/_/g, ' ');
    // Top-level "name" for the destination object is indented by 4 spaces
    const re = new RegExp(`(\\n\\s{4}"name"\\s*:\\s*"${place}"[\\s\\S]*?\\n\\s{4}"image"\\s*:\\s*)"([^"]+)"`, "g");
    if(re.test(tsContent)) {
       tsContent = tsContent.replace(re, `$1"${url}"`);
       replacedCount++;
    } else {
       console.log('Could not find or replace:', place);
    }
}

fs.writeFileSync('c:/Users/savya/Downloads/ride with chinu/project/zip/src/data/destinations.ts', tsContent);
console.log('Replaced', replacedCount, 'places.');
console.log('Done!');
