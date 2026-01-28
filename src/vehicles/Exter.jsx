import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import { dimensionsRows, engineRows, exterColors, exterCTAs, ExterHero, ExterInfo, ExterVariants } from "../data/exter";

export default function Exter() {
  return (
    <>
      <VehicleHeroCard hero={ExterHero} info={ExterInfo} ctas={exterCTAs} />

      <VariantSelector
        variants={ExterVariants}
        onChange={(v) => console.log("Chosen Exter variant:", v)}
      />

      <CarVisualizer name="EXTER‑COLORS" colors={exterColors} />

      <VehicleSpecs
        img="https://www.hyundai.com/content/dam/hyundai/.../exter-tech.jpg"
        heading="EXTER TECHNICAL SPECS"
        blurb="Built for adventure with efficient Kappa engines and advanced safety."
        transmissions={["MANUAL", "AMT", "CNG"]}
        sections={[
          { title: "ENGINE", rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
