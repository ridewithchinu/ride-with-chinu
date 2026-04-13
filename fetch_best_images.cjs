const fs = require('fs');
const path = require('path');

const destinationsMap = {
  "nainital": {
    "district": "Nainital",
    "region": "Kumaon",
    "image_search_terms": ["Nainital Uttarakhand lake town"]
  },
  "bhimtal": {
    "district": "Nainital",
    "region": "Kumaon",
    "image_search_terms": ["Bhimtal lake Uttarakhand"]
  },
  "sattal": {
    "district": "Nainital",
    "region": "Kumaon",
    "image_search_terms": ["Sattal lakes Uttarakhand"]
  },
  "naukuchiatal": {
    "district": "Nainital",
    "region": "Kumaon",
    "image_search_terms": ["Naukuchiatal lake Uttarakhand"]
  },
  "jim-corbett": {
    "district": "Nainital",
    "region": "Kumaon",
    "image_search_terms": ["Jim Corbett National Park tiger safari"]
  },
  "almora": {
    "district": "Almora",
    "region": "Kumaon",
    "image_search_terms": ["Almora Uttarakhand ridge town"]
  },
  "binsar": {
    "district": "Almora",
    "region": "Kumaon",
    "image_search_terms": ["Binsar wildlife sanctuary Himalayas"]
  },
  "jageshwar": {
    "district": "Almora",
    "region": "Kumaon",
    "image_search_terms": ["Jageshwar temple complex Uttarakhand"]
  },
  "kausani": {
    "district": "Bageshwar",
    "region": "Kumaon",
    "image_search_terms": ["Kausani Himalayan views tea gardens"]
  },
  "munsiyari": {
    "district": "Pithoragarh",
    "region": "Kumaon",
    "image_search_terms": ["Munsiyari Panchachuli view"]
  },
  "pithoragarh": {
    "district": "Pithoragarh",
    "region": "Kumaon",
    "image_search_terms": ["Pithoragarh fort hills Uttarakhand"]
  },
  "berinag": {
    "district": "Pithoragarh",
    "region": "Kumaon",
    "image_search_terms": ["Berinag tea gardens Himalayas"]
  },
  "lohaghat": {
    "district": "Champawat",
    "region": "Kumaon",
    "image_search_terms": ["Lohaghat Uttarakhand scenic town"]
  },
  "champawat": {
    "district": "Champawat",
    "region": "Kumaon",
    "image_search_terms": ["Champawat Uttarakhand temples heritage"]
  },
  "rishikesh": {
    "district": "Dehradun",
    "region": "Garhwal",
    "image_search_terms": ["Rishikesh Ganges suspension bridge"]
  },
  "mussoorie": {
    "district": "Dehradun",
    "region": "Garhwal",
    "image_search_terms": ["Mussoorie viewpoint colonial hill station"]
  },
  "dehradun": {
    "district": "Dehradun",
    "region": "Garhwal",
    "image_search_terms": ["Dehradun Uttarakhand city caves"]
  },
  "haridwar": {
    "district": "Haridwar",
    "region": "Garhwal",
    "image_search_terms": ["Haridwar Har Ki Pauri Ganga aarti"]
  },
  "auli": {
    "district": "Chamoli",
    "region": "Garhwal",
    "image_search_terms": ["Auli ski resort Uttarakhand"]
  },
  "joshimath": {
    "district": "Chamoli",
    "region": "Garhwal",
    "image_search_terms": ["Joshimath Uttarakhand base town"]
  },
  "badrinath": {
    "district": "Chamoli",
    "region": "Garhwal",
    "image_search_terms": ["Badrinath temple Uttarakhand"]
  },
  "valley-of-flowers": {
    "district": "Chamoli",
    "region": "Garhwal",
    "image_search_terms": ["Valley of Flowers Uttarakhand"]
  },
  "hemkund-sahib": {
    "district": "Chamoli",
    "region": "Garhwal",
    "image_search_terms": ["Hemkund Sahib Uttarakhand"]
  },
  "kedarnath": {
    "district": "Rudraprayag",
    "region": "Garhwal",
    "image_search_terms": ["Kedarnath temple Uttarakhand"]
  },
  "chopta": {
    "district": "Rudraprayag",
    "region": "Garhwal",
    "image_search_terms": ["Chopta Tungnath meadow"]
  },
  "ukhimath": {
    "district": "Rudraprayag",
    "region": "Garhwal",
    "image_search_terms": ["Ukhimath Uttarakhand temple town"]
  },
  "gangotri": {
    "district": "Uttarkashi",
    "region": "Garhwal",
    "image_search_terms": ["Gangotri temple Uttarakhand"]
  },
  "yamunotri": {
    "district": "Uttarkashi",
    "region": "Garhwal",
    "image_search_terms": ["Yamunotri temple Uttarakhand"]
  },
  "tehri-lake": {
    "district": "Tehri Garhwal",
    "region": "Garhwal",
    "image_search_terms": ["Tehri Lake water sports Uttarakhand"]
  },
  "kanatal": {
    "district": "Tehri Garhwal",
    "region": "Garhwal",
    "image_search_terms": ["Kanatal Uttarakhand camps orchards"]
  },
  "dhanaulti": {
    "district": "Tehri Garhwal",
    "region": "Garhwal",
    "image_search_terms": ["Dhanaulti Uttarakhand eco park"]
  },
  "khirsu": {
    "district": "Pauri Garhwal",
    "region": "Garhwal",
    "image_search_terms": ["Khirsu Uttarakhand village views"]
  },
  "lansdowne": {
    "district": "Pauri Garhwal",
    "region": "Garhwal",
    "image_search_terms": ["Lansdowne Uttarakhand pine forest"]
  }
};

const outRoot = path.join(__dirname, 'public', 'images', 'best');
if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true });

async function commonsSearch(query, limit = 5) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/1.0' } });
  const data = await res.json();
  const pages = data.query?.pages || {};
  const results = [];
  for (const key in pages) {
    const p = pages[key];
    if (p.imageinfo && p.imageinfo[0]) {
      const ii = p.imageinfo[0];
      if (ii.url && !ii.url.toLowerCase().endsWith('.svg') && !ii.url.toLowerCase().endsWith('.pdf')) {
        results.push({
          title: p.title,
          url: ii.url,
          width: ii.width || 0,
          height: ii.height || 0
        });
      }
    }
  }
  results.sort((a, b) => (b.width * b.height) - (a.width * a.height));
  return results;
}

async function wikimediaPageImage(pageTitle) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&pithumbsize=1200&piprop=thumbnail|name`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/1.0' } });
  const data = await res.json();
  const pages = data.query?.pages || {};
  for (const key in pages) {
    const thumb = pages[key].thumbnail?.source;
    if (thumb) return thumb;
  }
  return null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'RideWithChinuBot/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function run() {
  let destsContent = fs.readFileSync('src/data/destinations.ts', 'utf-8');

  for (const [slug, info] of Object.entries(destinationsMap)) {
    console.log(`Processing ${slug}...`);
    const query = info.image_search_terms[0];
    let candidates = [];
    try {
      candidates = await commonsSearch(query, 5);
    } catch (e) {
      console.error(`Commons search failed for ${slug}:`, e.message);
    }

    if (candidates.length === 0) {
      const wikiTitle = query.split(' ')[0];
      try {
        const img = await wikimediaPageImage(wikiTitle);
        if (img) candidates.push({ url: img });
      } catch (e) {}
    }

    const best = candidates[0];
    if (best) {
      const extMatch = best.url.match(/\.(jpg|jpeg|png|webp)(\?|$)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const fileName = `${slug}.${ext}`;
      const filePath = path.join(outRoot, fileName);

      try {
        await downloadImage(best.url, filePath);
        console.log(`Saved ${slug} -> ${fileName}`);

        // Update destinations.ts
        const regex = new RegExp(`"id": "${slug}"[\\s\\S]*?"image": "(.*?)"`);
        const match = destsContent.match(regex);
        if (match) {
          destsContent = destsContent.replace(match[0], match[0].replace(match[1], `/images/best/${fileName}`));
        }
      } catch (e) {
        console.error(`Failed to download ${slug}:`, e.message);
      }
    } else {
      console.log(`No image found for ${slug}`);
    }
    await new Promise(r => setTimeout(r, 500));
  }

  fs.writeFileSync('src/data/destinations.ts', destsContent);
  console.log('Done updating destinations.ts');
}

run();
