/* ───────── CRETA EV VARIANTS (June 2025 ex‑showroom ₹) ───────── */
export const CretaEVVariants = [
  {
    id: "creta-ev-executive-42",
    name: "Executive 42 kWh",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 17.99 Lakh" },            // :contentReference[oaicite:2]{index=2}
      { label: "Battery", value: "42 kWh" },
      { label: "Power", value: "133 bhp" },
      { label: "Range (ARAI)", value: "390 km" },
      { label: "Transmission", value: "Single‑Speed EV" },
    ],
  },
  {
    id: "creta-ev-smart-42",
    name: "Smart 42 kWh",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 19.00 Lakh" },            // :contentReference[oaicite:3]{index=3}
      { label: "Battery", value: "42 kWh" },
      { label: "Power", value: "133 bhp" },
      { label: "Range (ARAI)", value: "390 km" },
      { label: "Transmission", value: "EV" },
    ],
  },
  {
    id: "creta-ev-smart-o-lr-51",
    name: "Smart (O) LR 51.4 kWh",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 21.50 Lakh" },            // :contentReference[oaicite:4]{index=4}
      { label: "Battery", value: "51.4 kWh" },
      { label: "Power", value: "169 bhp" },
      { label: "Range (ARAI)", value: "473 km" },
      { label: "Transmission", value: "EV" },
    ],
  },
  {
    id: "creta-ev-excellence-lr-51",
    name: "Excellence LR 51.4 kWh",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 23.50 Lakh" },            // :contentReference[oaicite:5]{index=5}
      { label: "Battery", value: "51.4 kWh" },
      { label: "Power", value: "171 bhp" },
      { label: "Range (ARAI)", value: "473 km" },
      { label: "Transmission", value: "EV" },
    ],
  },
];

/* ───────── HERO CARD DATA ───────── */
export const CretaEVHero = {
  img: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/creta-electric/highlights/cretaevsmallimage1.jpg",
  tags: [
    { title: "390–473 km ARAI Range", text: "Two battery options for flexibility" },       // :contentReference[oaicite:6]{index=6}
    { title: "Dual 10.25″ Screens", text: "Infotainment + digital cluster" },               // :contentReference[oaicite:7]{index=7}
    { title: "Level‑2 ADAS", text: "SmartSense with around‑view and driver assistance" },   // :contentReference[oaicite:8]{index=8}
  ],
};

/* ───────── BASIC INFO SECTION ───────── */
export const CretaEVInfo = {
  breadcrumbs: ["Home", "Electric Cars", "Creta EV"],
  name: "Hyundai Creta EV",
  price: "₹ 17.99 Lakh*",
  showroom: "₹ 17.99 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Battery", value: "42 / 51.4 kWh" },
    { label: "Seating", value: "5‑seater" },
    { label: "Range", value: "390–473 km ARAI" },                                         // :contentReference[oaicite:9]{index=9}
  ],
};

/* ───────── COLOR PALETTE (Sample colours) ───────── */
export const cretaEVColors = [
  { name: "Ocean Blue", hex1: "#007f9f", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta-Electric/ocean-blue.jpg" },
  { name: "Atlas White", hex1: "#ffffff", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta-Electric/atlas-white.jpg" },
  { name: "Fiery Red", hex1: "#b30016", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta-Electric/fiery-red.jpg" },
  { name: "Abyss Black", hex1: "#000000", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta-Electric/abyss-black.jpg" },
];

/* ───────── TECH‑SPEC TABLES ───────── */
export const CretaEVengineRows = {
  EV: [
    { label: "Battery", value: "42 / 51.4 kWh" },
    { label: "Drive", value: "Front‑Wheel Drive" },
    { label: "Power", value: "133–171 bhp" },
    { label: "Range (ARAI)", value: "390–473 km" },
    { label: "Fast Charge 10–80 %", value: "≈58 min" },                                // :contentReference[oaicite:10]{index=10}
    { label: "AC Charge 10–100 %", value: "≈4 hr (11 kW)" },                           // :contentReference[oaicite:11]{index=11}
  ],
};

export const CretaEVdimensionsRows = {
  ALL: [
    { label: "Length", value: "4,340 mm" },                                           // :contentReference[oaicite:12]{index=12}
    { label: "Width", value: "1,790 mm" },
    { label: "Height", value: "1,655 mm" },
    { label: "Wheelbase", value: "2,610 mm" },
    { label: "Boot Space", value: "433 L" },
    { label: "Frunk", value: "≈22 L" },                                               // :contentReference[oaicite:13]{index=13}
    { label: "Ground Clearance", value: "190 mm" },
    { label: "Fuel Tank", value: "N/A (Electric)" },
  ],
};

/* ───────── CRETA EV CTAs ───────── */
export const cretaEVCTAs = {
  primary: { label: "Book Test Drive", onClick: () => alert("Test-drive booking – Creta EV") },
  secondary: [
    { label: "Download Brochure", color: "bg-gray-700 hover:bg-gray-600" },
    { label: "Find a Dealer", color: "bg-blue-700 hover:bg-blue-600" },
  ],
};
