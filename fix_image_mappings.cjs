const fs = require('fs');
const path = require('path');

const userImages = {
  "almora": "almora_user.png",
  "kausani": "kausani_user.png",
  "munsiyari": "munsiyari_user.png",
  "auli": "auli_user.png",
  "badrinath": "badrinath_user.png",
  "kedarnath": "kedarnath_user.png",
  "chopta": "chopta_user.png",
  "gangotri": "gangotri_user.png",
  "yamunotri": "yamunotri_user.png",
  "haridwar": "haridwar_user.png",
  "jim-corbett": "jim-corbett_user.png",
  "mussoorie": "mussoorie_user.png",
  "nainital": "nainital_user.png",
  "rishikesh": "rishikesh_user.png",
  "tehri-lake": "tehri-lake_user.png",
  "bhimtal": "bhimtal_user.png",
  "sattal": "sattal_user.png",
  "naukuchiatal": "naukuchiatal_user.png",
  "valley-of-flowers": "valley-of-flowers_user.png"
};

const fileContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');
const match = fileContent.match(/export const destinations: Destination\[\] = (\[[\s\S]*?\]);/);

if (!match) {
  console.error("Could not parse destinations");
  process.exit(1);
}

const dests = JSON.parse(match[1]);

dests.forEach(dest => {
  const slug = dest.id;
  let finalImagePath = '';

  // 1. Check user images
  if (userImages[slug] && fs.existsSync(path.join(__dirname, 'public', 'images', 'destinations', userImages[slug]))) {
    finalImagePath = `/images/destinations/${userImages[slug]}`;
  } 
  // 2. Check best images
  else if (fs.existsSync(path.join(__dirname, 'public', 'images', 'best', `${slug}.jpg`))) {
    finalImagePath = `/images/best/${slug}.jpg`;
  }
  // 3. Check fetched images
  else if (fs.existsSync(path.join(__dirname, 'public', 'images', 'destinations', `${slug}_fetched.jpg`))) {
    finalImagePath = `/images/destinations/${slug}_fetched.jpg`;
  }
  // 4. Check unsplash images
  else if (fs.existsSync(path.join(__dirname, 'public', 'images', 'destinations', `${slug}_unsplash.jpg`))) {
    finalImagePath = `/images/destinations/${slug}_unsplash.jpg`;
  }
  // 5. Check old local images (if any)
  else if (fs.existsSync(path.join(__dirname, 'public', 'images', 'destinations', `${slug}.jpg`))) {
    finalImagePath = `/images/destinations/${slug}.jpg`;
  }
  else if (fs.existsSync(path.join(__dirname, 'public', 'images', `${slug}.jpg`))) {
    finalImagePath = `/images/${slug}.jpg`;
  }
  else if (fs.existsSync(path.join(__dirname, 'public', 'images', `${slug}.png`))) {
    finalImagePath = `/images/${slug}.png`;
  }

  if (finalImagePath) {
    dest.image = finalImagePath;
    console.log(`Mapped ${slug} -> ${finalImagePath}`);
  } else {
    console.log(`WARNING: No image found for ${slug}`);
  }
});

const newContent = fileContent.replace(match[1], JSON.stringify(dests, null, 2));
fs.writeFileSync('src/data/destinations.ts', newContent);
console.log('Successfully fixed image mappings!');
