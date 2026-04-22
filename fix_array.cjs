const fs = require('fs');
let content = fs.readFileSync('src/data/destinations.ts', 'utf8');

// The regex that finds the exact bad insertion point
// ]; <newlines> export const categories = [ ... ] , { id: "devprayag"
const regex = /\];\s*export const categories = \[\s*"Hill Stations",\s*"Spiritual \/ Pilgrimage",\s*"Adventure Destinations",\s*"Wildlife \/ Nature",\s*"Lakes and Scenic Retreats",\s*"Trekking \/ High Altitude",\s*"Heritage \/ Culture",\s*"Offbeat \/ Village Tourism"\s*,\s*(\{[\s\S]*?"id":\s*"devprayag")/g;

if (regex.test(content)) {
    content = content.replace(regex, ',$1');
    console.log('Replaced bad syntax successfully.');
} else {
    console.log('Regex did not match!');
}

// Clean up the extra one at the bottom if anything was duplicated
const lastCategoriesIndex = content.lastIndexOf('export const categories = [');
const firstCategoriesIndex = content.indexOf('export const categories = [');

if (lastCategoriesIndex !== firstCategoriesIndex && lastCategoriesIndex > 0) {
    // If there is more than one, delete the very last one we appended earlier
    content = content.substring(0, lastCategoriesIndex);
}

// Ensure exactly ONE `export const categories` exists at the bottom
if (content.indexOf('export const categories = [') === -1) {
    content += `\nexport const categories = [\n  "Hill Stations",\n  "Spiritual / Pilgrimage",\n  "Adventure Destinations",\n  "Wildlife / Nature",\n  "Lakes and Scenic Retreats",\n  "Trekking / High Altitude",\n  "Heritage / Culture",\n  "Offbeat / Village Tourism"\n];\n`;
}

fs.writeFileSync('src/data/destinations.ts', content);
console.log('Done!');
