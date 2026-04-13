const fs = require('fs');
const path = require('path');

const data = {
  "uttarakhand": {
    "regions": [
      {
        "name": "Kumaon",
        "slug": "kumaon",
        "districts": [
          {
            "name": "Nainital",
            "slug": "nainital-district",
            "places": [
              {
                "name": "Nainital",
                "slug": "nainital",
                "region": "Kumaon",
                "district": "Nainital",
                "type": ["hill-station", "lake-destination", "family"],
                "summary": "Popular hill station centered around Naini Lake, known for boating, viewpoints, shopping, and colonial heritage.",
                "tags": ["Lakes", "Boating", "Views"],
                "subPlaces": [
                  "Naini Lake",
                  "Naina Devi Temple",
                  "Mall Road",
                  "Snow View Point",
                  "Tiffin Top",
                  "Naina Peak",
                  "Nainital Zoo",
                  "Raj Bhawan",
                  "St. John's Church",
                  "Hanuman Garhi",
                  "Cave Garden"
                ],
                "nearbyPlaces": ["Bhimtal", "Sattal", "Naukuchiatal", "Bhowali", "Pangot"]
              },
              {
                "name": "Bhimtal",
                "slug": "bhimtal",
                "region": "Kumaon",
                "district": "Nainital",
                "type": ["lake-destination", "family", "relaxation"],
                "summary": "Scenic lake town near Nainital known for boating and quieter surroundings.",
                "tags": ["Lake", "Boating", "Scenic"],
                "subPlaces": ["Bhimtal Lake", "Aquarium Island"],
                "nearbyPlaces": ["Nainital", "Sattal", "Naukuchiatal"]
              },
              {
                "name": "Sattal",
                "slug": "sattal",
                "region": "Kumaon",
                "district": "Nainital",
                "type": ["lake-destination", "birdwatching", "nature"],
                "summary": "Cluster of freshwater lakes popular for nature stays and birdwatching.",
                "tags": ["Lakes", "Nature", "Birdwatching"],
                "subPlaces": ["Seven Lakes Area", "Forest Trails"],
                "nearbyPlaces": ["Nainital", "Bhimtal", "Naukuchiatal"]
              },
              {
                "name": "Naukuchiatal",
                "slug": "naukuchiatal",
                "region": "Kumaon",
                "district": "Nainital",
                "type": ["lake-destination", "paragliding", "nature"],
                "summary": "Nine-cornered lake destination known for peaceful views and adventure activities.",
                "tags": ["Lake", "Paragliding", "Views"],
                "subPlaces": ["Naukuchiatal Lake", "Adventure Activity Zone"],
                "nearbyPlaces": ["Bhimtal", "Sattal", "Nainital"]
              },
              {
                "name": "Jim Corbett National Park",
                "slug": "jim-corbett",
                "region": "Kumaon",
                "district": "Nainital",
                "type": ["wildlife", "safari", "nature"],
                "summary": "Forested wildlife sanctuary known for Bengal tigers, safaris, river landscapes, and biodiversity.",
                "tags": ["Bengal Tigers", "Wildlife Safari", "Nature"],
                "subPlaces": [
                  "Dhikala Zone",
                  "Bijrani Zone",
                  "Jhirna Zone",
                  "Dhela Zone",
                  "Durga Devi Zone",
                  "Garjiya Zone",
                  "Garjiya Devi Temple",
                  "Corbett Museum",
                  "Corbett Waterfall",
                  "Ramnagar"
                ],
                "nearbyPlaces": ["Ramnagar", "Kaladhungi", "Nainital"]
              }
            ]
          },
          {
            "name": "Almora",
            "slug": "almora-district",
            "places": [
              {
                "name": "Almora",
                "slug": "almora",
                "region": "Kumaon",
                "district": "Almora",
                "type": ["heritage", "culture", "hill-station"],
                "summary": "Cultural center of Kumaon known for temples, ridge views, bazaars, and handicrafts.",
                "tags": ["Culture", "Temples", "Heritage"],
                "subPlaces": [
                  "Bright End Corner",
                  "Chitai Golu Devta Temple",
                  "Kasar Devi Temple",
                  "Katarmal Sun Temple",
                  "Local Bazaars"
                ],
                "nearbyPlaces": ["Binsar", "Jageshwar", "Kausani", "Ranikhet"]
              },
              {
                "name": "Binsar",
                "slug": "binsar",
                "region": "Kumaon",
                "district": "Almora",
                "type": ["wildlife", "nature", "viewpoint"],
                "summary": "Forest sanctuary and scenic retreat known for Himalayan views and quiet stays.",
                "tags": ["Wildlife", "Forest", "Views"],
                "subPlaces": ["Binsar Wildlife Sanctuary", "Zero Point"],
                "nearbyPlaces": ["Almora", "Jageshwar"]
              },
              {
                "name": "Jageshwar",
                "slug": "jageshwar",
                "region": "Kumaon",
                "district": "Almora",
                "type": ["temple", "spiritual", "heritage"],
                "summary": "Historic temple complex in deodar forests, important for Shaivite pilgrimage and heritage tourism.",
                "tags": ["Temples", "Spiritual", "Heritage"],
                "subPlaces": ["Jageshwar Temple Complex", "Dandeshwar Temple"],
                "nearbyPlaces": ["Almora", "Binsar"]
              }
            ]
          },
          {
            "name": "Bageshwar",
            "slug": "bageshwar-district",
            "places": [
              {
                "name": "Kausani",
                "slug": "kausani",
                "region": "Kumaon",
                "district": "Bageshwar",
                "type": ["hill-station", "viewpoint", "relaxation"],
                "summary": "Panoramic Himalayan retreat known for sunrise views, tea gardens, and Gandhi heritage.",
                "tags": ["Himalayan Views", "Tea Gardens", "Peaceful"],
                "subPlaces": [
                  "Anashakti Ashram",
                  "Tea Gardens",
                  "Viewpoints",
                  "Baijnath Temple"
                ],
                "nearbyPlaces": ["Almora", "Bageshwar"]
              }
            ]
          },
          {
            "name": "Pithoragarh",
            "slug": "pithoragarh-district",
            "places": [
              {
                "name": "Munsiyari",
                "slug": "munsiyari",
                "region": "Kumaon",
                "district": "Pithoragarh",
                "type": ["high-altitude", "trekking", "mountain-views"],
                "summary": "Gateway to the Johar Valley, known for Panchachuli views and trekking routes.",
                "tags": ["Panchachuli", "Trekking", "Mountain Views"],
                "subPlaces": [
                  "Khaliya Top",
                  "Birthi Falls",
                  "Darkot Village",
                  "Milam Glacier Route",
                  "Ralam Valley"
                ],
                "nearbyPlaces": ["Pithoragarh", "Berinag"]
              },
              {
                "name": "Pithoragarh",
                "slug": "pithoragarh",
                "region": "Kumaon",
                "district": "Pithoragarh",
                "type": ["culture", "gateway", "scenic-town"],
                "summary": "Border district town known for forts, hills, caves, and as a gateway to higher Himalayan routes.",
                "tags": ["Fort", "Caves", "Scenic"],
                "subPlaces": [
                  "Pithoragarh Fort",
                  "Chandak Hill",
                  "Kapileshwar Cave",
                  "Askot Sanctuary"
                ],
                "nearbyPlaces": ["Munsiyari", "Berinag", "Lohaghat", "Champawat"]
              },
              {
                "name": "Berinag",
                "slug": "berinag",
                "region": "Kumaon",
                "district": "Pithoragarh",
                "type": ["offbeat", "viewpoint", "hill-station"],
                "summary": "Quiet hill destination known for tea gardens and Himalayan views.",
                "tags": ["Offbeat", "Tea", "Views"],
                "subPlaces": ["Berinag Viewpoints", "Tea Garden Belt"],
                "nearbyPlaces": ["Munsiyari", "Pithoragarh"]
              }
            ]
          },
          {
            "name": "Champawat",
            "slug": "champawat-district",
            "places": [
              {
                "name": "Lohaghat",
                "slug": "lohaghat",
                "region": "Kumaon",
                "district": "Champawat",
                "type": ["offbeat", "hill-station", "heritage"],
                "summary": "Quiet scenic town in eastern Kumaon known for heritage, forests, and relaxed travel.",
                "tags": ["Offbeat", "Heritage", "Forest"],
                "subPlaces": ["Abbott Mount", "Mayawati Ashram"],
                "nearbyPlaces": ["Champawat", "Pithoragarh", "Tanakpur"]
              },
              {
                "name": "Champawat",
                "slug": "champawat",
                "region": "Kumaon",
                "district": "Champawat",
                "type": ["heritage", "temple", "culture"],
                "summary": "Historic Chand dynasty center known for temples and old Kumaoni heritage.",
                "tags": ["Heritage", "Temples", "History"],
                "subPlaces": ["Baleshwar Temple", "Historic Town Core"],
                "nearbyPlaces": ["Lohaghat", "Tanakpur"]
              }
            ]
          }
        ]
      },
      {
        "name": "Garhwal",
        "slug": "garhwal",
        "districts": [
          {
            "name": "Dehradun",
            "slug": "dehradun-district",
            "places": [
              {
                "name": "Rishikesh",
                "slug": "rishikesh",
                "region": "Garhwal",
                "district": "Dehradun",
                "type": ["spiritual", "adventure", "wellness"],
                "summary": "Yoga capital on the Ganges, known for meditation, rafting, temples, and iconic suspension bridges.",
                "tags": ["Yoga", "River Rafting", "Temples"],
                "subPlaces": [
                  "Triveni Ghat",
                  "Laxman Jhula",
                  "Ram Jhula",
                  "Beatles Ashram",
                  "Neelkanth Mahadev Temple",
                  "Rajaji National Park Access Belt"
                ],
                "nearbyPlaces": ["Haridwar", "Dehradun", "Tehri"]
              },
              {
                "name": "Mussoorie",
                "slug": "mussoorie",
                "region": "Garhwal",
                "district": "Dehradun",
                "type": ["hill-station", "family", "heritage"],
                "summary": "Classic hill station known for colonial charm, viewpoints, waterfalls, and nearby Landour.",
                "tags": ["Colonial", "Views", "Waterfalls"],
                "subPlaces": [
                  "Mall Road",
                  "Lal Tibba",
                  "Kempty Falls",
                  "Camel's Back Road",
                  "Company Garden",
                  "Gun Hill",
                  "Landour",
                  "Benog Wildlife Sanctuary"
                ],
                "nearbyPlaces": ["Dhanaulti", "Kanatal", "Dehradun"]
              },
              {
                "name": "Dehradun",
                "slug": "dehradun",
                "region": "Garhwal",
                "district": "Dehradun",
                "type": ["city", "gateway", "culture"],
                "summary": "Capital city and transport hub known for caves, monasteries, colonial institutions, and food.",
                "tags": ["Gateway", "City", "Culture"],
                "subPlaces": [
                  "Robber's Cave",
                  "Sahastradhara",
                  "Forest Research Institute",
                  "Tapkeshwar Temple",
                  "Mindrolling Monastery",
                  "Paltan Bazaar",
                  "Tibetan Market"
                ],
                "nearbyPlaces": ["Mussoorie", "Rishikesh", "Haridwar"]
              }
            ]
          },
          {
            "name": "Haridwar",
            "slug": "haridwar-district",
            "places": [
              {
                "name": "Haridwar",
                "slug": "haridwar",
                "region": "Garhwal",
                "district": "Haridwar",
                "type": ["pilgrimage", "spiritual", "festival"],
                "summary": "Major Ganga pilgrimage city known for Har Ki Pauri, temple circuits, and Kumbh traditions.",
                "tags": ["Ganga Aarti", "Pilgrimage", "Temples"],
                "subPlaces": [
                  "Har Ki Pauri",
                  "Mansa Devi Temple",
                  "Chandi Devi Temple",
                  "Maya Devi Temple",
                  "Bharat Mata Mandir",
                  "Shantikunj",
                  "Patanjali Yogpeeth"
                ],
                "nearbyPlaces": ["Rishikesh", "Dehradun"]
              }
            ]
          },
          {
            "name": "Chamoli",
            "slug": "chamoli-district",
            "places": [
              {
                "name": "Auli",
                "slug": "auli",
                "region": "Garhwal",
                "district": "Chamoli",
                "type": ["ski-destination", "snow", "mountain-views"],
                "summary": "Himalayan ski resort known for ropeway rides, winter sports, and bugyal landscapes.",
                "tags": ["Skiing", "Snow", "Himalayan Views"],
                "subPlaces": [
                  "Auli Ropeway",
                  "Ski Slopes",
                  "Gorson Bugyal",
                  "Auli Artificial Lake"
                ],
                "nearbyPlaces": ["Joshimath", "Badrinath", "Valley of Flowers"]
              },
              {
                "name": "Joshimath",
                "slug": "joshimath",
                "region": "Garhwal",
                "district": "Chamoli",
                "type": ["gateway", "spiritual", "base-town"],
                "summary": "Important base town for Auli, Badrinath, Valley of Flowers, and Hemkund Sahib.",
                "tags": ["Gateway", "Spiritual", "Base Camp"],
                "subPlaces": [
                  "Adi Shankaracharya Math",
                  "Narsingh Temple",
                  "Kalpavriksha",
                  "Auli Ropeway Base"
                ],
                "nearbyPlaces": ["Auli", "Badrinath", "Govindghat", "Hemkund Sahib"]
              },
              {
                "name": "Badrinath",
                "slug": "badrinath",
                "region": "Garhwal",
                "district": "Chamoli",
                "type": ["char-dham", "pilgrimage", "high-altitude"],
                "summary": "Sacred Vishnu temple town and one of the Char Dham pilgrimage sites.",
                "tags": ["Char Dham", "Temple", "Pilgrimage"],
                "subPlaces": [
                  "Badrinath Temple",
                  "Tapt Kund",
                  "Mana Village",
                  "Vasudhara Falls",
                  "Charan Paduka"
                ],
                "nearbyPlaces": ["Joshimath", "Mana", "Auli"]
              },
              {
                "name": "Valley of Flowers",
                "slug": "valley-of-flowers",
                "region": "Garhwal",
                "district": "Chamoli",
                "type": ["trekking", "nature", "unesco"],
                "summary": "UNESCO alpine valley known for seasonal wildflower bloom and high-altitude trekking.",
                "tags": ["Flowers", "Trek", "UNESCO"],
                "subPlaces": [
                  "Govindghat",
                  "Pulna",
                  "Ghangaria",
                  "Valley Trail",
                  "Viewpoints"
                ],
                "nearbyPlaces": ["Hemkund Sahib", "Joshimath", "Auli"]
              },
              {
                "name": "Hemkund Sahib",
                "slug": "hemkund-sahib",
                "region": "Garhwal",
                "district": "Chamoli",
                "type": ["pilgrimage", "trekking", "high-altitude"],
                "summary": "High-altitude Sikh pilgrimage destination reached by trek from Ghangaria.",
                "tags": ["Sikh Pilgrimage", "Lake", "Trek"],
                "subPlaces": [
                  "Hemkund Sahib Gurudwara",
                  "Hemkund Lake",
                  "Ghangaria Base"
                ],
                "nearbyPlaces": ["Valley of Flowers", "Joshimath", "Govindghat"]
              }
            ]
          },
          {
            "name": "Rudraprayag",
            "slug": "rudraprayag-district",
            "places": [
              {
                "name": "Kedarnath",
                "slug": "kedarnath",
                "region": "Garhwal",
                "district": "Rudraprayag",
                "type": ["char-dham", "jyotirlinga", "trekking"],
                "summary": "Sacred Himalayan temple town known for Kedarnath Temple and pilgrimage trek from Gaurikund.",
                "tags": ["Jyotirlinga", "Char Dham Yatra", "Himalayan Trek"],
                "subPlaces": [
                  "Kedarnath Temple",
                  "Bhairav Temple",
                  "Gaurikund",
                  "Vasuki Tal",
                  "Gandhi Sarovar"
                ],
                "nearbyPlaces": ["Guptkashi", "Sonprayag", "Chopta", "Ukhimath"]
              },
              {
                "name": "Chopta",
                "slug": "chopta",
                "region": "Garhwal",
                "district": "Rudraprayag",
                "type": ["meadows", "trekking", "offbeat"],
                "summary": "High meadow region and trek base for Tungnath and Chandrashila.",
                "tags": ["Mini Switzerland", "Tungnath Trek", "Meadows"],
                "subPlaces": [
                  "Chopta Meadows",
                  "Tungnath Temple",
                  "Chandrashila Summit",
                  "Deoria Tal",
                  "Sari Village",
                  "Duggalbitta"
                ],
                "nearbyPlaces": ["Ukhimath", "Kedarnath", "Guptkashi"]
              },
              {
                "name": "Ukhimath",
                "slug": "ukhimath",
                "region": "Garhwal",
                "district": "Rudraprayag",
                "type": ["spiritual", "gateway", "culture"],
                "summary": "Religious town and winter seat of Kedarnath deity, also a base for Chopta routes.",
                "tags": ["Winter Seat", "Temple", "Gateway"],
                "subPlaces": ["Omkareshwar Temple", "Town Center"],
                "nearbyPlaces": ["Chopta", "Guptkashi", "Deoria Tal"]
              }
            ]
          },
          {
            "name": "Uttarkashi",
            "slug": "uttarkashi-district",
            "places": [
              {
                "name": "Gangotri",
                "slug": "gangotri",
                "region": "Garhwal",
                "district": "Uttarkashi",
                "type": ["char-dham", "pilgrimage", "trekking"],
                "summary": "Sacred Ganga source pilgrimage town and trek base for Gaumukh.",
                "tags": ["Ganga Source", "Temple", "Trek"],
                "subPlaces": [
                  "Gangotri Temple",
                  "Gaumukh Trail",
                  "Bhairon Ghati",
                  "Pandava Gufa"
                ],
                "nearbyPlaces": ["Harsil", "Uttarkashi"]
              },
              {
                "name": "Yamunotri",
                "slug": "yamunotri",
                "region": "Garhwal",
                "district": "Uttarkashi",
                "type": ["char-dham", "pilgrimage", "trekking"],
                "summary": "Source shrine of the Yamuna and an important Char Dham stop reached via trek from Janki Chatti.",
                "tags": ["Yamuna Source", "Temple", "Pilgrimage"],
                "subPlaces": [
                  "Yamunotri Temple",
                  "Janki Chatti",
                  "Tapt Kund",
                  "Surya Kund",
                  "Divya Shila"
                ],
                "nearbyPlaces": ["Barkot", "Uttarkashi"]
              }
            ]
          },
          {
            "name": "Tehri Garhwal",
            "slug": "tehri-garhwal-district",
            "places": [
              {
                "name": "Tehri Lake",
                "slug": "tehri-lake",
                "region": "Garhwal",
                "district": "Tehri Garhwal",
                "type": ["adventure", "water-sports", "lake"],
                "summary": "Reservoir destination known for water sports, dam views, and panoramic landscapes.",
                "tags": ["Water Sports", "Lake", "Adventure"],
                "subPlaces": [
                  "Tehri Dam",
                  "Water Sports Zone",
                  "Kunjapuri Temple"
                ],
                "nearbyPlaces": ["Rishikesh", "Kanatal", "Dhanaulti"]
              },
              {
                "name": "Kanatal",
                "slug": "kanatal",
                "region": "Garhwal",
                "district": "Tehri Garhwal",
                "type": ["offbeat", "hill-station", "camping"],
                "summary": "Quiet high-altitude retreat known for apple orchards, camps, and forest walks.",
                "tags": ["Offbeat", "Camping", "Orchards"],
                "subPlaces": [
                  "Apple Orchards",
                  "Kodai Jungle",
                  "Adventure Camps"
                ],
                "nearbyPlaces": ["Dhanaulti", "Mussoorie", "Tehri Lake"]
              },
              {
                "name": "Dhanaulti",
                "slug": "dhanaulti",
                "region": "Garhwal",
                "district": "Tehri Garhwal",
                "type": ["hill-station", "family", "offbeat"],
                "summary": "Cool hill retreat near Mussoorie known for eco parks and relaxed mountain views.",
                "tags": ["Eco Park", "Views", "Peaceful"],
                "subPlaces": ["Dhanaulti Eco Park", "Surkanda Devi Temple"],
                "nearbyPlaces": ["Mussoorie", "Kanatal"]
              }
            ]
          },
          {
            "name": "Pauri Garhwal",
            "slug": "pauri-garhwal-district",
            "places": [
              {
                "name": "Khirsu",
                "slug": "khirsu",
                "region": "Garhwal",
                "district": "Pauri Garhwal",
                "type": ["offbeat", "hill-station", "village-tourism"],
                "summary": "Quiet hill station with village walks, mountain views, and Garhwali cultural atmosphere.",
                "tags": ["Offbeat", "Village", "Views"],
                "subPlaces": [
                  "Khirsu Village",
                  "Pauri Town",
                  "Jwalpa Devi Temple",
                  "Devalgarh",
                  "Tara Kund",
                  "Ulkha Giri"
                ],
                "nearbyPlaces": ["Pauri", "Srinagar Garhwal"]
              },
              {
                "name": "Lansdowne",
                "slug": "lansdowne",
                "region": "Garhwal",
                "district": "Pauri Garhwal",
                "type": ["cantonment", "hill-station", "weekend"],
                "summary": "Colonial cantonment hill station known for pine forests and relaxed short trips.",
                "tags": ["Cantonment", "Pines", "Weekend Trip"],
                "subPlaces": ["Bhulla Tal", "Tip n Top", "St. Mary's Church"],
                "nearbyPlaces": ["Kotdwar", "Khirsu"]
              }
            ]
          }
        ]
      }
    ]
  }
};

const typeToCategory = {
  "hill-station": "Hill Stations",
  "lake-destination": "Lakes and Scenic Retreats",
  "family": "Family trip",
  "relaxation": "Lakes and Scenic Retreats",
  "birdwatching": "Wildlife / Nature",
  "nature": "Wildlife / Nature",
  "paragliding": "Adventure Destinations",
  "wildlife": "Wildlife / Nature",
  "safari": "Wildlife / Nature",
  "heritage": "Heritage / Culture",
  "culture": "Heritage / Culture",
  "viewpoint": "Hill Stations",
  "temple": "Spiritual / Pilgrimage",
  "spiritual": "Spiritual / Pilgrimage",
  "high-altitude": "Trekking / High Altitude",
  "trekking": "Trekking / High Altitude",
  "mountain-views": "Hill Stations",
  "gateway": "Offbeat / Village Tourism",
  "scenic-town": "Offbeat / Village Tourism",
  "offbeat": "Offbeat / Village Tourism",
  "adventure": "Adventure Destinations",
  "wellness": "Spiritual / Pilgrimage",
  "city": "Heritage / Culture",
  "pilgrimage": "Spiritual / Pilgrimage",
  "festival": "Heritage / Culture",
  "ski-destination": "Adventure Destinations",
  "snow": "Adventure Destinations",
  "base-town": "Offbeat / Village Tourism",
  "char-dham": "Spiritual / Pilgrimage",
  "unesco": "Heritage / Culture",
  "jyotirlinga": "Spiritual / Pilgrimage",
  "meadows": "Trekking / High Altitude",
  "water-sports": "Adventure Destinations",
  "lake": "Lakes and Scenic Retreats",
  "camping": "Adventure Destinations",
  "village-tourism": "Offbeat / Village Tourism",
  "cantonment": "Heritage / Culture",
  "weekend": "Offbeat / Village Tourism"
};

// Create public/images directory if it doesn't exist
const publicImagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Map uploaded files to slugs
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

// Copy files
Object.entries(fileMappings).forEach(([filename, slugs]) => {
  const srcPath = path.join(__dirname, filename);
  if (fs.existsSync(srcPath)) {
    slugs.forEach(slug => {
      const destPath = path.join(publicImagesDir, \`\${slug}.png\`);
      fs.copyFileSync(srcPath, destPath);
    });
  }
});

const destinations = [];

data.uttarakhand.regions.forEach(region => {
  region.districts.forEach(district => {
    district.places.forEach(place => {
      const categories = [...new Set(place.type.map(t => typeToCategory[t] || "Offbeat / Village Tourism"))];
      
      // Check if we have a local image
      const localImagePath = path.join(publicImagesDir, \`\${place.slug}.png\`);
      const imagePath = fs.existsSync(localImagePath) 
        ? \`/images/\${place.slug}.png\` 
        : \`https://picsum.photos/seed/\${place.slug}/800/600\`;
      
      destinations.push({
        id: place.slug,
        name: place.name,
        region: place.region,
        district: place.district,
        category: categories,
        specialty: place.tags,
        altitude: "Varies",
        best_time: ["Spring", "Summer", "Autumn"],
        avoid_time: ["Monsoon"],
        nearest_airport: "Jolly Grant Airport / Pantnagar Airport",
        nearest_railway: "Kathgodam / Rishikesh / Dehradun",
        road_access: "Well connected by road",
        top_attractions: place.subPlaces,
        activities: ["Sightseeing", "Photography", "Local Exploration"],
        cuisine: ["Local Uttarakhandi", "North Indian"],
        stay_types: ["Hotels", "Guesthouses", "Homestays"],
        budget_range: "₹2000 - ₹8000+ per day",
        permits_required: [],
        travel_tips: ["Carry warm clothes", "Respect local culture"],
        packing_list: ["Comfortable shoes", "Warm layers", "Camera"],
        festivals: [],
        nearby_places: place.nearbyPlaces.map(np => ({ name: np, id: np.toLowerCase().replace(/ /g, '-') })),
        image: imagePath,
        description: place.summary
      });
    });
  });
});

const fileContent = \`export interface Destination {
  id: string;
  name: string;
  region: string;
  district: string;
  category: string[];
  specialty: string[];
  altitude: string;
  best_time: string[];
  avoid_time: string[];
  nearest_airport: string;
  nearest_railway: string;
  road_access: string;
  top_attractions: string[];
  activities: string[];
  cuisine: string[];
  stay_types: string[];
  budget_range: string;
  permits_required: string[];
  travel_tips: string[];
  packing_list: string[];
  festivals: string[];
  nearby_places: { name: string; id: string }[];
  image: string;
  description: string;
}

export const destinations: Destination[] = \${JSON.stringify(destinations, null, 2)};

export const categories = [
  "Hill Stations",
  "Spiritual / Pilgrimage",
  "Adventure Destinations",
  "Wildlife / Nature",
  "Lakes and Scenic Retreats",
  "Trekking / High Altitude",
  "Heritage / Culture",
  "Offbeat / Village Tourism"
];
\`;

fs.writeFileSync('src/data/destinations.ts', fileContent);
console.log('Done');
