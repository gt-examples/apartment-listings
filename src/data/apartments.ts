export interface Apartment {
  id: number;
  slug: string;
  name: string;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  rent: number;
  availableFrom: string;
  features: string[];
  status: "available" | "pending" | "leased";
  description: string;
  amenities: string[];
  neighborhoodInfo: string;
  yearBuilt: number;
  floor: number;
  deposit: number;
  petPolicy: string;
  leaseTerms: string;
}

export const apartments: Apartment[] = [
  {
    id: 1,
    slug: "sunset-terrace",
    name: "Sunset Terrace",
    neighborhood: "Downtown",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 850,
    rent: 2400,
    availableFrom: "2026-03-01",
    features: ["In-unit laundry", "Balcony", "Parking"],
    status: "available",
    description:
      "A bright corner unit with floor-to-ceiling windows offering panoramic views of the downtown skyline. The open-plan living area flows into a modern kitchen with quartz countertops and stainless steel appliances. The private balcony is perfect for morning coffee or evening relaxation.",
    amenities: [
      "Central heating and cooling",
      "Hardwood floors",
      "Stainless steel appliances",
      "Quartz countertops",
      "Walk-in closet",
      "In-unit washer and dryer",
      "Private balcony",
      "Dedicated parking spot",
    ],
    neighborhoodInfo:
      "Downtown is the cultural heart of the city, with restaurants, galleries, and theaters within walking distance. Public transit is steps away, and the waterfront park is a ten-minute stroll.",
    yearBuilt: 2019,
    floor: 8,
    deposit: 2400,
    petPolicy: "Cats allowed, no dogs",
    leaseTerms: "12-month minimum lease",
  },
  {
    id: 2,
    slug: "harbor-view-loft",
    name: "Harbor View Loft",
    neighborhood: "Waterfront",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 620,
    rent: 1850,
    availableFrom: "2026-03-15",
    features: ["Gym access", "Rooftop deck"],
    status: "available",
    description:
      "An industrial-chic loft with exposed brick walls, polished concrete floors, and soaring ceilings. The oversized windows frame views of the harbor and marina. The building includes a state-of-the-art fitness center and a shared rooftop deck with grilling stations.",
    amenities: [
      "Exposed brick walls",
      "Polished concrete floors",
      "High ceilings",
      "Building gym",
      "Rooftop deck with grill",
      "Bike storage",
      "Package locker system",
      "Controlled building access",
    ],
    neighborhoodInfo:
      "The Waterfront district is a vibrant area with seafood restaurants, weekend farmers markets, and scenic walking trails along the harbor. The ferry terminal connects to nearby islands.",
    yearBuilt: 2021,
    floor: 4,
    deposit: 1850,
    petPolicy: "No pets",
    leaseTerms: "12-month minimum lease",
  },
  {
    id: 3,
    slug: "elm-street-studio",
    name: "Elm Street Studio",
    neighborhood: "Midtown",
    bedrooms: 0,
    bathrooms: 1,
    sqft: 420,
    rent: 1200,
    availableFrom: "2026-02-20",
    features: ["Utilities included", "Pet friendly"],
    status: "pending",
    description:
      "A cozy and efficient studio apartment ideal for students or young professionals. The cleverly designed layout maximizes every square foot, with a murphy bed, built-in shelving, and a compact but fully equipped kitchenette. All utilities are included in the rent.",
    amenities: [
      "Murphy bed",
      "Built-in shelving",
      "Full kitchenette",
      "All utilities included",
      "Shared laundry room",
      "Bicycle parking",
      "On-site maintenance",
      "High-speed internet ready",
    ],
    neighborhoodInfo:
      "Midtown is a bustling neighborhood popular with students and creatives. Independent bookshops, coffee houses, and coworking spaces line the tree-shaded streets. The university campus is a short bus ride away.",
    yearBuilt: 1985,
    floor: 2,
    deposit: 1200,
    petPolicy: "Pets welcome with deposit",
    leaseTerms: "6-month minimum lease",
  },
  {
    id: 4,
    slug: "maple-court",
    name: "Maple Court",
    neighborhood: "Suburbs",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1200,
    rent: 3100,
    availableFrom: "2026-04-01",
    features: ["Garage", "Backyard", "Fireplace", "In-unit laundry"],
    status: "available",
    description:
      "A spacious family-friendly apartment in a quiet residential complex. The open living room features a wood-burning fireplace and flows into a bright dining area. The private backyard is fully fenced, and the attached two-car garage offers secure parking and extra storage.",
    amenities: [
      "Wood-burning fireplace",
      "Private fenced backyard",
      "Two-car garage",
      "In-unit washer and dryer",
      "Central air conditioning",
      "Walk-in closets",
      "Dishwasher",
      "Playground on premises",
    ],
    neighborhoodInfo:
      "The Suburbs offer a peaceful atmosphere with tree-lined streets, top-rated schools, and family parks. A community shopping center with grocery stores and dining is a five-minute drive away.",
    yearBuilt: 2010,
    floor: 1,
    deposit: 3100,
    petPolicy: "Pets welcome, breed restrictions apply",
    leaseTerms: "12-month minimum lease",
  },
  {
    id: 5,
    slug: "pine-ridge-flat",
    name: "Pine Ridge Flat",
    neighborhood: "Eastside",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 950,
    rent: 2750,
    availableFrom: "2026-03-10",
    features: ["Gym access", "Pool", "Concierge"],
    status: "leased",
    description:
      "A luxury flat in a full-service building with resort-style amenities. The unit features an open kitchen with a breakfast bar, a spacious living area, and two ensuite bedrooms. Residents enjoy a heated pool, fitness center, and 24-hour concierge service.",
    amenities: [
      "Heated swimming pool",
      "Fitness center",
      "24-hour concierge",
      "Breakfast bar",
      "Ensuite bathrooms",
      "Walk-in closets",
      "Central heating and cooling",
      "Visitor parking",
    ],
    neighborhoodInfo:
      "The Eastside is an upscale neighborhood known for its boutique shopping, fine dining, and weekend art walks. Several parks and nature trails are nearby, and the expressway provides quick access to the city center.",
    yearBuilt: 2023,
    floor: 12,
    deposit: 5500,
    petPolicy: "Small pets allowed with approval",
    leaseTerms: "12-month minimum lease",
  },
  {
    id: 6,
    slug: "birch-lane-apartment",
    name: "Birch Lane Apartment",
    neighborhood: "Northgate",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 550,
    rent: 1450,
    availableFrom: "2026-05-01",
    features: ["Pet friendly", "Storage unit"],
    status: "available",
    description:
      "A charming one-bedroom apartment in a well-maintained brick building. The unit features original hardwood floors, updated fixtures, and a sunny eat-in kitchen. A private storage unit in the basement is included with the lease.",
    amenities: [
      "Hardwood floors",
      "Updated kitchen fixtures",
      "Eat-in kitchen",
      "Private basement storage",
      "Shared courtyard",
      "On-site laundry",
      "Street parking",
      "Smoke-free building",
    ],
    neighborhoodInfo:
      "Northgate is a quiet, established neighborhood with a strong community feel. Local bakeries, a weekly farmers market, and a large public library make it a comfortable place to call home. The light rail station is two blocks away.",
    yearBuilt: 1998,
    floor: 3,
    deposit: 1450,
    petPolicy: "Pets welcome, no weight limit",
    leaseTerms: "12-month minimum lease",
  },
];

export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find((a) => a.slug === slug);
}

export const allNeighborhoods = [
  "Downtown",
  "Waterfront",
  "Midtown",
  "Suburbs",
  "Eastside",
  "Northgate",
];

export const allFeatures = [
  "In-unit laundry",
  "Balcony",
  "Parking",
  "Gym access",
  "Rooftop deck",
  "Utilities included",
  "Pet friendly",
  "Garage",
  "Backyard",
  "Fireplace",
  "Pool",
  "Concierge",
  "Storage unit",
];
