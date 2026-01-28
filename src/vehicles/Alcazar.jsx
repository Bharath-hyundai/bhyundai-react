import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import {  AlcazarHero,
  AlcazarInfo,
  AlcazarVariants,
  alcazarColors,
  engineRows,
  dimensionsRows,alcazarCTAs } from "../data/Alcazar";

export default function Alcazar() {
  return (
    <>
      <VehicleHeroCard hero={AlcazarHero} info={AlcazarInfo} ctas={alcazarCTAs} />

      <VariantSelector
        variants={AlcazarVariants}
        onChange={(v) => console.log("Chosen Alcazar variant:", v)}
      />

      <CarVisualizer name="ALCAZAR‑COLORS" colors={alcazarColors} />

      <VehicleSpecs
        img="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Alcazar/technical.jpg"
        heading="ALCAZAR TECHNICAL SPECS"
        blurb="Turbo‑charged engines, Level‑2 ADAS, and premium 6/7‑seat versatility."
        transmissions={["MT", "DCT"]}
        sections={[
          { title: "ENGINE", rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
