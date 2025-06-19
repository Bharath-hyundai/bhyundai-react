/* ───────── TUCSON VARIANTS (June 2025 ex‑showroom ₹) ───────── */
export const TucsonVariants = [
  {
    id: "tucson-platinum-petrol-at",
    name: "Platinum 2.0 Petrol AT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 29.27 Lakh" },      // :contentReference[oaicite:2]{index=2}
      { label: "On‑Road Price (Delhi)", value: "₹ 33.75 Lakh" },  // :contentReference[oaicite:3]{index=3}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1,999 cc MPI" },                // :contentReference[oaicite:4]{index=4}
      { label: "Power", value: "154 bhp @ 6 200 rpm" },         // :contentReference[oaicite:5]{index=5}
      { label: "Transmission", value: "6‑Speed Automatic" },
    ],
  },
  {
    id: "tucson-signature-petrol-at",
    name: "Signature 2.0 Petrol AT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 31.77 Lakh" },      // :contentReference[oaicite:6]{index=6}
      { label: "On‑Road Price (Delhi)", value: "₹ 36.66 Lakh" },  // :contentReference[oaicite:7]{index=7}
      { label: "Fuel Type", value: "Petrol" },
      { label: "Engine", value: "1,999 cc MPI" },
      { label: "Power", value: "154 bhp @ 6 200 rpm" },
      { label: "Transmission", value: "6‑Speed Automatic" },
    ],
  },
  {
    id: "tucson-platinum-diesel-at",
    name: "Platinum 2.0 Diesel AT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 31.65 Lakh" },      // :contentReference[oaicite:8]{index=8}
      { label: "On‑Road Price (Delhi)", value: "₹ 37.01 Lakh" },  // :contentReference[oaicite:9]{index=9}
      { label: "Fuel Type", value: "Diesel" },
      { label: "Engine", value: "1,997 cc CRDi" },               // :contentReference[oaicite:10]{index=10}
      { label: "Power", value: "184 bhp @ 4 000 rpm" },         // :contentReference[oaicite:11]{index=11}
      { label: "Transmission", value: "6‑Speed Automatic" },
    ],
  },
  {
    id: "tucson-signature-diesel-awd-at",
    name: "Signature 2.0 Diesel AWD AT",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹ 35.94 Lakh" },      // :contentReference[oaicite:12]{index=12}
      { label: "On‑Road Price (Delhi)", value: "₹ 40.57 Lakh" },  // :contentReference[oaicite:13]{index=13}
      { label: "Fuel Type", value: "Diesel" },
      { label: "Engine", value: "1,997 cc CRDi" },
      { label: "Power", value: "184 bhp @ 4 000 rpm" },
      { label: "Transmission", value: "6‑Speed Automatic" },
      { label: "Drivetrain", value: "AWD" },
    ],
  },
];

/* ───────── HERO CARD DATA ───────── */
export const TucsonHero = {
  img: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Tucson/innerkv-PC_Hyundai_Tuscon.jpg",
  tags: [
    { title: "Parametric LED Lights", text: "Bold, hidden DRLs & LED headlamps" },    // :contentReference[oaicite:14]{index=14}
    { title: "Level‑2 ADAS", text: "SmartSense: lane‑keep, blind‑spot, ACC" },        // :contentReference[oaicite:15]{index=15}
    { title: "Dual 12.3″ Screens", text: "Curved digital cluster & touchscreen combo" }, // :contentReference[oaicite:16]{index=16}
  ],
};

/* ───────── BASIC INFO SECTION ───────── */
export const TucsonInfo = {
  breadcrumbs: ["Home", "SUVs", "Tucson"],
  name: "Hyundai Tucson",
  price: "₹ 29.27 Lakh*",
  showroom: "₹ 29.27 Lakh* (ex‑showroom Delhi)",
  specs: [
    { label: "Engine Options", value: "2.0 L Petrol / Diesel" },
    { label: "Seating", value: "5‑seater" },
    { label: "Mileage", value: "13–18 kmpl ARAI" },             // :contentReference[oaicite:17]{index=17}
  ],
};

/* ───────── COLOR PALETTE (Sample 6 colors) ───────── */
export const tucsonColors = [
  { name: "Phantom Black", hex1: "#000000", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Tucson/phantom-black.jpg" },
  { name: "Typhoon Silver", hex1: "#c0c0c0", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Tucson/typhoon-silver.jpg" },
  { name: "Polar White", hex1: "#ffffff", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Tucson/polar-white.jpg" },
  { name: "Deep Forest", hex1: "#1f3e2e", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Tucson/deep-forest.jpg" },
  { name: "Starry Night", hex1: "#1a1d29", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Tucson/starry-night.jpg" },
  { name: "Polar White / Black Roof", hex1: "#ffffff", hex2: "#000000", images: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Tucson/dual-tone.jpg" },
];

/* ───────── TECH‑SPEC TABLES ───────── */
export const engineRows = {
  Petrol: [
    { label: "Engine", value: "2.0 L MPI Petrol" },
    { label: "Transmission", value: "6‑Speed AT" },
    { label: "Power", value: "154 bhp / 192 Nm" },
    { label: "Mileage", value: "16.5 kmpl" },                  // :contentReference[oaicite:18]{index=18}
  ],
  Diesel: [
    { label: "Engine", value: "2.0 L CRDi Diesel" },
    { label: "Transmission", value: "6‑Speed AT" },
    { label: "Power", value: "184 bhp / 416 Nm" },
    { label: "Mileage", value: "15 kmpl avg" },               // :contentReference[oaicite:19]{index=19}
  ],
};

export const dimensionsRows = {
  ALL: [
    { label: "Length", value: "4,630 mm" },                   // :contentReference[oaicite:20]{index=20}
    { label: "Width", value: "1,865 mm" },                    // :contentReference[oaicite:21]{index=21}
    { label: "Height", value: "1,665 mm" },                   // (approx typical)
    { label: "Wheelbase", value: "2,755 mm" },                // :contentReference[oaicite:22]{index=22}
    { label: "Boot Space", value: "620 L" },                  // (common spec)
    { label: "Fuel Tank", value: "62 L" },                    // (common spec)
  ],
};

/* ───────── CTAs ───────── */
export const tucsonCTAs = {
  primary: { label: "Book Test Drive", onClick: () => alert("Test-drive booking – Tucson") },
  secondary: [
    { label: "Download Brochure", color: "bg-gray-700 hover:bg-gray-600" },
    { label: "Find a Dealer", color: "bg-blue-700 hover:bg-blue-600" },
  ],
};
