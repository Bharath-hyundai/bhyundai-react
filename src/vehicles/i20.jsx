import CarVisualizer      from "../components/CarVisualizer";
import VariantSelector    from "../components/VariantSelector";
import VehicleHeroCard    from "../components/VehiclePage";
import VehicleSpecs       from "../components/VehicleSpecs";
import { dimensionsRows, engineRows } from "../data/exter";

import { i20Colors, i20CTAs, i20Hero, i20Info, i20Variants } from "../data/i20";



/* ───────── PAGE COMPONENT ───────── */
export default function I20() {
  return (
    <>
      {/* hero banner + price snippet + CTA buttons */}
      <VehicleHeroCard hero={i20Hero} info={i20Info} ctas={i20CTAs} />

      {/* variant price / spec picker */}
      <VariantSelector
        variants={i20Variants}
        onChange={(v) => console.log("Chosen i20 variant:", v)}
      />

      {/* colour switcher carousel */}
      <CarVisualizer name="i20‑COLORS" colors={i20Colors} />

      {/* technical‑spec tabs (engine, dimensions, …) */}
      <VehicleSpecs
        img="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/i20-tech.jpg"
        heading="i20 TECHNICAL SPECS"
        blurb="Smart Kappa & Turbo GDi engines with IVT and DCT options."
        transmissions={["MT", "IVT", "TURBO"]}
        sections={[
          { title: "ENGINE",     rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
