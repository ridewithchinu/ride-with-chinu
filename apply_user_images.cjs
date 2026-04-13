const fs = require('fs');
const path = require('path');

const userImages = {
  "almora": "Almora, Kausani, Munsiyari, and Mukteshwar, especially panoramic ridges and Himalayan viewpoints..png",
  "kausani": "Almora, Kausani, Munsiyari, and Mukteshwar, especially panoramic ridges and Himalayan viewpoints..png",
  "munsiyari": "Almora, Kausani, Munsiyari, and Mukteshwar, especially panoramic ridges and Himalayan viewpoints..png",
  "auli": "Auli, especially snow slopes, ropeway, and winter mountain views..png",
  "badrinath": "Badrinath and Kedarnath, especially the temples and high-altitude pilgrimage setting..png",
  "kedarnath": "Badrinath and Kedarnath, especially the temples and high-altitude pilgrimage setting..png",
  "chopta": "Chopta, Tungnath, and Chandrashila, especially meadow and summit landscapes..png",
  "gangotri": "Gangotri and Yamunotri, especially temple and Himalayan river source views..png",
  "yamunotri": "Gangotri and Yamunotri, especially temple and Himalayan river source views..png",
  "haridwar": "Haridwar, especially Har Ki Pauri and Ganga Aarti..png",
  "jim-corbett": "Jim Corbett National Park, especially safari, forest, and wildlife imagery..png",
  "mussoorie": "Mussoorie, especially Mall Road, Lal Tibba, Kempty Falls, Camel’s Back Road, and Landour..png",
  "nainital": "Nainital, especially Naini Lake, Mall Road, Snow View Point, and the lakefront..png",
  "rishikesh": "Rishikesh, especially Triveni Ghat, Ram Jhula, Laxman Jhula, and river rafting scenes..png",
  "tehri-lake": "Tehri Lake, Bhimtal, Sattal, and Naukuchiatal for lake and water-sport visuals..png",
  "bhimtal": "Tehri Lake, Bhimtal, Sattal, and Naukuchiatal for lake and water-sport visuals..png",
  "sattal": "Tehri Lake, Bhimtal, Sattal, and Naukuchiatal for lake and water-sport visuals..png",
  "naukuchiatal": "Tehri Lake, Bhimtal, Sattal, and Naukuchiatal for lake and water-sport visuals..png",
  "valley-of-flowers": "Valley of Flowers, especially alpine meadows and flower carpets..png"
};

const outRoot = path.join(__dirname, 'public', 'images', 'destinations');
if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true });

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');

  for (const [slug, fileName] of Object.entries(userImages)) {
    const sourcePath = path.join(__dirname, fileName);
    if (fs.existsSync(sourcePath)) {
      const destFileName = `${slug}_user.png`;
      const destPath = path.join(outRoot, destFileName);
      
      // Copy the file
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${fileName} to ${destFileName}`);

      // Update destinations.ts
      const regex = new RegExp(`"id": "${slug}"[\\s\\S]*?"image": "(.*?)"`);
      const match = destsContent.match(regex);
      if (match) {
        destsContent = destsContent.replace(match[0], match[0].replace(match[1], `/images/destinations/${destFileName}`));
      }
    } else {
      console.log(`Source image not found: ${fileName}`);
    }
  }

  fs.writeFileSync('src/data/destinations.ts', destsContent);
  console.log('Done updating destinations.ts with user images');
}

run();
