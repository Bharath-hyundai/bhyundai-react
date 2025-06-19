/* ───────── CRETA N LINE VARIANTS (June 2025 ex‑showroom ₹) ───────── */
export const CretaNLineVariants = [
  {
    id: "creta-nline-n8-mt",
    name: "N8 1.5 Turbo Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 16.82 Lakh" },        // :contentReference[oaicite:2]{index=2}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1 482 cc Turbo GDi" },            // :contentReference[oaicite:3]{index=3}
      { label: "Power", value: "160 PS / 158 bhp" },               // :contentReference[oaicite:4]{index=4}
      { label: "Torque", value: "253 Nm" },                       // :contentReference[oaicite:5]{index=5}
      { label: "Transmission", value: "6‑Speed MT" },
    ],
  },
  {
    id: "creta-nline-n8-dct",
    name: "N8 1.5 Turbo Petrol DCT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 18.32 Lakh" },        // :contentReference[oaicite:6]{index=6}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1 482 cc Turbo GDi" },
      { label: "Power", value: "160 PS" },
      { label: "Torque", value: "253 Nm" },
      { label: "Transmission", value: "7‑Speed DCT" },
      { label: "Mileage (ARAI)", value: "18.2 kmpl" },              // :contentReference[oaicite:7]{index=7}
    ],
  },
  {
    id: "creta-nline-n10-mt",
    name: "N10 1.5 Turbo Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 19.34 Lakh" },        // :contentReference[oaicite:8]{index=8}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1 482 cc Turbo GDi" },
      { label: "Power", value: "160 PS" },
      { label: "Torque", value: "253 Nm" },
      { label: "Transmission", value: "6‑Speed MT" },
    ],
  },
  {
    id: "creta-nline-n10-dct",
    name: "N10 1.5 Turbo Petrol DCT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 20.29 Lakh" },        // :contentReference[oaicite:9]{index=9}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1 482 cc Turbo GDi" },
      { label: "Power", value: "160 PS" },
      { label: "Torque", value: "253 Nm" },
      { label: "Transmission", value: "7‑Speed DCT" },
      { label: "Mileage (ARAI)", value: "18.2 kmpl" },
    ],
  },
];

/* ───────── HERO CARD DATA ───────── */
export const CretaNLineHero = {
  img: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/creta-n-line/highlights/pc/innerkv-PC_revised.jpg",
  tags: [
    { title: "WRC‑Inspired Design", text: "Sporty grille, red accents, twin‑tip exhaust" }, // :contentReference[oaicite:10]{index=10}
    { title: "Level‑2 ADAS", text: "Lane‑keep, adaptive cruise, blind‑spot monitor" },      // :contentReference[oaicite:11]{index=11}
    { title: "Dual 10.25″ Screens", text: "HD touchscreen + digital cluster" },             // :contentReference[oaicite:12]{index=12}
  ],
};

/* ───────── BASIC INFO SECTION ───────── */
export const CretaNLineInfo = {
  breadcrumbs: ["Home", "SUVs", "Creta N Line"],
  name: "Hyundai Creta N Line",
  price: "₹ 16.82 Lakh*",
  showroom: "₹ 16.82 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Engine", value: "1.5 L Turbo GDi Petrol" },
    { label: "Seating", value: "5‑seater" },
    { label: "Mileage (ARAI)", value: "18 kmpl" },
  ],
};

/* ───────── COLOR PALETTE (6 colors) ───────── */
export const cretaNLineColors = [
  { name: "Titan Grey Matte", hex1: "#585d63", images: "https://ackodrive.com/cars/hyundai-creta-n-line/images/titan-grey.jpg" },
  { name: "Abyss Black", hex1: "#000000", images: "https://ackodrive.com/cars/hyundai-creta-n-line/images/abyss-black.jpg" },
  { name: "Polar White", hex1: "#ffffff", images: "https://ackodrive.com/cars/hyundai-creta-n-line/images/polar-white.jpg" },
  { name: "Thunder Blue", hex1: "#003f87", images: "https://ackodrive.com/cars/hyundai-creta-n-line/images/thunder-blue.jpg" },
  { name: "Dual-tone Polar White/Black Roof", hex1: "#ffffff", hex2: "#000000", images: "https://ackodrive.com/cars/hyundai-creta-n-line/images/dual-tone.jpg" },
];

/* ───────── TECH‑SPEC TABLES ───────── */
export const engineRows = {
  MT: [
    { label: "Engine", value: "1.5 L Turbo GDi" },
    { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Power", value: "160 PS / 253 Nm" },
    { label: "Mileage (ARAI)", value: "18 kmpl" },
  ],
  DCT: [
    { label: "Engine", value: "1.5 L Turbo GDi" },
    { label: "Transmission", value: "7‑Speed DCT" },
    { label: "Power", value: "160 PS / 253 Nm" },
    { label: "Mileage (ARAI)", value: "18.2 kmpl" },
  ],
};

export const dimensionsRows = {
  ALL: [
    { label: "Length", value: "4,330 mm" },
    { label: "Width", value: "1,790 mm" },
    { label: "Height", value: "1,635 mm" },
    { label: "Wheelbase", value: "2,610 mm" },
    { label: "Ground Clearance", value: "190 mm" },
    { label: "Boot Space", value: "433 L" },
    { label: "Fuel Tank", value: "50 L" },
  ],
};

/* ───────── CTAs ───────── */
export const cretaNLineCTAs = {
  primary: { label: "Book Test Drive", onClick: () => alert("Test-drive booking – Creta N Line") },
  secondary: [
    { label: "Download Brochure", color: "bg-gray-700 hover:bg-gray-600" },
    { label: "Find a Dealer", color: "bg-blue-700 hover:bg-blue-600" },
  ],
};
