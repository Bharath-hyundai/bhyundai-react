/* ───────── VENUE N LINE VARIANTS (June 2025 ex‑showroom ₹) ───────── */
export const VenueNLineVariants = [
  {
    id: "venue-nline-n6-mt",
    name: "N6 1.0 Turbo Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 12.15 Lakh" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "998 cc Turbo GDi" },
      { label: "Power", value: "118 bhp @ 6 000 rpm" },
      { label: "Torque", value: "172 Nm" },
      { label: "Transmission", value: "6‑Speed MT" },
    ],
  },
  {
    id: "venue-nline-n6-dct",
    name: "N6 1.0 Turbo Petrol DCT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 12.94 Lakh" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "998 cc Turbo GDi" },
      { label: "Power", value: "118 bhp" },
      { label: "Torque", value: "172 Nm" },
      { label: "Transmission", value: "7‑Speed DCT" },
      { label: "Mileage (ARAI)", value: "18 kmpl" },
    ],
  },
  {
    id: "venue-nline-n8-mt",
    name: "N8 1.0 Turbo Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 13.03 Lakh" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "998 cc Turbo GDi" },
      { label: "Power", value: "118 bhp" },
      { label: "Torque", value: "172 Nm" },
      { label: "Transmission", value: "6‑Speed MT" },
    ],
  },
  {
    id: "venue-nline-n8-dct",
    name: "N8 1.0 Turbo Petrol DCT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 13.82 Lakh" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "998 cc Turbo GDi" },
      { label: "Power", value: "118 bhp" },
      { label: "Torque", value: "172 Nm" },
      { label: "Transmission", value: "7‑Speed DCT" },
      { label: "Mileage (ARAI)", value: "18 kmpl" },
    ],
  },
];

/* ───────── VENUE N LINE HERO CARD ───────── */
export const VenueNLineHero = {
  img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/front-left-side.jpg",
  tags: [
    { title: "Sporty Red Accents", text: "N‑Line grille, skid plates & brake calipers" },
    { title: "Dual‑Tip Exhausts", text: "Aggressive visual & sound upgrade" },
    { title: "Rear Disc Brakes", text: "4‑corner discs for better stopping power" },
  ],
};
/* ───────── VENUE N LINE BASIC INFO ───────── */
export const VenueNLineInfo = {
  breadcrumbs: ["Home", "SUVs", "Venue N Line"],
  name: "Hyundai Venue N Line",
  price: "₹ 12.15 Lakh*",
  showroom: "₹ 12.15 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Engine", value: "1.0 L Turbo GDi Petrol" },
    { label: "Seating", value: "5‑seater" },
    { label: "Mileage (ARAI)", value: "18 kmpl" },
  ],
};
/* ───────── COLOR PALETTE ───────── */
export const venueNLineColors = [
  { name: "Atlas White", hex1: "#ffffff", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Venue-N-Line/atlas-white.jpg" },
  { name: "Polaris Silver", hex1: "#c0c0c0", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Venue-N-Line/polaris-silver.jpg" },
  { name: "Abyss Black", hex1: "#000000", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Venue-N-Line/abyss-black.jpg" },
  { name: "Thunder Blue", hex1: "#003f87", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Venue-N-Line/thunder-blue.jpg" },
  { name: "Dual‑tone White/Black Roof", hex1: "#ffffff", hex2: "#000000", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Venue-N-Line/dual-tone.jpg" },
];
/* ───────── TECH‑SPEC TABLES ───────── */
export const engineRows = {
  MT: [
    { label: "Engine", value: "1.0 L Turbo GDi" },
    { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Power", value: "118 bhp / 172 Nm" },
    { label: "Mileage (ARAI)", value: "18 kmpl" },
  ],
  DCT: [
    { label: "Engine", value: "1.0 L Turbo GDi" },
    { label: "Transmission", value: "7‑Speed DCT" },
    { label: "Power", value: "118 bhp / 172 Nm" },
    { label: "Mileage (ARAI)", value: "18 kmpl" },
  ],
};

export const dimensionsRows = {
  ALL: [
    { label: "Length", value: "3,995 mm" },
    { label: "Width", value: "1,770 mm" },
    { label: "Height", value: "1,617 mm" },
    { label: "Wheelbase", value: "2,500 mm" },
    { label: "Boot Space", value: "350 L (est.)" },
    { label: "Fuel Tank", value: "45 L" },
  ],
};
/* ───────── VENUE N LINE CTAs ───────── */
export const venueNLineCTAs = {
  primary: { label: "Book Test Drive", onClick: () => alert("Test-drive booking – Venue N Line") },
  secondary: [
    { label: "Download Brochure", color: "bg-gray-700 hover:bg-gray-600" },
    { label: "Find a Dealer", color: "bg-blue-700 hover:bg-blue-600" },
  ],
};
