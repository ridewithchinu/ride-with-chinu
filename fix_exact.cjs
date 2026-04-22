const fs = require('fs');

let lines = fs.readFileSync('src/data/destinations.ts', 'utf8').split(/\r?\n/);

// Verify the index
if (lines[3823].trim() === '];' && lines[3825].includes('export const categories')) {
    // Delete lines 3823 to 3834
    // Wait, let's just make lines 3823 to 3834 empty strings, except 3834 which is `,` so we just replace 3823-3834 with a single comma or just nothing if 3835 is {
    
    // We want the array of objects to continue from previous objects, so the last object before this ended on line 3822 `}`.
    // Line 3823 was `];`. We need to remove `];` and add a `,` because line 3835 is `{`.
    for (let i = 3823; i <= 3834; i++) {
        lines[i] = '';
    }
    
    // Line 3823 becomes `,` to continue the array
    lines[3823] = ',';

    let content = lines.join('\n');
    
    // Append the categories array
    content += `\nexport const categories = [\n  "Hill Stations",\n  "Spiritual / Pilgrimage",\n  "Adventure Destinations",\n  "Wildlife / Nature",\n  "Lakes and Scenic Retreats",\n  "Trekking / High Altitude",\n  "Heritage / Culture",\n  "Offbeat / Village Tourism"\n];\n`;
    
    fs.writeFileSync('src/data/destinations.ts', content);
    console.log('Fixed correctly and wrote back to file.');
} else {
    console.log('Line mismatch. Expected ]; on 3823, got: ' + lines[3823]);
}
