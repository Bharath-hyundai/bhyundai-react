/* ───────── GRAND i10 NIOS VARIANTS (June 2025 ex‑showroom ₹) ───────── */
export const GrandI10NiosVariants = [
  {
    id: "gi10n-eras",
    name: "Era 1.2 Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 5.98 Lakh" },      // :contentReference[oaicite:2]{index=2}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1197 cc Kappa" },
      { label: "BHP", value: "82 bhp @ 6 000 rpm" },             // :contentReference[oaicite:3]{index=3}
      { label: "Transmission", value: "5‑Speed MT" },
    ],
  },
  {
    id: "gi10n-magna",
    name: "Magna 1.2 Petrol MT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 6.84 Lakh" },      // :contentReference[oaicite:4]{index=4}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1197 cc Kappa" },
      { label: "Mileage (ARAI)", value: "18 kmpl" },             // :contentReference[oaicite:5]{index=5}
      { label: "Transmission", value: "5‑Speed MT" },
    ],
  },
  {
    id: "gi10n-corporate-amt",
    name: "Corporate 1.2 Petrol AMT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 7.74 Lakh" },      // :contentReference[oaicite:6]{index=6}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1197 cc Kappa" },
      { label: "Transmission", value: "AMT" },
      { label: "Key Feature", value: "Projector headlamps, touchscreen audio" }, // :contentReference[oaicite:7]{index=7}
    ],
  },
  {
    id: "gi10n-asta-amt",
    name: "Asta 1.2 Petrol AMT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 8.62 Lakh" },      // :contentReference[oaicite:8]{index=8}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1197 cc Kappa" },
      { label: "Transmission", value: "AMT" },
      { label: "Mileage (ARAI)", value: "18 kmpl" },             // :contentReference[oaicite:9]{index=9}
    ],
  },
];

/* ───────── HERO CARD DATA ───────── */
export const GrandI10NiosHero = {
  img: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Grand-i10-Nios/Highlights/Grandi10niosnew/innerkvnioscng-PC.jpg",
  tags: [
    { title: "Petrol & CNG", text: "Choice of fuel options" },       // :contentReference[oaicite:10]{index=10}
    { title: "6‑Airbags", text: "Standard safety across variants" }, // :contentReference[oaicite:11]{index=11}
    { title: "Smart Cabin", text: "Touchscreen, cruise, wireless‑charging" }, // :contentReference[oaicite:12]{index=12}
  ],
};

/* ───────── BASIC INFO SECTION ───────── */
export const GrandI10NiosInfo = {
  breadcrumbs: ["Home", "Hatchbacks", "Grand i10 Nios"],
  name: "Hyundai Grand i10 NIOS",
  price: "₹ 5.98 Lakh*",
  showroom: "₹ 5.98 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Engine", value: "1.2 L Kappa Petrol" },
    { label: "Seating", value: "5‑seater" },
    { label: "Mileage (ARAI)", value: "16–18 kmpl" },               // :contentReference[oaicite:13]{index=13}
  ],
};

/* ───────── COLOR PALETTE (Sample colors) ───────── */
export const grandI10NiosColors = [
  {
    name: "Polar White",
    hex1: "#ffffff",
    images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Grand-i10-Nios/polar-white.jpg",
  },
  {
    name: "Fiery Red",
    hex1: "#b30016",
    images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Grand-i10-Nios/fiery-red.jpg",
  },
  {
    name: "Typhoon Silver",
    hex1: "#c0c0c0",
    images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Grand-i10-Nios/typhoon-silver.jpg",
  },
  {
    name: "Spark Green",
    hex1: "#a2d236",
    images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Grand-i10-Nios/spark-green.jpg",
  },
  {
    name: "Aqua Teal",
    hex1: "#007f7f",
    images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Grand-i10-Nios/aqua-teal.jpg",
  },
  {
    name: "Polar White / Black Roof",
    hex1: "#ffffff",
    hex2: "#000000",
    images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Grand-i10-Nios/dual-tone.jpg",
  },
];

/* ───────── CTAs ───────── */
export const grandI10NiosCTAs = {
  primary: { label: "Book Test Drive", onClick: () => alert("Test-drive booking – Grand i10 Nios") },
  secondary: [
    { label: "Download Brochure", color: "bg-gray-700 hover:bg-gray-600" },
    { label: "Find a Dealer", color: "bg-blue-700 hover:bg-blue-600" },
  ],
};
