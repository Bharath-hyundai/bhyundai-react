import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import { GrandI10NiosHero,
  GrandI10NiosInfo,
  GrandI10NiosVariants,
  grandI10NiosColors,grandI10NiosCTAs } from "../data/Grandi10nios";

export default function GrandI10Nios() {
  return (
    <>
      <VehicleHeroCard
        hero={GrandI10NiosHero}
        info={GrandI10NiosInfo}
        ctas={grandI10NiosCTAs}
      />

      <VariantSelector
        variants={GrandI10NiosVariants}
        onChange={(v) => console.log("Chosen Grand i10 Nios variant:", v)}
      />

      <CarVisualizer name="NIOS‑COLORS" colors={grandI10NiosColors} />

      <VehicleSpecs
        img="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Grand-i10-Nios/technical.jpg"
        heading="GRAND i10 NIOS TECHNICAL SPECS"
        blurb="Reliable Kappa engine, spacious design, and smart hatchback tech."
        transmissions={["MT", "AMT"]}
        sections={[
          {
            title: "ENGINE",
            rows: {
              MT: [
                { label: "Engine", value: "1.2 L Kappa" },
                { label: "Transmission", value: "5‑Speed MT" },
                { label: "Mileage (ARAI)", value: "18 kmpl" },
              ],
              AMT: [
                { label: "Engine", value: "1.2 L Kappa" },
                { label: "Transmission", value: "AMT" },
                { label: "Mileage (ARAI)", value: "18 kmpl" },
              ],
            },
          },
          {
            title: "DIMENSIONS",
            rows: {
              ALL: [
                { label: "Length", value: "3,815 mm" },
                { label: "Width", value: "1,680 mm" },
                { label: "Height", value: "1,520 mm" },
                { label: "Wheelbase", value: "2,450 mm" },
                { label: "Boot Space", value: "260 L" },
                { label: "Fuel Tank", value: "37 L" },
              ],
            },
          },
        ]}
      />
    </>
  );
}
