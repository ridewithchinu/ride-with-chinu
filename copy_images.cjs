const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const fileMappings = {
  "Almora, Kausani, Munsiyari, and Mukteshwar, especially panoramic ridges and Himalayan viewpoints..png": ["almora", "kausani", "munsiyari"],
  "Auli, especially snow slopes, ropeway, and winter mountain views..png": ["auli"],
  "Badrinath and Kedarnath, especially the temples and high-altitude pilgrimage setting..png": ["badrinath", "kedarnath"],
  "Chopta, Tungnath, and Chandrashila, especially meadow and summit landscapes..png": ["chopta"],
  "Gangotri and Yamunotri, especially temple and Himalayan river source views..png": ["gangotri", "yamunotri"],
  "Haridwar, especially Har Ki Pauri and Ganga Aarti..png": ["haridwar"],
  "Jim Corbett National Park, especially safari, forest, and wildlife imagery..png": ["jim-corbett"],
  "Mussoorie, especially Mall Road, Lal Tibba, Kempty Falls, Camel’s Back Road, and Landour..png": ["mussoorie"],
  "Nainital, especially Naini Lake, Mall Road, Snow View Point, and the lakefront..png": ["nainital"],
  "Rishikesh, especially Triveni Ghat, Ram Jhula, Laxman Jhula, and river rafting scenes..png": ["rishikesh"],
  "Tehri Lake, Bhimtal, Sattal, and Naukuchiatal for lake and water-sport visuals..png": ["tehri-lake", "bhimtal", "sattal", "naukuchiatal"],
  "Valley of Flowers, especially alpine meadows and flower carpets..png": ["valley-of-flowers"]
};

Object.entries(fileMappings).forEach(([filename, slugs]) => {
  const srcPath = path.join(__dirname, filename);
  if (fs.existsSync(srcPath)) {
    slugs.forEach(slug => {
      const destPath = path.join(publicImagesDir, slug + '.png');
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied', filename, 'to', destPath);
    });
  } else {
    console.log('Not found:', srcPath);
  }
});
