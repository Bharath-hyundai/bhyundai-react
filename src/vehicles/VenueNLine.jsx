import CarVisualizer from "../components/CarVisualizer";
import VariantSelector from "../components/VariantSelector";
import VehicleHeroCard from "../components/VehiclePage";
import VehicleSpecs from "../components/VehicleSpecs";
import { dimensionsRows, engineRows } from "../data/exter";
import { venueNLineColors, venueNLineCTAs, VenueNLineHero, VenueNLineInfo, VenueNLineVariants } from "../data/VenueNLine";

export default function VenueNLine() {
  return (
    <>
      <VehicleHeroCard hero={VenueNLineHero} info={VenueNLineInfo} ctas={venueNLineCTAs} />
      <VariantSelector variants={VenueNLineVariants} onChange={v => console.log("Chosen Venue N Line:", v)} />
      <CarVisualizer name="VENUE-NLINE-COLORS" colors={venueNLineColors} />
      <VehicleSpecs
        img="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/technical.jpg"
        heading="VENUE N LINE TECHNICAL SPECS"
        blurb="Turbocharged fun with N‑Line aesthetic, improved brakes and ride quality."
        transmissions={["MT", "DCT"]}
        sections={[
          { title: "ENGINE", rows: engineRows },
          { title: "DIMENSIONS", rows: dimensionsRows },
        ]}
      />
    </>
  );
}
