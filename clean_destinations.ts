import fs from 'fs';
import { destinations } from './src/data/destinations.js';

const uniqueMap = new Map();
let removed = 0;

for (const d of destinations) {
    if (!uniqueMap.has(d.id)) {
        uniqueMap.set(d.id, d);
    } else {
        console.log(`Removed duplicate: ${d.id}`);
        removed++;
    }
}

const uniqueDestinations = Array.from(uniqueMap.values());

const output = `export interface Destination {
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

export const destinations: Destination[] = ${JSON.stringify(uniqueDestinations, null, 2)};

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
`;

fs.writeFileSync('src/data/destinations.ts', output);
console.log(`Cleaned! Removed ${removed} duplicates.`);
