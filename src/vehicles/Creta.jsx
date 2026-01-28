import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";

const CretaVariants = [
  {
    id: "verna-ex",
    name: "VERNA 1.5 MPi MT EX",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹11.00 Lakh." },
      { label: "On‑Road Price",     value: "₹ 14.23 Lakh." },
      { label: "Fuel Type",         value: "Petrol" },
      { label: "Engine",            value: "1497 cc" },
      { label: "BHP",               value: "113.18 bhp @ 6300 rpm" },
      { label: "Transmission",      value: "Manual" },
    ],
  },
  {
    id: "verna-s",
    name: "VERNA 1.5 MPi MT S",
    specs: [
      { label: "Ex‑Showroom Price", value: "₹12.15 Lakh." },
      { label: "On‑Road Price",     value: "₹ 15.55 Lakh." },
      { label: "Fuel Type",         value: "Petrol" },
      { label: "Engine",            value: "1497 cc" },
      { label: "BHP",               value: "113.18 bhp @ 6300 rpm" },
      { label: "Transmission",      value: "Manual" },
    ],
  },
  // …more variants
];


export default function CretaHero() {




const engineRows = {
  MANUAL: [
    { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Fuel Efficiency", value: "18.5 km/l" },
     { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Fuel Efficiency", value: "18.5 km/l" },
     { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Fuel Efficiency", value: "18.5 km/l" },
  ],
  AUTOMATIC: [
    { label: "Transmission", value: "6‑Speed Automatic" },
    { label: "Fuel Efficiency", value: "17.6 km/l" },
     { label: "Transmission", value: "6‑Speed Automatic" },
    { label: "Fuel Efficiency", value: "17.6 km/l" },
  ],
};

const dimensionsRows = {
   MANUAL: [
    { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Fuel Efficiency", value: "18.5 km/l" },
     { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Fuel Efficiency", value: "18.5 km/l" },
     { label: "Transmission", value: "6‑Speed Manual" },
    { label: "Fuel Efficiency", value: "18.5 km/l" },
  ],
   AUTOMATIC: [
    { label: "Transmission", value: "6‑Speed Automatic" },
    { label: "Fuel Efficiency", value: "17.6 km/l" },
     { label: "Transmission", value: "6‑Speed Automatic" },
    { label: "Fuel Efficiency", value: "17.6 km/l" },
  ],
};



  const cretaColors = [
     {
    name: "Silver",
    hex1: "#c0c0c0",
    hex2: "#b8b8b8",
    images: "/images/sonet_silver.png",
  },
  {
    name: "Red-Black",
    hex1: "#c00016",
    hex2: "#000000",
    images: "/images/sonet_red_black.png",
  },
  {
    name: "Blue-White",
    hex1: "#0047ab",
    hex2: "#ffffff",
    images: "/images/sonet_blue_white.png",
  },
  {
    name: "Gravity Grey",
    hex1: "#b4b5b7",
    images: "https://imgd.aeplcdn.com/600x337/n/qye98cb_1711085.jpg?q=80",
     
  
  },

 
];
  return (
    <>
    <VehicleHeroCard
      hero={{
        img: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/knightcreta_innerkvpc.jpg",
        tags: [
          { title: "6 Airbags Standard", text: "Enhanced safety all around" },
          { title: "Panoramic Sunroof", text: "Bask in the natural light" },
          { title: "Connected Tech", text: "Bluelink with 60+ features" },
        ],
      }}
      info={{
        breadcrumbs: ["Home", "SUVs", "Creta"],
        name: "Hyundai CRETA",
        price: "₹ 10.99 Lakh*",
        showroom: "₹ 10.99 Lakh*",
        specs: [
          { label: "Engine", value: "1.5 L" },
          { label: "Airbags", value: "6" },
          { label: "Boot Space", value: "433 L" },
        ],
      }}
      ctas={{
        primary: { label: "Book a Service", onClick: () => alert("Book Service") },
        secondary: [
          { label: "Book Test Drive", color: "bg-indigo-900 hover:bg-indigo-800" },
          { label: "Get a Quote",     color: "bg-red-700 hover:bg-red-600" },
        ],
      }}
    />
 <VariantSelector
        variants={CretaVariants}
        onChange={(variant) => console.log("User chose:", variant)}
      />
  <CarVisualizer
      name="CRETA-COLORS"
      colors={cretaColors}
      wordMark="Automotive" // optional, defaults to this anyway
    />
      <VehicleSpecs
      img="https://ds-prod.citroen.in/static-assets/ds-static/s3fs-public/2023-09/KEY-STRENGTHS-906X780-2_3.jpg?H.H2cPhkmB09O1cM9E5IyYEZObHApexy"
      heading="AIRCROSS TECHNICAL SPECS"
      blurb="Powered by a 1.2L Turbo engine with a 6‑speed manual and automatic
             transmission, the Citroën Aircross is built to be tough on the outside,
             caring on the inside..."
      transmissions={["MANUAL", "AUTOMATIC"]}
      sections={[
        { title: "ENGINE",            rows: engineRows },
        { title: "DIMENSIONS",        rows: dimensionsRows },
        { title: "STEERING & TYRES",  rows: [/* ... */] },
        { title: "SUSPENSION & BRAKES", rows: [/* ... */] },
      ]}
    />
    
    </>

  );
}
