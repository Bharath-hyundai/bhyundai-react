import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import { dimensionsRows } from "../data/exter";

import {
  TucsonHero,
  TucsonInfo,
  TucsonVariants,
  tucsonColors,
  engineRows,
  tucsonCTAs,
 
  
  
} from "../data/tucson";

export default function Tucson() {
  return (
    <>
      <VehicleHeroCard hero={TucsonHero} info={TucsonInfo} ctas={tucsonCTAs} />

      <VariantSelector
        variants={TucsonVariants}
        onChange={(v) => console.log("Chosen Tucson variant:", v)}
      />

      <CarVisualizer name="TUCSON‑COLORS" colors={tucsonColors} />

      <VehicleSpecs
        img="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/technical.jpg"
        heading="TUCSON TECHNICAL SPECS"
        blurb="Spacious, powerful & packed with ADAS and digital tech for a modern SUV experience."
        transmissions={["Petrol", "Diesel"]}
        sections={[
          { title: "ENGINE", rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
