export interface Destination {
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

export const destinations: Destination[] = [
  {
    "id": "nainital",
    "name": "Nainital",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Hill Stations",
      "Lakes and Scenic Retreats",
      "Family trip"
    ],
    "specialty": [
      "Lakes",
      "Boating",
      "Views"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
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
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Bhimtal",
        "id": "bhimtal"
      },
      {
        "name": "Sattal",
        "id": "sattal"
      },
      {
        "name": "Naukuchiatal",
        "id": "naukuchiatal"
      },
      {
        "name": "Bhowali",
        "id": "bhowali"
      },
      {
        "name": "Pangot",
        "id": "pangot"
      }
    ],
    "image": "/images/destinations/nainital_user.png",
    "description": "Popular hill station centered around Naini Lake, known for boating, viewpoints, shopping, and colonial heritage."
  },
  {
    "id": "bhimtal",
    "name": "Bhimtal",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Lakes and Scenic Retreats",
      "Family trip"
    ],
    "specialty": [
      "Lake",
      "Boating",
      "Scenic"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Bhimtal Lake",
      "Aquarium Island"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Nainital",
        "id": "nainital"
      },
      {
        "name": "Sattal",
        "id": "sattal"
      },
      {
        "name": "Naukuchiatal",
        "id": "naukuchiatal"
      }
    ],
    "image": "/images/destinations/bhimtal_distinct_wiki.jpg",
    "description": "Scenic lake town near Nainital known for boating and quieter surroundings."
  },
  {
    "id": "sattal",
    "name": "Sattal",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Lakes and Scenic Retreats",
      "Wildlife / Nature"
    ],
    "specialty": [
      "Lakes",
      "Nature",
      "Birdwatching"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Seven Lakes Area",
      "Forest Trails"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Nainital",
        "id": "nainital"
      },
      {
        "name": "Bhimtal",
        "id": "bhimtal"
      },
      {
        "name": "Naukuchiatal",
        "id": "naukuchiatal"
      }
    ],
    "image": "/images/destinations/sattal_nature.jpg",
    "description": "Cluster of freshwater lakes popular for nature stays and birdwatching."
  },
  {
    "id": "naukuchiatal",
    "name": "Naukuchiatal",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Lakes and Scenic Retreats",
      "Adventure Destinations",
      "Wildlife / Nature"
    ],
    "specialty": [
      "Lake",
      "Paragliding",
      "Views"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Naukuchiatal Lake",
      "Adventure Activity Zone"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Bhimtal",
        "id": "bhimtal"
      },
      {
        "name": "Sattal",
        "id": "sattal"
      },
      {
        "name": "Nainital",
        "id": "nainital"
      }
    ],
    "image": "/images/destinations/naukuchiatal_distinct_wiki.jpg",
    "description": "Nine-cornered lake destination known for peaceful views and adventure activities."
  },
  {
    "id": "jim-corbett",
    "name": "Jim Corbett National Park",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Wildlife / Nature"
    ],
    "specialty": [
      "Bengal Tigers",
      "Wildlife Safari",
      "Nature"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
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
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Ramnagar",
        "id": "ramnagar"
      },
      {
        "name": "Kaladhungi",
        "id": "kaladhungi"
      },
      {
        "name": "Nainital",
        "id": "nainital"
      }
    ],
    "image": "/images/destinations/jim-corbett_user.png",
    "description": "Forested wildlife sanctuary known for Bengal tigers, safaris, river landscapes, and biodiversity."
  },
  {
    "id": "almora",
    "name": "Almora",
    "region": "Kumaon",
    "district": "Almora",
    "category": [
      "Heritage / Culture",
      "Hill Stations"
    ],
    "specialty": [
      "Culture",
      "Temples",
      "Heritage"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Bright End Corner",
      "Chitai Golu Devta Temple",
      "Kasar Devi Temple",
      "Katarmal Sun Temple",
      "Local Bazaars"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Binsar",
        "id": "binsar"
      },
      {
        "name": "Jageshwar",
        "id": "jageshwar"
      },
      {
        "name": "Kausani",
        "id": "kausani"
      },
      {
        "name": "Ranikhet",
        "id": "ranikhet"
      }
    ],
    "image": "/images/destinations/almora_user.png",
    "description": "Cultural center of Kumaon known for temples, ridge views, bazaars, and handicrafts."
  },
  {
    "id": "binsar",
    "name": "Binsar",
    "region": "Kumaon",
    "district": "Almora",
    "category": [
      "Wildlife / Nature",
      "Hill Stations"
    ],
    "specialty": [
      "Wildlife",
      "Forest",
      "Views"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Binsar Wildlife Sanctuary",
      "Zero Point"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Almora",
        "id": "almora"
      },
      {
        "name": "Jageshwar",
        "id": "jageshwar"
      }
    ],
    "image": "/images/kumaon/almora/binsar.jpg",
    "description": "Forest sanctuary and scenic retreat known for Himalayan views and quiet stays."
  },
  {
    "id": "jageshwar",
    "name": "Jageshwar",
    "region": "Kumaon",
    "district": "Almora",
    "category": [
      "Spiritual / Pilgrimage",
      "Heritage / Culture"
    ],
    "specialty": [
      "Temples",
      "Spiritual",
      "Heritage"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Jageshwar Temple Complex",
      "Dandeshwar Temple"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Almora",
        "id": "almora"
      },
      {
        "name": "Binsar",
        "id": "binsar"
      }
    ],
    "image": "/images/kumaon/almora/jageshwar.jpg",
    "description": "Historic temple complex in deodar forests, important for Shaivite pilgrimage and heritage tourism."
  },
  {
    "id": "kausani",
    "name": "Kausani",
    "region": "Kumaon",
    "district": "Bageshwar",
    "category": [
      "Hill Stations",
      "Lakes and Scenic Retreats"
    ],
    "specialty": [
      "Himalayan Views",
      "Tea Gardens",
      "Peaceful"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Anashakti Ashram",
      "Tea Gardens",
      "Viewpoints",
      "Baijnath Temple"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Almora",
        "id": "almora"
      },
      {
        "name": "Bageshwar",
        "id": "bageshwar"
      }
    ],
    "image": "/images/destinations/kausani_user.png",
    "description": "Panoramic Himalayan retreat known for sunrise views, tea gardens, and Gandhi heritage."
  },
  {
    "id": "munsiyari",
    "name": "Munsiyari",
    "region": "Kumaon",
    "district": "Pithoragarh",
    "category": [
      "Trekking / High Altitude",
      "Hill Stations"
    ],
    "specialty": [
      "Panchachuli",
      "Trekking",
      "Mountain Views"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Khaliya Top",
      "Birthi Falls",
      "Darkot Village",
      "Milam Glacier Route",
      "Ralam Valley"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Pithoragarh",
        "id": "pithoragarh"
      },
      {
        "name": "Berinag",
        "id": "berinag"
      }
    ],
    "image": "/images/destinations/munsiyari_user.png",
    "description": "Gateway to the Johar Valley, known for Panchachuli views and trekking routes."
  },
  {
    "id": "pithoragarh",
    "name": "Pithoragarh",
    "region": "Kumaon",
    "district": "Pithoragarh",
    "category": [
      "Heritage / Culture",
      "Offbeat / Village Tourism"
    ],
    "specialty": [
      "Fort",
      "Caves",
      "Scenic"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Pithoragarh Fort",
      "Chandak Hill",
      "Kapileshwar Cave",
      "Askot Sanctuary"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Munsiyari",
        "id": "munsiyari"
      },
      {
        "name": "Berinag",
        "id": "berinag"
      },
      {
        "name": "Lohaghat",
        "id": "lohaghat"
      },
      {
        "name": "Champawat",
        "id": "champawat"
      }
    ],
    "image": "/images/best/pithoragarh.jpg",
    "description": "Border district town known for forts, hills, caves, and as a gateway to higher Himalayan routes."
  },
  {
    "id": "berinag",
    "name": "Berinag",
    "region": "Kumaon",
    "district": "Pithoragarh",
    "category": [
      "Offbeat / Village Tourism",
      "Hill Stations"
    ],
    "specialty": [
      "Offbeat",
      "Tea",
      "Views"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Berinag Viewpoints",
      "Tea Garden Belt"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Munsiyari",
        "id": "munsiyari"
      },
      {
        "name": "Pithoragarh",
        "id": "pithoragarh"
      }
    ],
    "image": "/images/destinations/berinag_fetched.jpg",
    "description": "Quiet hill destination known for tea gardens and Himalayan views."
  },
  {
    "id": "lohaghat",
    "name": "Lohaghat",
    "region": "Kumaon",
    "district": "Champawat",
    "category": [
      "Offbeat / Village Tourism",
      "Hill Stations",
      "Heritage / Culture"
    ],
    "specialty": [
      "Offbeat",
      "Heritage",
      "Forest"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Abbott Mount",
      "Mayawati Ashram"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Champawat",
        "id": "champawat"
      },
      {
        "name": "Pithoragarh",
        "id": "pithoragarh"
      },
      {
        "name": "Tanakpur",
        "id": "tanakpur"
      }
    ],
    "image": "/images/destinations/lohaghat_fetched.jpg",
    "description": "Quiet scenic town in eastern Kumaon known for heritage, forests, and relaxed travel."
  },
  {
    "id": "champawat",
    "name": "Champawat",
    "region": "Kumaon",
    "district": "Champawat",
    "category": [
      "Heritage / Culture",
      "Spiritual / Pilgrimage"
    ],
    "specialty": [
      "Heritage",
      "Temples",
      "History"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Baleshwar Temple",
      "Historic Town Core"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Lohaghat",
        "id": "lohaghat"
      },
      {
        "name": "Tanakpur",
        "id": "tanakpur"
      }
    ],
    "image": "/images/best/champawat.jpg",
    "description": "Historic Chand dynasty center known for temples and old Kumaoni heritage."
  },
  {
    "id": "rishikesh",
    "name": "Rishikesh",
    "region": "Garhwal",
    "district": "Dehradun",
    "category": [
      "Spiritual / Pilgrimage",
      "Adventure Destinations"
    ],
    "specialty": [
      "Yoga",
      "River Rafting",
      "Temples"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Triveni Ghat",
      "Laxman Jhula",
      "Ram Jhula",
      "Beatles Ashram",
      "Neelkanth Mahadev Temple",
      "Rajaji National Park Access Belt"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Haridwar",
        "id": "haridwar"
      },
      {
        "name": "Dehradun",
        "id": "dehradun"
      },
      {
        "name": "Tehri",
        "id": "tehri"
      }
    ],
    "image": "/images/destinations/rishikesh_user.png",
    "description": "Yoga capital on the Ganges, known for meditation, rafting, temples, and iconic suspension bridges."
  },
  {
    "id": "mussoorie",
    "name": "Mussoorie",
    "region": "Garhwal",
    "district": "Dehradun",
    "category": [
      "Hill Stations",
      "Family trip",
      "Heritage / Culture"
    ],
    "specialty": [
      "Colonial",
      "Views",
      "Waterfalls"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Mall Road",
      "Lal Tibba",
      "Kempty Falls",
      "Camel's Back Road",
      "Company Garden",
      "Gun Hill",
      "Landour",
      "Benog Wildlife Sanctuary"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Dhanaulti",
        "id": "dhanaulti"
      },
      {
        "name": "Kanatal",
        "id": "kanatal"
      },
      {
        "name": "Dehradun",
        "id": "dehradun"
      }
    ],
    "image": "/images/destinations/mussoorie_user.png",
    "description": "Classic hill station known for colonial charm, viewpoints, waterfalls, and nearby Landour."
  },
  {
    "id": "dehradun",
    "name": "Dehradun",
    "region": "Garhwal",
    "district": "Dehradun",
    "category": [
      "Heritage / Culture",
      "Offbeat / Village Tourism"
    ],
    "specialty": [
      "Gateway",
      "City",
      "Culture"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Robber's Cave",
      "Sahastradhara",
      "Forest Research Institute",
      "Tapkeshwar Temple",
      "Mindrolling Monastery",
      "Paltan Bazaar",
      "Tibetan Market"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Mussoorie",
        "id": "mussoorie"
      },
      {
        "name": "Rishikesh",
        "id": "rishikesh"
      },
      {
        "name": "Haridwar",
        "id": "haridwar"
      }
    ],
    "image": "/images/destinations/dehradun_fetched.jpg",
    "description": "Capital city and transport hub known for caves, monasteries, colonial institutions, and food."
  },
  {
    "id": "haridwar",
    "name": "Haridwar",
    "region": "Garhwal",
    "district": "Haridwar",
    "category": [
      "Spiritual / Pilgrimage",
      "Heritage / Culture"
    ],
    "specialty": [
      "Ganga Aarti",
      "Pilgrimage",
      "Temples"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Har Ki Pauri",
      "Mansa Devi Temple",
      "Chandi Devi Temple",
      "Maya Devi Temple",
      "Bharat Mata Mandir",
      "Shantikunj",
      "Patanjali Yogpeeth"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Rishikesh",
        "id": "rishikesh"
      },
      {
        "name": "Dehradun",
        "id": "dehradun"
      }
    ],
    "image": "/images/destinations/haridwar_user.png",
    "description": "Major Ganga pilgrimage city known for Har Ki Pauri, temple circuits, and Kumbh traditions."
  },
  {
    "id": "auli",
    "name": "Auli",
    "region": "Garhwal",
    "district": "Chamoli",
    "category": [
      "Adventure Destinations",
      "Hill Stations"
    ],
    "specialty": [
      "Skiing",
      "Snow",
      "Himalayan Views"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Auli Ropeway",
      "Ski Slopes",
      "Gorson Bugyal",
      "Auli Artificial Lake"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Joshimath",
        "id": "joshimath"
      },
      {
        "name": "Badrinath",
        "id": "badrinath"
      },
      {
        "name": "Valley of Flowers",
        "id": "valley-of-flowers"
      }
    ],
    "image": "/images/destinations/auli_user.png",
    "description": "Himalayan ski resort known for ropeway rides, winter sports, and bugyal landscapes."
  },
  {
    "id": "joshimath",
    "name": "Joshimath",
    "region": "Garhwal",
    "district": "Chamoli",
    "category": [
      "Offbeat / Village Tourism",
      "Spiritual / Pilgrimage"
    ],
    "specialty": [
      "Gateway",
      "Spiritual",
      "Base Camp"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Adi Shankaracharya Math",
      "Narsingh Temple",
      "Kalpavriksha",
      "Auli Ropeway Base"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Auli",
        "id": "auli"
      },
      {
        "name": "Badrinath",
        "id": "badrinath"
      },
      {
        "name": "Govindghat",
        "id": "govindghat"
      },
      {
        "name": "Hemkund Sahib",
        "id": "hemkund-sahib"
      }
    ],
    "image": "/images/destinations/joshimath_fetched.jpg",
    "description": "Important base town for Auli, Badrinath, Valley of Flowers, and Hemkund Sahib."
  },
  {
    "id": "badrinath",
    "name": "Badrinath",
    "region": "Garhwal",
    "district": "Chamoli",
    "category": [
      "Spiritual / Pilgrimage",
      "Trekking / High Altitude"
    ],
    "specialty": [
      "Char Dham",
      "Temple",
      "Pilgrimage"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Badrinath Temple",
      "Tapt Kund",
      "Mana Village",
      "Vasudhara Falls",
      "Charan Paduka"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Joshimath",
        "id": "joshimath"
      },
      {
        "name": "Mana",
        "id": "mana"
      },
      {
        "name": "Auli",
        "id": "auli"
      }
    ],
    "image": "/images/destinations/badrinath_user.png",
    "description": "Sacred Vishnu temple town and one of the Char Dham pilgrimage sites."
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers",
    "region": "Garhwal",
    "district": "Chamoli",
    "category": [
      "Trekking / High Altitude",
      "Wildlife / Nature",
      "Heritage / Culture"
    ],
    "specialty": [
      "Flowers",
      "Trek",
      "UNESCO"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Govindghat",
      "Pulna",
      "Ghangaria",
      "Valley Trail",
      "Viewpoints"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Hemkund Sahib",
        "id": "hemkund-sahib"
      },
      {
        "name": "Joshimath",
        "id": "joshimath"
      },
      {
        "name": "Auli",
        "id": "auli"
      }
    ],
    "image": "/images/destinations/valley-of-flowers_user.png",
    "description": "UNESCO alpine valley known for seasonal wildflower bloom and high-altitude trekking."
  },
  {
    "id": "hemkund-sahib",
    "name": "Hemkund Sahib",
    "region": "Garhwal",
    "district": "Chamoli",
    "category": [
      "Spiritual / Pilgrimage",
      "Trekking / High Altitude"
    ],
    "specialty": [
      "Sikh Pilgrimage",
      "Lake",
      "Trek"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Hemkund Sahib Gurudwara",
      "Hemkund Lake",
      "Ghangaria Base"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Valley of Flowers",
        "id": "valley-of-flowers"
      },
      {
        "name": "Joshimath",
        "id": "joshimath"
      },
      {
        "name": "Govindghat",
        "id": "govindghat"
      }
    ],
    "image": "/images/garhwal/chamoli/hemkund-sahib.jpg",
    "description": "High-altitude Sikh pilgrimage destination reached by trek from Ghangaria."
  },
  {
    "id": "kedarnath",
    "name": "Kedarnath",
    "region": "Garhwal",
    "district": "Rudraprayag",
    "category": [
      "Spiritual / Pilgrimage",
      "Trekking / High Altitude"
    ],
    "specialty": [
      "Jyotirlinga",
      "Char Dham Yatra",
      "Himalayan Trek"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Kedarnath Temple",
      "Bhairav Temple",
      "Gaurikund",
      "Vasuki Tal",
      "Gandhi Sarovar"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Guptkashi",
        "id": "guptkashi"
      },
      {
        "name": "Sonprayag",
        "id": "sonprayag"
      },
      {
        "name": "Chopta",
        "id": "chopta"
      },
      {
        "name": "Ukhimath",
        "id": "ukhimath"
      }
    ],
    "image": "/images/destinations/kedarnath_user.png",
    "description": "Sacred Himalayan temple town known for Kedarnath Temple and pilgrimage trek from Gaurikund."
  },
  {
    "id": "chopta",
    "name": "Chopta",
    "region": "Garhwal",
    "district": "Rudraprayag",
    "category": [
      "Trekking / High Altitude",
      "Offbeat / Village Tourism"
    ],
    "specialty": [
      "Mini Switzerland",
      "Tungnath Trek",
      "Meadows"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Chopta Meadows",
      "Tungnath Temple",
      "Chandrashila Summit",
      "Deoria Tal",
      "Sari Village",
      "Duggalbitta"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Ukhimath",
        "id": "ukhimath"
      },
      {
        "name": "Kedarnath",
        "id": "kedarnath"
      },
      {
        "name": "Guptkashi",
        "id": "guptkashi"
      }
    ],
    "image": "/images/destinations/chopta_user.png",
    "description": "High meadow region and trek base for Tungnath and Chandrashila."
  },
  {
    "id": "ukhimath",
    "name": "Ukhimath",
    "region": "Garhwal",
    "district": "Rudraprayag",
    "category": [
      "Spiritual / Pilgrimage",
      "Offbeat / Village Tourism",
      "Heritage / Culture"
    ],
    "specialty": [
      "Winter Seat",
      "Temple",
      "Gateway"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Omkareshwar Temple",
      "Town Center"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Chopta",
        "id": "chopta"
      },
      {
        "name": "Guptkashi",
        "id": "guptkashi"
      },
      {
        "name": "Deoria Tal",
        "id": "deoria-tal"
      }
    ],
    "image": "/images/best/ukhimath.jpg",
    "description": "Religious town and winter seat of Kedarnath deity, also a base for Chopta routes."
  },
  {
    "id": "gangotri",
    "name": "Gangotri",
    "region": "Garhwal",
    "district": "Uttarkashi",
    "category": [
      "Spiritual / Pilgrimage",
      "Trekking / High Altitude"
    ],
    "specialty": [
      "Ganga Source",
      "Temple",
      "Trek"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Gangotri Temple",
      "Gaumukh Trail",
      "Bhairon Ghati",
      "Pandava Gufa"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Harsil",
        "id": "harsil"
      },
      {
        "name": "Uttarkashi",
        "id": "uttarkashi"
      }
    ],
    "image": "/images/destinations/gangotri_user.png",
    "description": "Sacred Ganga source pilgrimage town and trek base for Gaumukh."
  },
  {
    "id": "yamunotri",
    "name": "Yamunotri",
    "region": "Garhwal",
    "district": "Uttarkashi",
    "category": [
      "Spiritual / Pilgrimage",
      "Trekking / High Altitude"
    ],
    "specialty": [
      "Yamuna Source",
      "Temple",
      "Pilgrimage"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Yamunotri Temple",
      "Janki Chatti",
      "Tapt Kund",
      "Surya Kund",
      "Divya Shila"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Barkot",
        "id": "barkot"
      },
      {
        "name": "Uttarkashi",
        "id": "uttarkashi"
      }
    ],
    "image": "/images/destinations/yamunotri_user.png",
    "description": "Source shrine of the Yamuna and an important Char Dham stop reached via trek from Janki Chatti."
  },
  {
    "id": "tehri-lake",
    "name": "Tehri Lake",
    "region": "Garhwal",
    "district": "Tehri Garhwal",
    "category": [
      "Adventure Destinations",
      "Lakes and Scenic Retreats"
    ],
    "specialty": [
      "Water Sports",
      "Lake",
      "Adventure"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Tehri Dam",
      "Water Sports Zone",
      "Kunjapuri Temple"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Rishikesh",
        "id": "rishikesh"
      },
      {
        "name": "Kanatal",
        "id": "kanatal"
      },
      {
        "name": "Dhanaulti",
        "id": "dhanaulti"
      }
    ],
    "image": "/images/destinations/tehri-lake_distinct_wiki.jpg",
    "description": "Reservoir destination known for water sports, dam views, and panoramic landscapes."
  },
  {
    "id": "kanatal",
    "name": "Kanatal",
    "region": "Garhwal",
    "district": "Tehri Garhwal",
    "category": [
      "Offbeat / Village Tourism",
      "Hill Stations",
      "Adventure Destinations"
    ],
    "specialty": [
      "Offbeat",
      "Camping",
      "Orchards"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Apple Orchards",
      "Kodai Jungle",
      "Adventure Camps"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Dhanaulti",
        "id": "dhanaulti"
      },
      {
        "name": "Mussoorie",
        "id": "mussoorie"
      },
      {
        "name": "Tehri Lake",
        "id": "tehri-lake"
      }
    ],
    "image": "/images/best/kanatal.jpg",
    "description": "Quiet high-altitude retreat known for apple orchards, camps, and forest walks."
  },
  {
    "id": "dhanaulti",
    "name": "Dhanaulti",
    "region": "Garhwal",
    "district": "Tehri Garhwal",
    "category": [
      "Hill Stations",
      "Family trip",
      "Offbeat / Village Tourism"
    ],
    "specialty": [
      "Eco Park",
      "Views",
      "Peaceful"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Dhanaulti Eco Park",
      "Surkanda Devi Temple"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Mussoorie",
        "id": "mussoorie"
      },
      {
        "name": "Kanatal",
        "id": "kanatal"
      }
    ],
    "image": "/images/destinations/dhanaulti_fetched.jpg",
    "description": "Cool hill retreat near Mussoorie known for eco parks and relaxed mountain views."
  },
  {
    "id": "khirsu",
    "name": "Khirsu",
    "region": "Garhwal",
    "district": "Pauri Garhwal",
    "category": [
      "Offbeat / Village Tourism",
      "Hill Stations"
    ],
    "specialty": [
      "Offbeat",
      "Village",
      "Views"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Khirsu Village",
      "Pauri Town",
      "Jwalpa Devi Temple",
      "Devalgarh",
      "Tara Kund",
      "Ulkha Giri"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Pauri",
        "id": "pauri"
      },
      {
        "name": "Srinagar Garhwal",
        "id": "srinagar-garhwal"
      }
    ],
    "image": "/images/garhwal/pauri-garhwal/khirsu.jpg",
    "description": "Quiet hill station with village walks, mountain views, and Garhwali cultural atmosphere."
  },
  {
    "id": "lansdowne",
    "name": "Lansdowne",
    "region": "Garhwal",
    "district": "Pauri Garhwal",
    "category": [
      "Heritage / Culture",
      "Hill Stations",
      "Offbeat / Village Tourism"
    ],
    "specialty": [
      "Cantonment",
      "Pines",
      "Weekend Trip"
    ],
    "altitude": "Varies",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport / Pantnagar Airport",
    "nearest_railway": "Kathgodam / Rishikesh / Dehradun",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Bhulla Tal",
      "Tip n Top",
      "St. Mary's Church"
    ],
    "activities": [
      "Sightseeing",
      "Photography",
      "Local Exploration"
    ],
    "cuisine": [
      "Local Uttarakhandi",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹8000+ per day",
    "permits_required": [],
    "travel_tips": [
      "Carry warm clothes",
      "Respect local culture"
    ],
    "packing_list": [
      "Comfortable shoes",
      "Warm layers",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Kotdwar",
        "id": "kotdwar"
      },
      {
        "name": "Khirsu",
        "id": "khirsu"
      }
    ],
    "image": "/images/garhwal/pauri-garhwal/lansdowne.jpg",
    "description": "Colonial cantonment hill station known for pine forests and relaxed short trips."
  },
  {
    "id": "bhowali",
    "name": "Bhowali",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Hill Stations"
    ],
    "specialty": [
      "Fruit Orchards",
      "Scenic"
    ],
    "altitude": "1,706 m",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Pantnagar Airport",
    "nearest_railway": "Kathgodam",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Golu Devta Temple",
      "Fruit Markets"
    ],
    "activities": [
      "Sightseeing",
      "Shopping"
    ],
    "cuisine": [
      "Kumaoni",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses"
    ],
    "budget_range": "₹1500 - ₹4000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Great place to buy local fruits and jams."
    ],
    "packing_list": [
      "Comfortable shoes",
      "Light jacket"
    ],
    "festivals": [
      "Local fairs"
    ],
    "nearby_places": [
      {
        "name": "Nainital",
        "id": "nainital"
      },
      {
        "name": "Bhimtal",
        "id": "bhimtal"
      }
    ],
    "image": "/images/destinations/bhowali_fetched.jpg",
    "description": "A major fruit market and a scenic junction town in the Kumaon hills."
  },
  {
    "id": "pangot",
    "name": "Pangot",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Wildlife / Nature",
      "Hill Stations"
    ],
    "specialty": [
      "Birdwatching",
      "Nature"
    ],
    "altitude": "1,980 m",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Pantnagar Airport",
    "nearest_railway": "Kathgodam",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Kilbury Bird Sanctuary",
      "Snow View Point"
    ],
    "activities": [
      "Birdwatching",
      "Nature Walks",
      "Photography"
    ],
    "cuisine": [
      "Kumaoni",
      "North Indian"
    ],
    "stay_types": [
      "Resorts",
      "Camps"
    ],
    "budget_range": "₹2000 - ₹5000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Carry binoculars for birdwatching."
    ],
    "packing_list": [
      "Binoculars",
      "Walking shoes",
      "Warm clothes"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Nainital",
        "id": "nainital"
      }
    ],
    "image": "/images/destinations/pangot_unsplash.jpg",
    "description": "A small and picturesque hamlet famous for its rich birdlife and dense forests."
  },
  {
    "id": "ramnagar",
    "name": "Ramnagar",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Wildlife / Nature"
    ],
    "specialty": [
      "Gateway to Corbett",
      "River Kosi"
    ],
    "altitude": "345 m",
    "best_time": [
      "Winter",
      "Spring"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Pantnagar Airport",
    "nearest_railway": "Ramnagar",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Garjiya Devi Temple",
      "Kosi River",
      "Corbett Falls"
    ],
    "activities": [
      "Safari Booking",
      "Temple Visit"
    ],
    "cuisine": [
      "North Indian",
      "Kumaoni"
    ],
    "stay_types": [
      "Hotels",
      "Resorts"
    ],
    "budget_range": "₹1500 - ₹5000 per day",
    "permits_required": [
      "Safari permits for Corbett"
    ],
    "travel_tips": [
      "Book safaris well in advance."
    ],
    "packing_list": [
      "Light clothes",
      "Sunscreen"
    ],
    "festivals": [
      "Karthik Purnima"
    ],
    "nearby_places": [
      {
        "name": "Jim Corbett",
        "id": "jim-corbett"
      },
      {
        "name": "Kaladhungi",
        "id": "kaladhungi"
      }
    ],
    "image": "/images/destinations/ramnagar_unsplash.jpg",
    "description": "The gateway to Jim Corbett National Park, situated on the banks of the Kosi River."
  },
  {
    "id": "kaladhungi",
    "name": "Kaladhungi",
    "region": "Kumaon",
    "district": "Nainital",
    "category": [
      "Heritage / Culture"
    ],
    "specialty": [
      "Jim Corbett Museum",
      "Nature"
    ],
    "altitude": "396 m",
    "best_time": [
      "Winter",
      "Spring"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Pantnagar Airport",
    "nearest_railway": "Haldwani / Ramnagar",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Jim Corbett Museum",
      "Khurpatal"
    ],
    "activities": [
      "Museum Visit",
      "Nature Walks"
    ],
    "cuisine": [
      "North Indian"
    ],
    "stay_types": [
      "Guesthouses",
      "Hotels"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Visit the museum to learn about Jim Corbett's life."
    ],
    "packing_list": [
      "Comfortable clothes"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Nainital",
        "id": "nainital"
      },
      {
        "name": "Ramnagar",
        "id": "ramnagar"
      }
    ],
    "image": "/images/destinations/kaladhungi_fetched.jpg",
    "description": "A quaint town known for the Jim Corbett Museum, located in his former winter home."
  },
  {
    "id": "ranikhet",
    "name": "Ranikhet",
    "region": "Kumaon",
    "district": "Almora",
    "category": [
      "Hill Stations",
      "Heritage / Culture"
    ],
    "specialty": [
      "Cantonment Town",
      "Himalayan Views",
      "Golf Course"
    ],
    "altitude": "1,869 m",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Pantnagar Airport",
    "nearest_railway": "Kathgodam",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Chaubatia Gardens",
      "Jhula Devi Temple",
      "Upat Golf Course"
    ],
    "activities": [
      "Sightseeing",
      "Golfing",
      "Nature Walks"
    ],
    "cuisine": [
      "Kumaoni",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Resorts",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹6000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Enjoy the peaceful walks in the cantonment area."
    ],
    "packing_list": [
      "Warm clothes",
      "Walking shoes"
    ],
    "festivals": [
      "Nanda Devi Mela"
    ],
    "nearby_places": [
      {
        "name": "Almora",
        "id": "almora"
      },
      {
        "name": "Kausani",
        "id": "kausani"
      }
    ],
    "image": "/images/destinations/ranikhet_fetched.jpg",
    "description": "A serene cantonment town offering panoramic views of the Himalayas and lush green forests."
  },
  {
    "id": "bageshwar",
    "name": "Bageshwar",
    "region": "Kumaon",
    "district": "Bageshwar",
    "category": [
      "Pilgrimage",
      "Heritage / Culture"
    ],
    "specialty": [
      "Bagnath Temple",
      "Confluence of Rivers"
    ],
    "altitude": "975 m",
    "best_time": [
      "Spring",
      "Autumn",
      "Winter"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Pantnagar Airport",
    "nearest_railway": "Kathgodam",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Bagnath Temple",
      "Chandika Temple",
      "Baijnath Temple"
    ],
    "activities": [
      "Temple Visit",
      "Trekking Base"
    ],
    "cuisine": [
      "Kumaoni"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Base for treks like Pindari and Sunderdhunga glaciers."
    ],
    "packing_list": [
      "Modest clothing for temples",
      "Trekking gear if proceeding further"
    ],
    "festivals": [
      "Uttarayan Mela"
    ],
    "nearby_places": [
      {
        "name": "Kausani",
        "id": "kausani"
      },
      {
        "name": "Almora",
        "id": "almora"
      }
    ],
    "image": "/images/destinations/bageshwar_unsplash.jpg",
    "description": "A holy city situated at the confluence of Saryu and Gomti rivers, famous for the Bagnath Temple."
  },
  {
    "id": "tanakpur",
    "name": "Tanakpur",
    "region": "Kumaon",
    "district": "Champawat",
    "category": [
      "Pilgrimage",
      "Gateway"
    ],
    "specialty": [
      "Purnagiri Temple",
      "Sharda River"
    ],
    "altitude": "255 m",
    "best_time": [
      "Winter",
      "Spring"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Pantnagar Airport",
    "nearest_railway": "Tanakpur",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Purnagiri Temple",
      "Sharda Ghat",
      "Banasur Ka Kila"
    ],
    "activities": [
      "Temple Visit",
      "River Rafting"
    ],
    "cuisine": [
      "North Indian",
      "Kumaoni"
    ],
    "stay_types": [
      "Hotels",
      "Dharamshalas"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Expect crowds during the Purnagiri Mela."
    ],
    "packing_list": [
      "Light clothes",
      "Modest clothing for temples"
    ],
    "festivals": [
      "Purnagiri Mela"
    ],
    "nearby_places": [
      {
        "name": "Champawat",
        "id": "champawat"
      },
      {
        "name": "Lohaghat",
        "id": "lohaghat"
      }
    ],
    "image": "/images/destinations/tanakpur_unsplash.jpg",
    "description": "A town on the banks of the Sharda River, known as the gateway to the Purnagiri Temple."
  },
  {
    "id": "tehri",
    "name": "New Tehri",
    "region": "Garhwal",
    "district": "Tehri Garhwal",
    "category": [
      "Hill Stations",
      "Lakes and Scenic Retreats"
    ],
    "specialty": [
      "Tehri Dam",
      "Water Sports"
    ],
    "altitude": "1,550 m",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Tehri Dam",
      "Tehri Lake",
      "Chandrabadni Temple"
    ],
    "activities": [
      "Boating",
      "Jet Skiing",
      "Sightseeing"
    ],
    "cuisine": [
      "Garhwali",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Resorts"
    ],
    "budget_range": "₹2000 - ₹6000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Try the water sports at Tehri Lake."
    ],
    "packing_list": [
      "Comfortable clothes",
      "Sunscreen"
    ],
    "festivals": [
      "Tehri Lake Festival"
    ],
    "nearby_places": [
      {
        "name": "Tehri Lake",
        "id": "tehri-lake"
      },
      {
        "name": "Kanatal",
        "id": "kanatal"
      }
    ],
    "image": "/images/destinations/tehri_unsplash.jpg",
    "description": "A modern town built to relocate the residents of Old Tehri, overlooking the massive Tehri Dam."
  },
  {
    "id": "govindghat",
    "name": "Govindghat",
    "region": "Garhwal",
    "district": "Chamoli",
    "category": [
      "Pilgrimage",
      "Trekking"
    ],
    "specialty": [
      "Base Camp",
      "Confluence"
    ],
    "altitude": "1,828 m",
    "best_time": [
      "Summer",
      "Early Autumn"
    ],
    "avoid_time": [
      "Monsoon",
      "Winter"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Confluence of Alaknanda and Lakshman Ganga"
    ],
    "activities": [
      "Trekking Base",
      "Pilgrimage"
    ],
    "cuisine": [
      "North Indian",
      "Punjabi"
    ],
    "stay_types": [
      "Hotels",
      "Gurudwara"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Starting point for treks to Hemkund Sahib and Valley of Flowers."
    ],
    "packing_list": [
      "Trekking gear",
      "Warm clothes",
      "Raincoat"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Hemkund Sahib",
        "id": "hemkund-sahib"
      },
      {
        "name": "Valley of Flowers",
        "id": "valley-of-flowers"
      },
      {
        "name": "Joshimath",
        "id": "joshimath"
      }
    ],
    "image": "/images/destinations/govindghat_fetched.jpg",
    "description": "A vital transit hub and base camp for pilgrims and trekkers heading to Hemkund Sahib and the Valley of Flowers."
  },
  {
    "id": "mana",
    "name": "Mana Village",
    "region": "Garhwal",
    "district": "Chamoli",
    "category": [
      "Heritage / Culture",
      "Pilgrimage"
    ],
    "specialty": [
      "Last Indian Village",
      "Mythology"
    ],
    "altitude": "3,200 m",
    "best_time": [
      "Summer",
      "Early Autumn"
    ],
    "avoid_time": [
      "Winter",
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Vyas Gufa",
      "Ganesh Gufa",
      "Saraswati River",
      "Bheem Pul"
    ],
    "activities": [
      "Sightseeing",
      "Photography"
    ],
    "cuisine": [
      "Local Garhwali",
      "Maggi/Tea"
    ],
    "stay_types": [
      "Homestays (limited)",
      "Stay in Badrinath"
    ],
    "budget_range": "₹500 - ₹1500 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Visit the 'Last Tea Shop of India'."
    ],
    "packing_list": [
      "Warm clothes",
      "Comfortable shoes"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Badrinath",
        "id": "badrinath"
      }
    ],
    "image": "/images/destinations/mana_unsplash.jpg",
    "description": "Known as the last Indian village before the Tibet border, steeped in Mahabharata mythology."
  },
  {
    "id": "guptkashi",
    "name": "Guptkashi",
    "region": "Garhwal",
    "district": "Rudraprayag",
    "category": [
      "Pilgrimage"
    ],
    "specialty": [
      "Vishwanath Temple",
      "Base for Kedarnath"
    ],
    "altitude": "1,319 m",
    "best_time": [
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon",
      "Winter"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Vishwanath Temple",
      "Manikarnik Kund",
      "Ardhanarishwar Temple"
    ],
    "activities": [
      "Temple Visit",
      "Helicopter Booking"
    ],
    "cuisine": [
      "North Indian",
      "Garhwali"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses"
    ],
    "budget_range": "₹1500 - ₹4000 per day",
    "permits_required": [
      "Kedarnath Registration"
    ],
    "travel_tips": [
      "Major hub for booking helicopter rides to Kedarnath."
    ],
    "packing_list": [
      "Modest clothing",
      "Warm layers"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Kedarnath",
        "id": "kedarnath"
      },
      {
        "name": "Sonprayag",
        "id": "sonprayag"
      },
      {
        "name": "Ukhimath",
        "id": "ukhimath"
      }
    ],
    "image": "/images/destinations/guptkashi_unsplash.jpg",
    "description": "A significant religious town housing the ancient Vishwanath Temple, serving as a major stopover for Kedarnath pilgrims."
  },
  {
    "id": "sonprayag",
    "name": "Sonprayag",
    "region": "Garhwal",
    "district": "Rudraprayag",
    "category": [
      "Pilgrimage"
    ],
    "specialty": [
      "Confluence",
      "Transit Hub"
    ],
    "altitude": "1,829 m",
    "best_time": [
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon",
      "Winter"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Confluence of Basuki and Mandakini rivers"
    ],
    "activities": [
      "Pilgrimage Transit"
    ],
    "cuisine": [
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Dharamshalas"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "Kedarnath Registration"
    ],
    "travel_tips": [
      "Private vehicles are usually stopped here; pilgrims take shared taxis to Gaurikund."
    ],
    "packing_list": [
      "Warm clothes",
      "Rain gear"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Kedarnath",
        "id": "kedarnath"
      },
      {
        "name": "Guptkashi",
        "id": "guptkashi"
      }
    ],
    "image": "/images/destinations/sonprayag_unsplash.jpg",
    "description": "A holy confluence and the main transit point where pilgrims switch to local transport for Gaurikund."
  },
  {
    "id": "deoria-tal",
    "name": "Deoria Tal",
    "region": "Garhwal",
    "district": "Rudraprayag",
    "category": [
      "Trekking",
      "Lakes and Scenic Retreats"
    ],
    "specialty": [
      "Alpine Lake",
      "Chaukhamba View"
    ],
    "altitude": "2,438 m",
    "best_time": [
      "Spring",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Trek from Sari Village",
    "top_attractions": [
      "Deoria Tal Lake",
      "Chaukhamba Peak Views"
    ],
    "activities": [
      "Trekking",
      "Camping",
      "Photography"
    ],
    "cuisine": [
      "Local food at Sari village"
    ],
    "stay_types": [
      "Camping",
      "Homestays in Sari"
    ],
    "budget_range": "₹1500 - ₹3000 per day",
    "permits_required": [
      "Forest entry fee"
    ],
    "travel_tips": [
      "An easy 2.5 km trek from Sari village."
    ],
    "packing_list": [
      "Trekking shoes",
      "Warm clothes",
      "Camera"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Chopta",
        "id": "chopta"
      },
      {
        "name": "Ukhimath",
        "id": "ukhimath"
      }
    ],
    "image": "/images/destinations/deoria-tal_fetched.jpg",
    "description": "A pristine emerald lake offering mesmerizing reflections of the Chaukhamba peaks."
  },
  {
    "id": "harsil",
    "name": "Harsil",
    "region": "Garhwal",
    "district": "Uttarkashi",
    "category": [
      "Hill Stations",
      "Nature"
    ],
    "specialty": [
      "Apple Orchards",
      "Bhagirathi River",
      "Scenic"
    ],
    "altitude": "2,620 m",
    "best_time": [
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon",
      "Winter"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Bhagirathi River",
      "Dharali",
      "Mukhba Village"
    ],
    "activities": [
      "Nature Walks",
      "Sightseeing",
      "Trekking"
    ],
    "cuisine": [
      "Garhwali",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Homestays"
    ],
    "budget_range": "₹2000 - ₹5000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "A perfect, quiet stopover on the way to Gangotri."
    ],
    "packing_list": [
      "Warm clothes",
      "Walking shoes"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Gangotri",
        "id": "gangotri"
      },
      {
        "name": "Uttarkashi",
        "id": "uttarkashi"
      }
    ],
    "image": "/images/destinations/harsil_unsplash.jpg",
    "description": "An unspoiled and hidden jewel of Uttarakhand, famous for its apple orchards and the Bhagirathi river."
  },
  {
    "id": "uttarkashi",
    "name": "Uttarkashi",
    "region": "Garhwal",
    "district": "Uttarkashi",
    "category": [
      "Pilgrimage",
      "Adventure"
    ],
    "specialty": [
      "Vishwanath Temple",
      "Mountaineering"
    ],
    "altitude": "1,158 m",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon",
      "Winter"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Kashi Vishwanath Temple",
      "Nehru Institute of Mountaineering",
      "Maneri Dam"
    ],
    "activities": [
      "Temple Visit",
      "Mountaineering Courses"
    ],
    "cuisine": [
      "Garhwali",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Ashrams"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Known as the 'Kashi of the North'."
    ],
    "packing_list": [
      "Modest clothing",
      "Comfortable shoes"
    ],
    "festivals": [
      "Magh Mela"
    ],
    "nearby_places": [
      {
        "name": "Gangotri",
        "id": "gangotri"
      },
      {
        "name": "Harsil",
        "id": "harsil"
      }
    ],
    "image": "/images/destinations/uttarkashi_unsplash.jpg",
    "description": "A holy town on the banks of the Bhagirathi river, home to the famous Vishwanath Temple and NIM."
  },
  {
    "id": "barkot",
    "name": "Barkot",
    "region": "Garhwal",
    "district": "Uttarkashi",
    "category": [
      "Pilgrimage",
      "Hill Stations"
    ],
    "specialty": [
      "Apple Orchards",
      "Yamunotri Base"
    ],
    "altitude": "1,220 m",
    "best_time": [
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon",
      "Winter"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Dehradun / Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Yamuna River",
      "Apple Orchards"
    ],
    "activities": [
      "Sightseeing",
      "Transit"
    ],
    "cuisine": [
      "North Indian",
      "Garhwali"
    ],
    "stay_types": [
      "Hotels",
      "Camps"
    ],
    "budget_range": "₹1500 - ₹4000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "A major stopover for pilgrims heading to Yamunotri."
    ],
    "packing_list": [
      "Warm clothes",
      "Comfortable shoes"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Yamunotri",
        "id": "yamunotri"
      }
    ],
    "image": "/images/destinations/barkot_unsplash.jpg",
    "description": "A scenic town offering magnificent views of the Bandarpoonch peak, serving as a base for Yamunotri."
  },
  {
    "id": "pauri",
    "name": "Pauri",
    "region": "Garhwal",
    "district": "Pauri Garhwal",
    "category": [
      "Hill Stations",
      "Heritage / Culture"
    ],
    "specialty": [
      "Himalayan Views",
      "Temples"
    ],
    "altitude": "1,814 m",
    "best_time": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Kotdwar",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Kandoliya Temple",
      "Chaukhamba Viewpoint",
      "Kyunkaleshwar Temple"
    ],
    "activities": [
      "Sightseeing",
      "Nature Walks",
      "Photography"
    ],
    "cuisine": [
      "Garhwali",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses"
    ],
    "budget_range": "₹1500 - ₹3500 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "Offers some of the widest panoramic views of the Garhwal Himalayas."
    ],
    "packing_list": [
      "Warm clothes",
      "Camera"
    ],
    "festivals": [
      "Sharad Utsav"
    ],
    "nearby_places": [
      {
        "name": "Khirsu",
        "id": "khirsu"
      },
      {
        "name": "Srinagar Garhwal",
        "id": "srinagar-garhwal"
      }
    ],
    "image": "/images/destinations/pauri_fetched.jpg",
    "description": "The district headquarters offering breathtaking, wide-angle views of the snow-capped Himalayan peaks."
  },
  {
    "id": "srinagar-garhwal",
    "name": "Srinagar Garhwal",
    "region": "Garhwal",
    "district": "Pauri Garhwal",
    "category": [
      "Heritage / Culture",
      "Pilgrimage"
    ],
    "specialty": [
      "Education Hub",
      "Temples",
      "Alaknanda River"
    ],
    "altitude": "560 m",
    "best_time": [
      "Winter",
      "Spring",
      "Autumn"
    ],
    "avoid_time": [
      "Monsoon",
      "Peak Summer"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Rishikesh",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Kamleshwar Mahadev Temple",
      "Dhari Devi Temple (nearby)",
      "Alaknanda River"
    ],
    "activities": [
      "Temple Visit",
      "Sightseeing"
    ],
    "cuisine": [
      "Garhwali",
      "North Indian"
    ],
    "stay_types": [
      "Hotels",
      "Guesthouses"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "A major educational and cultural center in Garhwal."
    ],
    "packing_list": [
      "Light clothes",
      "Modest clothing"
    ],
    "festivals": [
      "Baikunth Chaturdashi Mela"
    ],
    "nearby_places": [
      {
        "name": "Pauri",
        "id": "pauri"
      },
      {
        "name": "Rishikesh",
        "id": "rishikesh"
      }
    ],
    "image": "/images/destinations/srinagar-garhwal_unsplash.jpg",
    "description": "The largest town in the Garhwal Hills, situated on the banks of the Alaknanda River."
  },
  {
    "id": "kotdwar",
    "name": "Kotdwar",
    "region": "Garhwal",
    "district": "Pauri Garhwal",
    "category": [
      "Gateway",
      "Pilgrimage"
    ],
    "specialty": [
      "Gateway to Garhwal",
      "Sidhbali Temple"
    ],
    "altitude": "395 m",
    "best_time": [
      "Winter",
      "Spring"
    ],
    "avoid_time": [
      "Monsoon"
    ],
    "nearest_airport": "Jolly Grant Airport",
    "nearest_railway": "Kotdwar",
    "road_access": "Well connected by road",
    "top_attractions": [
      "Sidhbali Temple",
      "Kanvashram",
      "St. Joseph's Church"
    ],
    "activities": [
      "Temple Visit",
      "Transit"
    ],
    "cuisine": [
      "North Indian",
      "Garhwali"
    ],
    "stay_types": [
      "Hotels",
      "Dharamshalas"
    ],
    "budget_range": "₹1000 - ₹3000 per day",
    "permits_required": [
      "None"
    ],
    "travel_tips": [
      "The main entry point for Lansdowne and Pauri."
    ],
    "packing_list": [
      "Light clothes"
    ],
    "festivals": [],
    "nearby_places": [
      {
        "name": "Lansdowne",
        "id": "lansdowne"
      }
    ],
    "image": "/images/destinations/kotdwar_unsplash.jpg",
    "description": "Known as the Gateway to Garhwal, famous for the Sidhbali Hanuman Temple."
  }
];

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
