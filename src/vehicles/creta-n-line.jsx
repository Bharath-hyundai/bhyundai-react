import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import { dimensionsRows } from "../data/exter"; // Or change to ../data/cretaNLine if that's where it's defined

import {
  CretaNLineHero,
  CretaNLineInfo,
  CretaNLineVariants,
  cretaNLineColors,
  engineRows,
  cretaNLineCTAs,
} from "../data/creta-n-line";

export default function CretaNLine() {
  return (
    <>
      <VehicleHeroCard
        hero={CretaNLineHero}
        info={CretaNLineInfo}
        ctas={cretaNLineCTAs}
      />

      <VariantSelector
        variants={CretaNLineVariants}
        onChange={(v) => console.log("Chosen Creta N Line variant:", v)}
      />

      <CarVisualizer name="CRETA‑NLINE‑COLORS" colors={cretaNLineColors} />

      <VehicleSpecs
        img="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/technical.jpg"
        heading="CRETA N LINE TECHNICAL SPECS"
        blurb="Turbocharged driving thrill meets race‑inspired styling and Hyundai’s safety tech."
        transmissions={["MT", "DCT"]}
        sections={[
          { title: "ENGINE", rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
