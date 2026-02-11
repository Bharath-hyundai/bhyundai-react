import { addDoc, collection, Timestamp } from 'firebase/firestore';

import { Link, useNavigate } from 'react-router-dom';
import { db } from './lib/firebase';
import OffersCarousel from './OffersCarousel';

import { ToastContainer } from 'react-toastify';
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CgSpinner } from 'react-icons/cg';
// import Navbar from './components/Navbar';

// import Popup from "./popup";

const InterestForm = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    model: '',
    city: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitted(false);

    let newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile))
      newErrors.mobile = 'Valid 10-digit mobile number is required';
    if (!form.city) newErrors.city = 'Please select a city';
    if (!form.model) newErrors.model = 'Please select a car model';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Please enter a valid email address';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      try {
        /* ===============================
         1️⃣ WEBHOOK CALL
      =============================== */
        // const zohoRes = await fetch(
        //   'https://webhook.site/05022a1e-5d43-46d4-b172-16918fb3c3b2',
        //   {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       Last_Name: form.name || 'Website Lead',
        //       Phone: form.mobile,
        //       Email: form.email,
        //       City: form.city,
        //       Description: `Interested Model: ${form.model}`,
        //       Lead_Source: 'Broaddcast',
        //     }),
        //   },
        // );

        /* ===============================
         2️⃣ FIREBASE BACKUP
      =============================== */
        await addDoc(collection(db, 'leads'), {
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          model: form.model,
          city: form.city,
          source: 'Website',
          timestamp: Timestamp.now(),
        });

        toast.success('Successfully submitted');
        navigate('/thank-you');
      } catch (error) {
        console.error('Submission Error:', error);
        toast.error('Submission failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <ToastContainer position='top-center' autoClose={5000} theme='dark' />
      <nav className='fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-3 shadow-md md:px-12 lg:px-16 bg-white/30 backdrop-blur-lg'>
        <Link to={'/'}>
          <img
            src={require('./images/logo.png')}
            className='h-12'
            alt='Hyundai Logo'
          />
        </Link>
        <h1 className='text-xl font-semibold '>
          Booking for
          <a
            className='pl-4 text-lg font-semibold text-gray-900'
            href='tel:+917733888999'
          >
            📞 7733888999
          </a>
        </h1>
      </nav>

      <img
        src='/images/Website_Hyundai_January_ICC_Cricket_Bharat_Hyundai_Offers.webp'
        alt='Banner'
        className='hidden object-cover w-full mt-12 sm:block'
      />
      <img
        src='/images/WM_Hyundai_January_ICC_Cricket_Bharat_Hyundai_Offers.webp'
        alt='Mobile Banner'
        className='block object-cover w-full mt-10 sm:hidden'
      />

      <div className='w-full bg-white flex justify-center 2xl:top-96 border xl:top-80 lg:absolute lg:left-72 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:p-6 lg:top-96 lg:rounded-2xl lg:shadow-lg lg:w-[90%] lg:max-w-sm lg:max-h-sm'>
        <div className='w-full max-w-sm p-3 bg-white shadow-lg sm:p-8 md:p-2 rounded-2xl lg:max-w-sm lg:max-h-sm '>
          <h3 className='pb-4 text-xl font-bold text-center text-black sm:text-2xl'>
            REGISTER YOUR INTEREST
          </h3>

          {!submitted && (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                className='w-full px-4 py-2 text-sm text-center text-black bg-transparent border-b-2 border-black sm:text-base focus:outline-none'
              />
              {errors.name && (
                <p className='text-xs text-red-500'>{errors.name}</p>
              )}

              <input
                type='text'
                name='mobile'
                placeholder='Mobile Number'
                value={form.mobile}
                disabled={loading}
                onChange={handleChange}
                className='w-full px-4 py-2 text-sm text-center text-black bg-transparent border-b-2 border-black sm:text-base focus:outline-none'
              />
              {errors.mobile && (
                <p className='text-xs text-red-500'>{errors.mobile}</p>
              )}

              <select
                name='city'
                value={form.city}
                disabled={loading}
                onChange={handleChange}
                className='w-full px-4 py-2 text-sm text-center text-black bg-transparent border-b-2 border-black sm:text-base focus:outline-none'
              >
                <option value='' disabled hidden>
                  Select City
                </option>
                <option value='Gachibowli'>Gachibowli(HYD)</option>
                <option value='Nampally'>Nampally(HYD)</option>
                <option value='KHAMMAM'>Khammam</option>
              </select>
              {errors.city && (
                <p className='text-xs text-red-500'>{errors.city}</p>
              )}

              <select
                name='model'
                value={form.model}
                onChange={handleChange}
                disabled={loading}
                className='w-full px-4 py-2 text-sm text-center text-black bg-transparent border-b-2 border-black sm:text-base focus:outline-none'
              >
                <option value=''>Select Model</option>
                <option value='I20'>I20</option>
                <option value='GRAND I10 NIOS'>GRAND I10 NIOS</option>
                <option value='AURA'>AURA</option>
                <option value='VERNA'>VERNA</option>
                <option value='ALCAZAR'>ALCAZAR</option>
                <option value='TUCSON'>TUCSON</option>
                <option value='CRETA N LINE'>CRETA N LINE</option>
                <option value='EXTER'>EXTER</option>
                <option value='VENUE N LINE'>VENUE N LINE</option>
                <option value='CRETA'>CRETA</option>
                <option value='CRETA ELECTRIC'>CRETA ELECTRIC</option>
                <option value='IONIQ 5'>IONIQ 5</option>
              </select>
              {errors.model && (
                <p className='text-xs text-red-500'>{errors.model}</p>
              )}

              <button
                type='submit'
                disabled={loading}
                className='w-full py-3 text-sm font-bold text-white transition duration-200 bg-blue-600 rounded-lg sm:text-base hover:bg-blue-700'
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <CgSpinner className='w-5 h-5 mr-2 text-white animate-spin' />
                    Submitting...
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          )}

          <p className='mt-3 text-xs text-center text-gray-600'>
            *By clicking 'Submit', you agree to our Terms & Conditions.
          </p>
        </div>
      </div>

      <OffersCarousel />
      <CarShowcase />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default InterestForm;

const colors = [
  {
    name: 'White',
    code: '#FFFFFF',
    img: 'https://imgd.aeplcdn.com/600x337/n/g8ajt9b_1804861.jpg?q=80',
  },
  {
    name: 'Black',
    code: '#000000',
    img: 'https://imgd.aeplcdn.com/600x337/n/xacjt9b_1804863.jpg?q=80',
  },
  {
    name: 'Gray',
    code: '#808080',
    img: 'https://imgd.aeplcdn.com/600x337/n/xfq8t9b_1804851.jpg?q=80',
  },
  {
    name: 'Blue',
    code: '#0033CC',
    img: 'https://imgd.aeplcdn.com/600x337/n/08u8t9b_1804857.jpg?q=80',
  },
  {
    name: 'Red',
    code: '#CC0000',
    img: 'https://imgd.aeplcdn.com/600x337/n/28v8t9b_1804859.jpg?q=80',
  },
];

function CarShowcase() {
  const [selectedCar, setSelectedCar] = useState(colors[0]);

  return (
    <section className='bg-white px-6 sm:px-10 py-12 relative max-w-[1400px] mx-auto'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        {/* Text Section */}
        <div className='px-4 text-center lg:w-1/2 lg:text-left'>
          <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
            Hyundai CRETA Electric
          </h2>
          <p className='mt-2 text-lg font-medium text-gray-700'>
            Undisputed. Ultimate. Now electric.
          </p>
          <p className='max-w-lg mx-auto mt-4 text-gray-500 lg:mx-0'>
            The iconic SUV, in its electric avatar, is here to take your driving
            experience to the next level. Building on the undisputed ultimate
            machine, the car seamlessly merges design, performance, technology,
            and style.
          </p>

          {/* Buttons */}
          <div className='flex flex-col items-center gap-4 mt-6 sm:flex-row lg:items-start'>
            <button className='px-6 py-2 text-blue-500 transition border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white'>
              Brochure
            </button>
            <a href='/' className='flex items-center text-lg text-blue-500'>
              Register your Interest <span className='ml-2'>→</span>
            </a>
          </div>
        </div>

        {/* Car Image Section */}
        <div className='relative flex justify-center mt-10 lg:w-1/2 lg:mt-0'>
          {/* Background Color Block */}
          <div
            className='absolute top-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[420px] rounded-lg -z-10'
            style={{ backgroundColor: selectedCar.code }}
          ></div>

          {/* Car Image */}
          <img
            src={selectedCar.img}
            alt={`CRETA Electric - ${selectedCar.name}`}
            className='w-[85%] sm:w-[65%] lg:w-[90%] max-w-xs sm:max-w-md lg:max-w-lg relative z-10'
          />
        </div>
      </div>

      {/* Color Selection Dots */}
      <div className='flex justify-center mt-6 space-x-3 lg:justify-end lg:pl-4'>
        {colors.map((car) => (
          <button
            key={car.name}
            className={`w-6 h-6 rounded-full border-2 transition-transform duration-200 focus:ring focus:ring-gray-300 ${
              selectedCar.name === car.name
                ? 'border-black scale-110 ring-2 ring-black'
                : 'border-gray-400'
            }`}
            style={{ backgroundColor: car.code }}
            onClick={() => setSelectedCar(car)}
            aria-label={`Select ${car.name} color`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export const Footer = () => {
  return (
    <footer className='py-10 text-white bg-gray-900 '>
      <div className='grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-4'>
        {/* Logo & Address */}
        <div>
          <h2 className='text-xl font-bold'>Bharat Hyundai</h2>
          <p className='flex items-start gap-2 mt-2'>
            <Home className='w-5 h-5 mt-1' />
            <span>
              #3,4,5,6 Survey No 58/1, Gowliddodi, Gopanpally, Financial
              District, Gachibowli-500075
            </span>
          </p>
        </div>

        {/* Cars List */}
        <div>
          <h3 className='mb-3 text-lg font-semibold'>Cars</h3>
          <ul className='space-y-2'>
            {[
              'Hyundai Creta',
              'Hyundai Creta EV',
              'Hyundai i20',
              'Hyundai Verna',
              'Hyundai Venue',
            ].map((car, index) => (
              <li key={index} className='pb-1 border-b hover:text-teal-400'>
                {car}
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className='mb-3 text-lg font-semibold'>About Us</h3>
          <ul className='space-y-2'>
            {[
              { label: 'Privacy Policy', href: '/PrivacyPolicy' },
              { label: 'Gallery', href: '/' },
              { label: 'Testimonials', href: '/' },
              { label: 'Contact Us', href: '/' },
              { label: 'Career', href: '/' },
            ].map((item, index) => (
              <li key={index} className='pb-1 border-b hover:text-teal-400'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div className='space-y-8'>
          <h3 className='mb-3 text-lg font-semibold'>Follow Us</h3>
          <div className='flex gap-4 mb-3'>
            <a
              href='https://www.facebook.com/BharatHyundaiTelangana'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <Facebook className='w-6 h-6 cursor-pointer hover:text-gray-400' />
            </a>
            <a href='/' aria-label='Twitter'>
              <Twitter className='w-6 h-6 cursor-pointer hover:text-gray-400' />
            </a>
            <a
              href='https://www.linkedin.com/company/86301981/admin/dashboard/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Linkedin className='w-6 h-6 cursor-pointer hover:text-gray-400' />
            </a>
            <a
              href='https://www.instagram.com/bharathyundai.telangana/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <Instagram className='w-6 h-6 cursor-pointer hover:text-gray-400' />
            </a>
          </div>
          <p className='flex items-center gap-2'>
            <Phone className='w-5 h-5' />
            <a href='tel:+917733888999'>7733888999</a>
          </p>
          <p className='flex items-center gap-2 mt-2'>
            <Mail className='w-5 h-5' />
            <a
              className='hover:text-gray-400'
              href='mailto:info@bharathyundai.in'
            >
              info@bharathyundai.in
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='pt-4 mt-6 text-sm text-center border-t border-gray-700'>
        <p>
          <a href='/' className='hover:text-gray-400'>
            Terms & Conditions
          </a>{' '}
          |{' '}
          <a href='/PrivacyPolicy' className='hover:text-gray-400'>
            Privacy Policy
          </a>
        </p>
        <p className='mt-2'>
          © 2025 All Rights Reserved by Bharat Hyundai Motors.
        </p>
        <p className='mt-1 text-gray-500'>
          Powered by
          <a
            href='https://broaddcast.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='ml-4 hover:text-red-500'>
              BroaddCast Business Solutions LLP.
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

const features = [
  {
    image: '/images/creta-electric-front-1.avif',
    title: 'Driving range up to 473 km (ARAI)',
    description:
      'Go farther with confidence. The CRETA Electric delivers an impressive driving range of up to 473 km on a single full charge, making long journeys smooth and worry-free.',
  },
  {
    image: '/images/cretaevsmall01.jpg',
    title: 'Pixelated EV front grille with charging port',
    description:
      'A bold new EV identity with pixelated graphics on the front grille, seamlessly integrating the charging port for a futuristic and premium look.',
  },
  {
    image: '/images/cretaevsmall5.avif',
    title: 'Active Air Flaps (AAF)',
    description:
      'Active Air Flaps intelligently manage airflow to improve cooling efficiency and aerodynamics, enhancing overall driving range and performance.',
  },
  {
    image: '/images/cretaevsmall4.avif',
    title: 'Pixelated rear bumper & connected LED tail lamps',
    description:
      'The rear design mirrors the futuristic front with pixelated elements and connected LED tail lamps, giving the CRETA Electric a distinct EV signature.',
  },
  {
    image: '/images/cretaevsmall4.avif',
    title: 'R17 Aero Alloy Wheels with LRR tyres',
    description:
      'Specially designed 17-inch Aero Alloy wheels with Low Rolling Resistance tyres reduce drag and improve efficiency without compromising style.',
  },
  {
    image: '/images/cretaevsmall2.avif',
    title: 'Fast charging & smart home charging',
    description:
      'Charge from 10% to 80% in just 58 minutes using DC fast charging. The 11 kW wall box charger at home can achieve the same in approximately 4 hours.',
  },
];

function FeaturesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className='px-5 py-10 bg-gray-100 md:px-20'>
      <h2 className='mb-6 font-serif text-2xl font-bold text-center text-black'>
        Features
      </h2>
      <div className='relative max-w-6xl mx-auto'>
        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className='absolute left-0 z-10 p-3 transition -translate-y-1/2 bg-gray-200 rounded-full shadow-md top-1/2 hover:bg-gray-300'
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className='absolute right-0 z-10 p-3 transition -translate-y-1/2 bg-gray-200 rounded-full shadow-md top-1/2 hover:bg-gray-300'
        >
          <ChevronRight size={24} />
        </button>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={setSwiperInstance} // Store swiper instance
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className='overflow-hidden bg-white rounded-lg shadow-md'>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className='object-cover w-full h-48'
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-black'>
                    {feature.title}
                  </h3>
                  <p className='mt-2 text-gray-600'>{feature.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
