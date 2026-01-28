/* ───────── AURA VARIANTS (June 2025) ───────── */
export const AuraVariants = [
  {
    id: "aura-e",
    name: "AURA 1.2 MT E",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 6.54 Lakh" },   // :contentReference[oaicite:0]{index=0}
      { label: "On‑Road Price",     value: "₹ 7.45 Lakh (Delhi)" }, // :contentReference[oaicite:1]{index=1}
      { label: "Fuel Type",         value: "Petrol" },
      { label: "Engine",            value: "1197 cc" },
      { label: "BHP",               value: "82 bhp @ 6000 rpm" },
      { label: "Transmission",      value: "5‑speed MT" },
    ],
  },
  {
    id: "aura-s",
    name: "AURA 1.2 MT S",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 7.38 Lakh" },   // :contentReference[oaicite:2]{index=2}
      { label: "On‑Road Price",     value: "₹ 8.55 Lakh" },
      { label: "Fuel Type",         value: "Petrol" },
      { label: "Engine",            value: "1197 cc" },
      { label: "BHP",               value: "82 bhp @ 6000 rpm" },
      { label: "Transmission",      value: "5‑speed MT" },
    ],
  },
  {
    id: "aura-sx",
    name: "AURA 1.2 MT SX",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 8.15 Lakh" },   // :contentReference[oaicite:3]{index=3}
      { label: "On‑Road Price",     value: "₹ 9.45 Lakh" },
      { label: "Fuel Type",         value: "Petrol" },
      { label: "Engine",            value: "1197 cc" },
      { label: "BHP",               value: "82 bhp @ 6000 rpm" },
      { label: "Transmission",      value: "5‑speed MT" },
    ],
  },
  {
    id: "aura-sx-amt",
    name: "AURA 1.2 AMT SX Plus",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 8.95 Lakh" },   // :contentReference[oaicite:4]{index=4}
      { label: "On‑Road Price",     value: "₹ 10.35 Lakh" },
      { label: "Fuel Type",         value: "Petrol" },
      { label: "Engine",            value: "1197 cc" },
      { label: "BHP",               value: "82 bhp @ 6000 rpm" },
      { label: "Transmission",      value: "AMT (5‑spd)" },
    ],
  },
  {
    id: "aura-sx-cng",
    name: "AURA 1.2 CNG SX",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 9.11 Lakh" },   // :contentReference[oaicite:5]{index=5}
      { label: "On‑Road Price",     value: "₹ 10.50 Lakh" },
      { label: "Fuel Type",         value: "CNG" },
      { label: "Engine",            value: "1197 cc" },
      { label: "BHP",               value: "68 bhp @ 6000 rpm" },
      { label: "Transmission",      value: "5‑speed MT" },
    ],
  },
];

/* ───────── HERO CARD ───────── */
export const AuraHero = {
  img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Aura/10126/1694588549389/front-left-side-47.jpg", // :contentReference[oaicite:6]{index=6}
  tags: [
    { title: "Projector LED DRLs",   text: "H‑shaped signature lights" },
    { title: "6 Airbags Standard",   text: "Safety across every trim" },
    { title: "8‑inch HD Touch‑screen", text: "Wireless Android Auto/Apple CarPlay" },
  ],
};

/* ───────── BASIC INFO ───────── */
export const AuraInfo = {
  breadcrumbs: ["Home", "Sedans", "Aura"],
  name: "Hyundai AURA",
  price: "₹ 6.54 Lakh*",
  showroom: "₹ 6.54 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Engines",    value: "1.2 L Kappa Petrol & CNG" },
    { label: "Airbags",    value: "6" },
    { label: "Boot Space", value: "402 L" },   // :contentReference[oaicite:7]{index=7}
  ],
};

/* ───────── COLOUR PALETTE (HD CarDekho links) ───────── */
export const auraColors = [
  { name: "Fiery Red",      hex1: "#b30016", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Aura/10126/1694588549389/fiery-red.jpg" },       // :contentReference[oaicite:8]{index=8}
  { name: "Typhoon Silver", hex1: "#c0c0c0", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Aura/10126/1694588549389/typhoon-silver.jpg" }, // :contentReference[oaicite:9]{index=9}
  { name: "Starry Night",   hex1: "#0b102b", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Aura/10126/1694588549389/starry-night.jpg" },
  { name: "Atlas White",    hex1: "#ffffff", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Aura/10126/1694588549389/atlas-white.jpg" },
  { name: "Titan Grey",     hex1: "#4d4d57", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Aura/10126/1694588549389/titan-grey.jpg" },
  { name: "Aqua Teal",      hex1: "#046b6b", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Aura/10126/1694588549389/aqua-teal.jpg" },
];

/* ───────── TECH‑SPEC TABLES ───────── */
export const engineRows = {
  MT: [
    { label: "Engine",        value: "1.2 L Kappa Petrol" },
    { label: "Transmission",  value: "5‑speed MT" },
    { label: "Mileage (ARAI)", value: "20.30 km/l" },
  ],
  AMT: [
    { label: "Engine",        value: "1.2 L Kappa Petrol" },
    { label: "Transmission",  value: "5‑speed AMT" },
    { label: "Mileage (ARAI)", value: "20.00 km/l" },
  ],
  CNG: [
    { label: "Engine",        value: "1.2 L Kappa Bi‑Fuel" },
    { label: "Transmission",  value: "5‑speed MT" },
    { label: "Mileage (ARAI)", value: "28.00 km/kg" },
  ],
};

export const dimensionsRows = {
  ALL: [
    { label: "Length",             value: "3,995 mm" },  // :contentReference[oaicite:10]{index=10}
    { label: "Width",              value: "1,680 mm" },
    { label: "Height",             value: "1,520 mm" },  // :contentReference[oaicite:11]{index=11}
    { label: "Wheelbase",          value: "2,450 mm" },
    { label: "Ground Clearance",   value: "165 mm" },    // :contentReference[oaicite:12]{index=12}
    { label: "Boot Space",         value: "402 L" },     // :contentReference[oaicite:13]{index=13}
    { label: "Fuel Tank",          value: "37 L" },      // :contentReference[oaicite:14]{index=14}
  ],
};

/* ───────── OPTIONAL CTAs ───────── */
export const auraCTAs = {
  primary: { label: "Book a Service", onClick: () => alert("Service booking – Aura") },
  secondary: [
    { label: "Book Test Drive", color: "bg-indigo-900 hover:bg-indigo-800" },
    { label: "Get a Quote",     color: "bg-red-700 hover:bg-red-600" },
  ],
};
