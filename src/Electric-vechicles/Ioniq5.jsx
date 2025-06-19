import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import {  Ioniq5Hero,
  Ioniq5Info,
  Ioniq5Variants,
  ioniq5Colors,
  engineRows,
  dimensionsRows, ioniq5CTAs } from "../data/Ioniq5";

  

export default function Ioniq5() {
  return (
    <>
      <VehicleHeroCard hero={Ioniq5Hero} info={Ioniq5Info} ctas={ioniq5CTAs} />
      <VariantSelector variants={Ioniq5Variants} onChange={v => console.log("Chosen IONIQ 5:", v)} />
      <CarVisualizer name="IONIQ5‑COLORS" colors={ioniq5Colors} />
      <VehicleSpecs
        img="https://ioniq5.hyundai.co.in/content/dam/hyundai/in/ioniq5/overview/ionq5-tech-specs.jpg"
        heading="IONIQ 5 TECHNICAL SPECS"
        blurb="Advanced E‑GMP EV platform, Level‑2 ADAS, ultra‑fast charging & premium tech."
        transmissions={["Electric"]}
        sections={[
          { title: "POWERTRAIN", rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
