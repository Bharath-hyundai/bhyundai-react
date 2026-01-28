import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import { cretaEVColors, cretaEVCTAs, CretaEVdimensionsRows, CretaEVengineRows, CretaEVHero, CretaEVInfo, CretaEVVariants } from "../data/CretaEV";



export default function CretaEV() {
  return (
    <>
      <VehicleHeroCard hero={CretaEVHero} info={CretaEVInfo} ctas={cretaEVCTAs} />

      <VariantSelector
        variants={CretaEVVariants}
        onChange={(v) => console.log("Chosen Creta EV variant:", v)}
      />

      <CarVisualizer name="CRETA‑EV‑COLORS" colors={cretaEVColors} />

      <VehicleSpecs
        img="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta-Electric/technical.jpg"
        heading="CRETA EV TECHNICAL SPECS"
        blurb="Electric step‑up from ICE Creta: smart, safe, and spacious."
        transmissions={["EV"]}
        sections={[
          { title: "POWERTRAIN", rows: CretaEVengineRows },
          { title: "DIMENSIONS", rows: CretaEVdimensionsRows },
        ]}
      />
    </>
  );
}
