import CarVisualizer from '../components/CarVisualizer';
import VariantSelector from '../components/VariantSelector';
import VehicleHeroCard from '../components/VehiclePage';
import VehicleSpecs from '../components/VehicleSpecs';

export default function Venue() {
  /* ───────── VENUE VARIANTS ───────── */
  const VenueVariants = [
    {
      id: 'venue-e',
      name: 'VENUE 1.2 MT E',
      specs: [
        { label: 'Ex‑Showroom Price', value: '₹ 7.94 Lakh' }, // :contentReference[oaicite:0]{index=0}
        { label: 'On‑Road Price', value: '₹ 9.20 Lakh' }, // ≈ Delhi
        { label: 'Fuel Type', value: 'Petrol' },
        { label: 'Engine', value: '1197 cc' },
        { label: 'BHP', value: '82 bhp @ 6000 rpm' },
        { label: 'Transmission', value: 'Manual' },
      ],
    },
    {
      id: 'venue-s',
      name: 'VENUE 1.2 MT S',
      specs: [
        { label: 'Ex‑Showroom Price', value: '₹ 8.71 Lakh' }, // :contentReference[oaicite:1]{index=1}
        { label: 'On‑Road Price', value: '₹ 10.05 Lakh' },
        { label: 'Fuel Type', value: 'Petrol' },
        { label: 'Engine', value: '1197 cc' },
        { label: 'BHP', value: '82 bhp @ 6000 rpm' },
        { label: 'Transmission', value: 'Manual' },
      ],
    },
    {
      id: 'venue-s-turbo',
      name: 'VENUE 1.0 Turbo iMT S(O)',
      specs: [
        { label: 'Ex‑Showroom Price', value: '₹ 10.75 Lakh' }, // :contentReference[oaicite:2]{index=2}
        { label: 'On‑Road Price', value: '₹ 12.50 Lakh' },
        { label: 'Fuel Type', value: 'Petrol' },
        { label: 'Engine', value: '998 cc' },
        { label: 'BHP', value: '118 bhp @ 6000 rpm' },
        { label: 'Transmission', value: 'iMT (6‑spd)' },
      ],
    },
    {
      id: 'venue-sx',
      name: 'VENUE 1.2 MT SX',
      specs: [
        { label: 'Ex‑Showroom Price', value: '₹ 11.49 Lakh' },
        { label: 'On‑Road Price', value: '₹ 13.20 Lakh' },
        { label: 'Fuel Type', value: 'Petrol' },
        { label: 'Engine', value: '1197 cc' },
        { label: 'BHP', value: '82 bhp @ 6000 rpm' },
        { label: 'Transmission', value: 'Manual' },
      ],
    },
    {
      id: 'venue-sxo',
      name: 'VENUE 1.0 Turbo DCT SX(O)',
      specs: [
        { label: 'Ex‑Showroom Price', value: '₹ 13.47 Lakh' }, // :contentReference[oaicite:3]{index=3}
        { label: 'On‑Road Price', value: '₹ 15.70 Lakh' },
        { label: 'Fuel Type', value: 'Petrol' },
        { label: 'Engine', value: '998 cc' },
        { label: 'BHP', value: '118 bhp @ 6000 rpm' },
        { label: 'Transmission', value: 'DCT (7‑spd)' },
      ],
    },
  ];



  /* ───────── COLOUR PALETTE FOR CAR VISUALISER ───────── */
  const venueColors = [
    {
      name: 'Typhoon Silver',
      hex1: '#c0c0c0',
      images: '/images/venue_typhoon_silver.png',
    },
    {
      name: 'Intense Blue',
      hex1: '#003366',
      images: '/images/venue_intense_blue.png',
    },
    {
      name: 'Ultimate Red',
      hex1: '#c00016',
      images: '/images/venue_ultimate_red.png',
    },
    {
      name: 'Onyx Black',
      hex1: '#000000',
      images: '/images/venue_onyx_black.png',
    },
    {
      name: 'Shimmering Silver',
      hex1: '#d4d4d4',
      images: '/images/venue_shimmering_silver.png',
    },
    {
      name: 'Lunar White',
      hex1: '#ffffff',
      images: '/images/venue_lunar_white.png',
    },
    {
      name: 'Mirage Green',
      hex1: '#4e6954',
      images: '/images/venue_mirage_green.png',
    },
    {
      name: 'Lunar White / Black Roof',
      hex1: '#ffffff',
      hex2: '#000000',
      images: '/images/venue_dual_white_black.png',
    },
  ]; // colour list from :contentReference[oaicite:7]{index=7}

  /* ───────── TECH‑SPEC TABLES (sample) ───────── */
  const engineRows = {
    MANUAL: [
      { label: 'Engine', value: '1.2 L Kappa' },
      { label: 'Transmission', value: '5‑Speed MT' },
      { label: 'Fuel Efficiency', value: '17.5 km/l (ARAI)' },
    ],
    AUTOMATIC: [
      { label: 'Engine', value: '1.0 L Turbo GDi' },
      { label: 'Transmission', value: '7‑Speed DCT' },
      { label: 'Fuel Efficiency', value: '18.3 km/l (ARAI)' },
    ],
  };

  const dimensionsRows = {
    ALL: [
      { label: 'Length', value: '3,995 mm' },
      { label: 'Width', value: '1,770 mm' },
      { label: 'Height', value: '1,617 mm' },
      { label: 'Wheelbase', value: '2,500 mm' },
      { label: 'Boot Space', value: '350 L' },
      { label: 'Fuel Tank', value: '45 L' },
    ],
  };

 

  return (
    <>
      {/* <VehicleHeroCard hero={VenueHero} info={VenueInfo} ctas={venueCTAs} /> */}
      <VehicleHeroCard
        hero={{
          img: 'https://www.hyundai.com/content/dam/hyundai/au/en/models/venue/2023/pip-hero/Hyundai_Venue_Exterior_Hero_1920x720.png', // :contentReference[oaicite:4]{index=4}
          tags: [
            {
              title: '6 Airbags Standard',
              text: 'Safety across every variant',
            }, // :contentReference[oaicite:5]{index=5}
            { title: 'Bluelink® connected', text: '60+ smart features' }, // :contentReference[oaicite:6]{index=6}
            { title: 'Voice‑enabled Sunroof*', text: 'Open sky at a command' },
          ],
        }}
        info={{
          breadcrumbs: ['Home', 'SUVs', 'Venue'],
          name: 'Hyundai VENUE',
          price: '₹ 7.94 Lakh*',
          showroom: '₹ 7.94 Lakh* (ex‑showroom Delhi)',
          specs: [
            { label: 'Engine', value: '1.2 L NA & 1.0 L Turbo' },
            { label: 'Airbags', value: '6' },
            { label: 'Boot Space', value: '350 L' },
          ],
        }}
        ctas={{
          primary: {
            label: 'Book a Service',
            onClick: () => alert('Book Service'),
          },
          secondary: [
            {
              label: 'Book Test Drive',
              color: 'bg-indigo-900 hover:bg-indigo-800',
            },
            { label: 'Get a Quote', color: 'bg-red-700 hover:bg-red-600' },
          ],
        }}
      />
      <VariantSelector
        variants={VenueVariants}
        onChange={(v) => console.log(v)}
      />
      <CarVisualizer name='VENUE‑COLORS' colors={venueColors} />
      <VehicleSpecs
        img='https://www.hyundai.com/content/dam/hyundai/.../venue-tech.jpg'
        heading='VENUE TECHNICAL SPECS'
        blurb='Combining efficient Kappa & Turbo GDi engines with advanced safety...'
        transmissions={['MANUAL', 'AUTOMATIC']}
        sections={[
          { title: 'ENGINE', rows: engineRows },
          { title: 'DIMENSIONS', rows: dimensionsRows },
        ]}
      />
    </>
  );
}
