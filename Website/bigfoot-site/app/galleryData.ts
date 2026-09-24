// To add photos: run them through scripts/convert-gallery.js (creates
// <id>-sm.webp and <id>-lg.webp in public/images/gallery/), then add a row here.
// Filter chips on the gallery appear automatically once there is more than one category.
export type GalleryPhoto = { id: string; alt: string; category: "Safari" | "Fleet" | "Team" };

export const GALLERY: GalleryPhoto[] = [
  { id: "elephant-amboseli", category: "Safari", alt: "A Bigfoot safari Land Cruiser stopped beside an elephant on the Amboseli plains" },
  { id: "landcruiser-street", category: "Fleet", alt: "Bigfoot Adventures safari Land Cruiser parked on a Nairobi street" },
  { id: "guide-binoculars", category: "Safari", alt: "A Bigfoot guide scanning the horizon with binoculars from an open-sided safari vehicle" },
  { id: "open-viewer-side", category: "Safari", alt: "Open-sided Bigfoot game-viewing vehicle, side view" },
  { id: "fleet-lineup", category: "Team", alt: "Bigfoot's vehicles lined up on a Nairobi street with the driver-guides beside them" },
  { id: "alphard-front", category: "Fleet", alt: "Toyota Alphard, front three-quarter view" },
  { id: "nairobi-np-gate", category: "Safari", alt: "A Bigfoot game-viewer at the Nairobi National Park main gate" },
  { id: "interior-seats", category: "Fleet", alt: "Tan leather seating inside a Bigfoot open-sided safari vehicle" },
  { id: "prado-front", category: "Fleet", alt: "Toyota Land Cruiser Prado, front three-quarter view" },
  { id: "guide-landcruiser-door", category: "Team", alt: "A Bigfoot driver-guide with binoculars leaning on a Land Cruiser door" },
  { id: "hiace-front", category: "Fleet", alt: "Toyota Hiace van, front three-quarter view" },
  { id: "coaster-rear", category: "Fleet", alt: "Bigfoot's Toyota Coaster bus, rear three-quarter view" },
  { id: "guide-open-vehicle", category: "Team", alt: "A Bigfoot guide leaning on the side of an open-sided safari vehicle" },
  { id: "landcruiser-front", category: "Fleet", alt: "Bigfoot safari Land Cruiser, front three-quarter view, on a Nairobi street" },
  { id: "open-viewer-rear", category: "Safari", alt: "Rear view of an open-sided Bigfoot game-viewing vehicle" },
  { id: "guide-beside-landcruiser", category: "Team", alt: "A Bigfoot driver-guide standing beside a Land Cruiser" },
];
