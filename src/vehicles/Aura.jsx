import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import {  AuraHero,
  AuraInfo,
  AuraVariants,
  auraColors,
  engineRows,
  dimensionsRows,auraCTAs } from "../data/aura";


export default function Aura() {
  return (
    <>
      <VehicleHeroCard hero={AuraHero} info={AuraInfo} ctas={auraCTAs} />

      <VariantSelector
        variants={AuraVariants}
        onChange={(v) => console.log("Chosen Aura variant:", v)}
      />

      <CarVisualizer name="AURA‑COLORS" colors={auraColors} />

      <VehicleSpecs
        img="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/aura/Highlights/aura-tech.jpg"
        heading="AURA TECHNICAL SPECS"
        blurb="Efficient Kappa engines with factory‑fitted CNG and smart AMT option."
        transmissions={["MT", "AMT", "CNG"]}
        sections={[
          { title: "ENGINE", rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
