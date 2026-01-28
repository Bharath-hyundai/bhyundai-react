/* ───────── IONIQ 5 VARIANTS (June 2025 ex‑showroom ₹) ───────── */
export const Ioniq5Variants = [
  {
    id: "ioniq5-rwd",
    name: "IONIQ 5 RWD 72.6 kWh",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 46.05 Lakh" },       // :contentReference[oaicite:2]{index=2}
      { label: "On‑Road Price (Delhi)", value: "₹ 47.72 Lakh" },   // :contentReference[oaicite:3]{index=3}
      { label: "Fuel Type", value: "Electric" },
      { label: "Battery", value: "72.6 kWh" },
      { label: "Range (ARAI)", value: "631 km" },                  // :contentReference[oaicite:4]{index=4}
      { label: "Transmission", value: "Single‑Speed AWD" },
    ],
  },
];
/* ───────── IONIQ 5 HERO CARD ───────── */
export const Ioniq5Hero = {
  img: "https://cdni.autocarindia.com/News/hyundai-ioniq-5-front-action.jpg",
  tags: [
    { title: "E‑GMP Platform", text: "Fast DC charging & V2L support" },         // :contentReference[oaicite:5]{index=5}
    { title: "Level‑2 ADAS", text: "Hyundai SmartSense with 21 features" },     // :contentReference[oaicite:6]{index=6}
    { title: "631 km ARAI Range", text: "Longest‑range EV in its segment" },   // :contentReference[oaicite:7]{index=7}
  ],
};
/* ───────── IONIQ 5 BASIC INFO ───────── */
export const Ioniq5Info = {
  breadcrumbs: ["Home", "Electric Cars", "IONIQ 5"],
  name: "Hyundai IONIQ 5",
  price: "₹ 46.05 Lakh*",
  showroom: "₹ 46.05 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Battery", value: "72.6 kWh" },
    { label: "Seating", value: "5‑seater" },
    { label: "Range", value: "631 km (ARAI)" },                         // :contentReference[oaicite:8]{index=8}
  ],
};
/* ───────── COLOR PALETTE (Sample) ───────── */
export const ioniq5Colors = [
  { name: "Gravity Gold Matte", hex1: "#bfa77b", images: "https://www.carwale.com/hyundai-cars/ioniq-5/colour/gravity-gold-matte/" },
  { name: "Atlas White", hex1: "#ffffff", images: "https://www.carwale.com/hyundai-cars/ioniq-5/colour/atlas-white/" },
  { name: "Parametric Red", hex1: "#b30016", images: "https://www.carwale.com/hyundai-cars/ioniq-5/colour/parametric-red/" },
  { name: "Cyber Grey", hex1: "#585d63", images: "https://www.carwale.com/hyundai-cars/ioniq-5/colour/cyber-grey/" },
];
/* ───────── TECH‑SPEC TABLES ───────── */
export const engineRows = {
  Electric: [
    { label: "Battery", value: "72.6 kWh Li‑ion" },
    { label: "Drive", value: "Rear‑Wheel Drive" },
    { label: "Power", value: "215 bhp (estimated)" },
    { label: "Range (ARAI)", value: "631 km" },
  ],
};

export const dimensionsRows = {
  ALL: [
    { label: "Length", value: "4,635 mm" },
    { label: "Width", value: "1,890 mm" },
    { label: "Height", value: "1,625 mm" },
    { label: "Wheelbase", value: "3,000 mm" },                        // :contentReference[oaicite:9]{index=9}
    { label: "Boot Space", value: "531 L" },
    { label: "Charging", value: "10‑80 % DC in ~18 min" },           // :contentReference[oaicite:10]{index=10}
  ],
};
/* ───────── IONIQ 5 CTAs ───────── */
export const ioniq5CTAs = {
  primary: { label: "Book Test Drive", onClick: () => alert("Test-drive booking – IONIQ 5") },
  secondary: [
    { label: "Download Brochure", color: "bg-gray-700 hover:bg-gray-600" },
    { label: "Find a Dealer", color: "bg-blue-700 hover:bg-blue-600" },
  ],
};
