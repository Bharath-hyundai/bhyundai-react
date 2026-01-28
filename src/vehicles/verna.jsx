import CarVisualizer from '../components/CarVisualizer';
import VariantSelector from '../components/VariantSelector';
import VehicleHeroCard from '../components/VehiclePage';
import VehicleSpecs from '../components/VehicleSpecs';
import {
  vernaCTAs,
  VernaHero,
  VernaInfo,
  VernaVariants,
  vernaColors,
  engineRows,
  dimensionsRows,
} from '../data/verna';

export default function Verna() {
  return (
    <>
      <VehicleHeroCard hero={VernaHero} info={VernaInfo} ctas={vernaCTAs} />

      <VariantSelector
        variants={VernaVariants}
        onChange={(v) => console.log('Chosen Verna variant:', v)}
      />

      <CarVisualizer name='VERNA‑COLORS' colors={vernaColors} />

      <VehicleSpecs
        img='https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Verna/9744/1694603528467/technical.jpg'
        heading='VERNA TECHNICAL SPECS'
        blurb='Advanced Smartstream engines, ADAS Level‑2 safety and class‑leading features.'
        transmissions={['MT', 'IVT', 'DCT']}
        sections={[
          { title: 'ENGINE', rows: engineRows },
          { title: 'DIMENSIONS', rows: dimensionsRows },
        ]}
      />
    </>
  );
}
