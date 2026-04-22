// ─── Types ────────────────────────────────────────────────────────────────────

export interface YatraApproach {
  route: string[];
  trekDistanceKm?: number;
  trekNotes?: string;
  trekModes?: string[];
  roadNotes?: string;
  bestTime: string[];
}

export interface YatraNode {
  id: string;
  name: string;
  image: string;
  region?: string;
  district?: string;
  type?: string[];
  summary: string;
  baseTown?: string;
  approach?: YatraApproach;
  subPlaces?: string[];
  stayOptions?: string[];
  /** Used in Do Dham to reference a full node from Char Dham */
  ref?: string;
}

export interface DayStop {
  day: number;
  title: string;
  start: string;
  end: string;
  distanceKmApprox: number;
  stops: string[];
  nightStay: string;
  notes: string[];
}

export interface Yatra {
  id: string;
  name: string;
  type: 'char-dham' | 'do-dham';
  toggleLabel: string;
  summary: string;
  startCity: string;
  idealDurationDays: number;
  heroImage: string;
  description: string;
  mainNodes: YatraNode[];
  days?: DayStop[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const yatraData: Yatra[] = [
  // ──────────────────────────────── CHAR DHAM ──────────────────────────────────
  {
    id: 'char-dham',
    name: 'Char Dham Yatra',
    type: 'char-dham',
    toggleLabel: 'Char Dham',
    summary: 'Complete Himalayan pilgrimage circuit: Yamunotri, Gangotri, Kedarnath, Badrinath.',
    startCity: 'Haridwar / Rishikesh / Dehradun',
    idealDurationDays: 10,
    heroImage: '/images/destinations/badrinath.jpg',
    description:
      'Traditional Himalayan pilgrimage circuit covering the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. A spiritual journey through the highest reaches of the Garhwal Himalayas.',
    mainNodes: [
      {
        id: 'yamunotri',
        name: 'Yamunotri',
        image: '/images/destinations/yamunotri.jpg',
        region: 'Garhwal',
        district: 'Uttarkashi',
        type: ['char-dham', 'pilgrimage', 'trek'],
        summary:
          'Source shrine of the Yamuna, reached by trek from Janki Chatti. First stop in the Char Dham Yatra.',
        baseTown: 'Barkot',
        approach: {
          route: [
            'Haridwar / Rishikesh',
            'Mussoorie (optional halt)',
            'Barkot',
            'Janki Chatti',
            'Yamunotri Temple',
          ],
          trekDistanceKm: 6,
          trekNotes: 'Steep but well-defined path; pony/palki available.',
          bestTime: ['May–June', 'September–October'],
        },
        subPlaces: [
          'Yamunotri Temple',
          'Tapt Kund (hot springs)',
          'Surya Kund',
          'Divya Shila',
          'Janki Chatti',
        ],
        stayOptions: [
          'Barkot guesthouses and hotels',
          'Dharamshalas near Yamunotri',
          'Simple lodges at Janki Chatti',
        ],
      },
      {
        id: 'gangotri',
        name: 'Gangotri',
        image: '/images/destinations/gangotri.jpg',
        region: 'Garhwal',
        district: 'Uttarkashi',
        type: ['char-dham', 'pilgrimage', 'trek'],
        summary:
          'Temple town at the origin of the Ganga, gateway for treks to Gaumukh and Tapovan.',
        baseTown: 'Uttarkashi',
        approach: {
          route: [
            'Barkot / Yamunotri region',
            'Uttarkashi',
            'Harsil (optional halt)',
            'Gangotri',
          ],
          roadNotes: 'Scenic mountain road along the Bhagirathi; monsoon landslide-prone.',
          bestTime: ['May–June', 'September–October'],
        },
        subPlaces: [
          'Gangotri Temple',
          'Gaumukh Trek Start (from Gangotri)',
          'Tapovan Trek (beyond Gaumukh)',
          'Bhairon Ghati',
          'Harsil Valley',
          'Pandava Gufa',
        ],
        stayOptions: [
          'Dharamshalas at Gangotri',
          'GMVN Rest House at Gangotri',
          'Hotels and guesthouses at Uttarkashi',
        ],
      },
      {
        id: 'kedarnath',
        name: 'Kedarnath',
        image: '/images/destinations/kedarnath.jpg',
        region: 'Garhwal',
        district: 'Rudraprayag',
        type: ['char-dham', 'jyotirlinga', 'trek'],
        summary:
          'High-altitude Shiva temple and one of the Char Dhams, reached via trek from Gaurikund.',
        baseTown: 'Guptkashi / Sonprayag / Gaurikund',
        approach: {
          route: [
            'Haridwar / Rishikesh',
            'Rudraprayag',
            'Guptkashi',
            'Sonprayag',
            'Gaurikund',
            'Kedarnath Temple',
          ],
          trekDistanceKm: 16,
          trekModes: ['On foot', 'Pony', 'Palki', 'Helicopter (partial)'],
          bestTime: ['May–June', 'September–October'],
        },
        subPlaces: [
          'Kedarnath Temple',
          'Bhairav Temple',
          'Gaurikund (hot springs, trek start)',
          'Vasuki Tal Trek',
          'Gandhi Sarovar / Chorabari Tal',
          'Triyuginarayan',
          'Guptkashi Temples',
          'Ukhimath (winter seat of Kedarnath)',
        ],
        stayOptions: [
          'Basic dharamshalas at Kedarnath',
          'Tented camps near the temple',
          'Hotels at Guptkashi and Sonprayag',
          'GMVN Rest Houses along the route',
        ],
      },
      {
        id: 'badrinath',
        name: 'Badrinath',
        image: '/images/destinations/badrinath.jpg',
        region: 'Garhwal',
        district: 'Chamoli',
        type: ['char-dham', 'pilgrimage'],
        summary:
          'Sacred Vishnu temple town and the last dham in the circuit, located on the banks of the Alaknanda.',
        baseTown: 'Joshimath',
        approach: {
          route: [
            'Rishikesh / Haridwar',
            'Devprayag',
            'Srinagar Garhwal',
            'Rudraprayag',
            'Karnaprayag',
            'Chamoli',
            'Joshimath',
            'Badrinath',
          ],
          roadNotes: 'Long but drivable highway with multiple prayag points (confluences).',
          bestTime: ['May–June', 'September–October'],
        },
        subPlaces: [
          'Badrinath Temple',
          'Tapt Kund',
          'Neelkanth Parvat Viewpoints',
          'Mana Village (last Indian village)',
          'Vyas Gufa',
          'Ganesh Gufa',
          'Saraswati River Origin',
          'Vasudhara Falls',
          'Charan Paduka',
        ],
        stayOptions: [
          'Dharamshalas around the temple',
          'Budget and mid-range hotels in Badrinath',
          'GMVN Rest House at Badrinath',
          'Hotels and homestays in Joshimath',
        ],
      },
    ],
  },

  // ─────────────────────────────── DO DHAM ────────────────────────────────────
  {
    id: 'do-dham-kedarnath-badrinath',
    name: 'Do Dham Yatra – Kedarnath & Badrinath',
    type: 'do-dham',
    toggleLabel: 'Do Dham',
    summary:
      'Two-dham pilgrimage covering Kedarnath and Badrinath with key halts at Guptkashi and Joshimath.',
    startCity: 'Haridwar / Rishikesh / Dehradun',
    idealDurationDays: 6,
    heroImage: '/images/destinations/kedarnath.jpg',
    description:
      'Focused two-dham pilgrimage covering Kedarnath and Badrinath — the two most iconic sacred shrines of the Garhwal Himalayas, combining trekking, Alaknanda valley drives, and divine darshans.',
    mainNodes: [
      {
        id: 'kedarnath',
        ref: 'kedarnath',
        name: 'Kedarnath',
        image: '/images/destinations/kedarnath.jpg',
        summary:
          'High-altitude Shiva temple reached via a 16 km trek from Gaurikund.',
        subPlaces: [
          'Kedarnath Temple',
          'Bhairav Temple',
          'Gaurikund',
          'Vasuki Tal',
          'Gandhi Sarovar',
          'Guptkashi',
        ],
        stayOptions: [
          'Dharamshalas at Kedarnath',
          'Tented camps near the temple',
          'Hotels at Guptkashi',
        ],
      },
      {
        id: 'badrinath',
        ref: 'badrinath',
        name: 'Badrinath',
        image: '/images/destinations/badrinath.jpg',
        summary:
          'Sacred Vishnu temple on the banks of Alaknanda, the final dham of the circuit.',
        subPlaces: [
          'Badrinath Temple',
          'Tapt Kund',
          'Mana Village',
          'Vasudhara Falls',
          'Vyas Gufa',
          'Neelkanth Parvat',
        ],
        stayOptions: [
          'Dharamshalas in Badrinath',
          'GMVN Rest House',
          'Hotels in Joshimath',
        ],
      },
    ],
    days: [
      {
        day: 1,
        title: 'Arrival – Drive to Guptkashi',
        start: 'Haridwar / Rishikesh',
        end: 'Guptkashi',
        distanceKmApprox: 200,
        stops: [
          'Rishikesh (Triveni Ghat – optional)',
          'Devprayag (Alaknanda–Bhagirathi confluence)',
          'Srinagar Garhwal',
          'Rudraprayag (Alaknanda–Mandakini confluence)',
        ],
        nightStay: 'Guptkashi',
        notes: [
          'Start early from the plains to avoid mountain traffic.',
          'Book hotel in Guptkashi in advance during peak season (May–June).',
        ],
      },
      {
        day: 2,
        title: 'Guptkashi – Trek to Kedarnath',
        start: 'Guptkashi',
        end: 'Kedarnath',
        distanceKmApprox: 35,
        stops: [
          'Sonprayag (vehicle change point)',
          'Gaurikund (trek start, hot spring)',
          'Kedarnath Trek Route (~16 km)',
        ],
        nightStay: 'Kedarnath (dharamshala / camp)',
        notes: [
          'Mandatory Yatra registration and medical check at Sonprayag.',
          'Trek ~16 km; pony/palki and helicopter options available.',
          'Carry warm clothing and rain gear.',
        ],
      },
      {
        day: 3,
        title: 'Kedarnath Darshan – Return to Guptkashi',
        start: 'Kedarnath',
        end: 'Guptkashi / Sitapur',
        distanceKmApprox: 16,
        stops: [
          'Kedarnath Temple Darshan',
          'Bhairav Temple (short hike)',
          'Descend to Gaurikund',
          'Return drive to Sonprayag–Guptkashi',
        ],
        nightStay: 'Guptkashi / Sitapur',
        notes: [
          'Start early for temple darshan to avoid long queues.',
          'Plan descent with buffer for weather delays.',
        ],
      },
      {
        day: 4,
        title: 'Guptkashi – Joshimath',
        start: 'Guptkashi',
        end: 'Joshimath',
        distanceKmApprox: 175,
        stops: [
          'Rudraprayag',
          'Karnaprayag (Pindar–Alaknanda confluence)',
          'Chamoli',
          'Joshimath Town',
        ],
        nightStay: 'Joshimath',
        notes: [
          'Scenic drive along the Alaknanda valley.',
          'Optional evening: Narsingh Temple and Adi Shankaracharya Math.',
        ],
      },
      {
        day: 5,
        title: 'Joshimath – Badrinath – Mana Village',
        start: 'Joshimath',
        end: 'Joshimath / Badrinath',
        distanceKmApprox: 90,
        stops: [
          'Badrinath Temple',
          'Tapt Kund',
          'Mana Village (Vyas Gufa, Ganesh Gufa, Saraswati River)',
          'Neelkanth Parvat viewpoints',
        ],
        nightStay: 'Badrinath or Joshimath',
        notes: [
          'Plan darshan timing as per crowd and aarti schedule.',
          'Check weather and road advisory before staying at Badrinath.',
        ],
      },
      {
        day: 6,
        title: 'Badrinath / Joshimath – Return to Rishikesh',
        start: 'Badrinath / Joshimath',
        end: 'Rishikesh / Haridwar',
        distanceKmApprox: 280,
        stops: [
          'Joshimath',
          'Chamoli',
          'Karnaprayag',
          'Rudraprayag',
          'Devprayag',
          'Rishikesh / Haridwar',
        ],
        nightStay: 'End of Yatra (or Rishikesh for Ganga Aarti)',
        notes: [
          'Long driving day — start early morning.',
          'Consider an extra night in Rishikesh for Ganga Aarti and rest.',
        ],
      },
    ],
  },
];
