/* ───────── ALCAZAR VARIANTS (June 2025 ex-showroom ₹) ───────── */
export const AlcazarVariants = [
  {
    id: "alcazar-exec-petrol-mt",
    name: "Executive 7S 1.5 Turbo Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 14.99 Lakh" },          // :contentReference[oaicite:1]{index=1}
      { label: "On‑Road Price (Delhi)", value: "₹ 17.34 Lakh" },      // :contentReference[oaicite:2]{index=2}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1482 cc Turbo GDi" },
      { label: "BHP", value: "158 bhp @ 5 500 rpm" },
      { label: "Transmission", value: "6‑Speed MT" },
    ],
  },
  {
    id: "alcazar-exec-petrol-dct",
    name: "Executive 7S 1.5 Turbo Petrol DCT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 17.18 Lakh" },          // :contentReference[oaicite:3]{index=3}
      { label: "On‑Road Price (Delhi)", value: "₹ 20.03 Lakh" },      // :contentReference[oaicite:4]{index=4}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1482 cc Turbo GDi" },
      { label: "BHP", value: "158 bhp @ 5 500 rpm" },
      { label: "Transmission", value: "7‑Speed DCT" },
    ],
  },
  {
    id: "alcazar-prestige",
    name: "Prestige 7S Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 17.18 Lakh" },          // :contentReference[oaicite:5]{index=5}
      { label: "On‑Road Price (Delhi)", value: "₹ 19.88 Lakh" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1482 cc Turbo GDi" },
      { label: "BHP", value: "158 bhp @ 5 500 rpm" },
      { label: "Transmission", value: "6‑Speed MT" },
    ],
  },
  {
    id: "alcazar-signature-dct",
    name: "Signature 6‑Seater Petrol DCT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 21.70 Lakh" },          // :contentReference[oaicite:6]{index=6}
      { label: "On‑Road Price (Delhi)", value: "₹ 25.40 Lakh" },      // :contentReference[oaicite:7]{index=7}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1482 cc Turbo GDi" },
      { label: "BHP", value: "158 bhp @ 5 500 rpm" },
      { label: "Transmission", value: "7‑Speed DCT" },
    ],
  },
];

/* ───────── HERO CARD DATA ───────── */
export const AlcazarHero = {
  img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Alcazar-2024/9246/1724327608542/front-left-side-47.jpg",
  tags: [
    { title: "6‑Seater & 7‑Seater", text: "Your choice of captain configuration" },
    { title: "Level‑2 ADAS", text: "Lane‑keep assist, ACC & more" },                   // :contentReference[oaicite:8]{index=8}
    { title: "Panoramic Sunroof", text: "Premium open‑air experience" },
  ],
};

/* ───────── BASIC INFO SECTION ───────── */
export const AlcazarInfo = {
  breadcrumbs: ["Home", "SUVs", "Alcazar"],
  name: "Hyundai ALCAZAR",
  price: "₹ 14.99 Lakh*",
  showroom: "₹ 14.99 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Engine", value: "1.5 L Turbo GDi Petrol" },
    { label: "Airbags", value: "6" },
    { label: "Seating", value: "6 or 7‑seat options" },                                           // :contentReference[oaicite:9]{index=9}
  ],
};

/* ───────── COLOR PALETTE (12 colors, HD CarDekho images) ───────── */
export const alcazarColors = [
  { name: "Fiery Red", hex1: "#b30016", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Alcazar/fiery-red.jpg" },               // :contentReference[oaicite:10]{index=10}
  { name: "Robust Emerald Pearl", hex1: "#005f3f", images: "https://stimg.cardekho.com/images/car-images/630x420/.../robust-emerald-pearl.jpg" },
  { name: "Starry Night", hex1: "#0b102b", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Alcazar/starry-night.jpg" },      // :contentReference[oaicite:11]{index=11}
  { name: "Atlas White", hex1: "#ffffff", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Alcazar/atlas-white.jpg" },
  { name: "Ranger Khaki", hex1: "#4e6954", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Alcazar/ranger-khaki.jpg" },
  { name: "Titan Grey Matte", hex1: "#585d63", images: "https://stimg.cardekho.com/images/car-images/630x420/.../titan-grey-matte.jpg" },
  { name: "Abyss Black", hex1: "#000000", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Alcazar/abyss-black.jpg" },
  { name: "Atlas White / Abyss Black Roof", hex1: "#ffffff", hex2: "#000000", images: "https://stimg.cardekho.com/images/car-images/.../dual-tone.jpg" },
];

/* ───────── TECH‑SPEC TABLES ───────── */
export const engineRows = {
  MT: [
    { label: "Engine", value: "1.5 L Turbo GDi" },
    { label: "Transmission", value: "6‑Speed MT" },
    { label: "Mileage (ARAI)", value: "17.5 kmpl" },
  ],
  DCT: [
    { label: "Engine", value: "1.5 L Turbo GDi" },
    { label: "Transmission", value: "7‑Speed DCT" },
    { label: "Mileage (ARAI)", value: "18.1 kmpl" },
  ],
};

export const dimensionsRows = {
  ALL: [
    { label: "Length", value: "4,500 mm" },
    { label: "Width", value: "1,790 mm" },
    { label: "Height", value: "1,675 mm" },
    { label: "Wheelbase", value: "2,780 mm" },
    { label: "Ground Clearance", value: "185 mm" },
    { label: "Boot Space", value: "180 L (7‑seat) / 475 L (6‑seat)" },
    { label: "Fuel Tank", value: "50 L" },
  ],
};

/* ───────── OPTIONAL CTAs ───────── */
export const alcazarCTAs = {
  primary: { label: "Book a Service", onClick: () => alert("Service booking – Alcazar") },
  secondary: [
    { label: "Book Test Drive", color: "bg-indigo-900 hover:bg-indigo-800" },
    { label: "Download Brochure", color: "bg-gray-700 hover:bg-gray-600" },
  ],
};
