
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../Navbar";
import { Footer } from "../../home";

const teamMembers = [
  {
    name: "Adison Ray",
    role: "Auction Coordinator",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    name: "Arthur Roy",
    role: "Sales Representative",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    name: "Regina George",
    role: "Bid Spotter",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    name: "William State",
    role: "Marketing Specialist",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
  },
];

const partners = [
  "/logos/cartal.svg",
  "/logos/design-studio.svg",
  "/logos/cooperate.svg",
  "/logos/minimal.svg",
  "/logos/minim.svg",
  "/logos/sunshi.svg",
];

const testimonials = [
  {
    quote:
      "One of the standout features of AutoBid is its user‑friendly interface. Navigating through the website is a breeze, with intuitive menus and a well‑organized layout. The search filters are robust, allowing users to narrow down their choices based on make, model, year, and other relevant criteria.",
    name: "George Orwell",
    location: "Arizona, AZ",
    img: "/images/testimonials/george.jpg",
    title: "A Seamless Car Buying Experience",
  },
];

function AboutUs() {
  return (
    <>
    <Navbar/>
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-[url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?_gl=1*i4m395*_ga*NDczMzUyNjQ5LjE3NDk4ODY1MDI.*_ga_8JE65Q40S6*czE3NDk4ODY1MDEkbzEkZzEkdDE3NDk4ODY1MTAkajUxJGwwJGgw')]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-4 mx-auto text-center">
          <h1 className="mb-3 text-4xl font-extrabold text-white md:text-6xl">
            About Us at AutoBid
          </h1>
          <p className="text-lg text-white md:text-xl">
            Discover, Bid, and Win — Your Gateway to Exceptional Auction
            Experiences!
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-20 bg-white">
        <div className="grid max-w-6xl gap-12 mx-auto lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Mission in the Company</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Welcome to AutoBid, where passion meets possibility in every bid.
              Explore a world of curated auctions, where treasures await,
              discovery and bidding is an art form.
            </p>
            <p className="mb-10 leading-relaxed text-gray-600">
              Uncover rare finds, embrace the excitement of competitive bidding,
              and redefine your shopping experience.
            </p>
            <div className="flex items-baseline gap-4">
              <span className="font-extrabold text-red-600 text-7xl">24</span>
              <p className="max-w-sm font-medium">
                Years on the Market — curated collections, spirited bidding,
                and excitement.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg h-96">
            <img
              src="https://t3.ftcdn.net/jpg/04/98/81/32/360_F_498813253_1F67TUXp7RKXETW6ZdavRa3dzwsGNgEd.jpg"
              alt="Our team"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">
            The Team Behind the Business
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="transition bg-white shadow rounded-xl hover:shadow-lg">
                <div className="w-full h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-red-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-4 py-16 bg-white">
        <div className="flex flex-wrap items-center justify-center max-w-5xl gap-10 mx-auto">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Partner Logo"
              className="h-auto transition grayscale opacity-70 hover:opacity-100 w-28"
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 bg-gray-100">
        <div className="grid items-center max-w-6xl gap-12 mx-auto lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="mb-2 tracking-wide text-red-600 uppercase">Find out now</h3>
            <h2 className="mb-6 text-3xl font-bold">
              User Testimonials: What Our Customers Are Saying
            </h2>
            <button className="px-6 py-3 transition border border-black rounded hover:bg-black hover:text-white">
              Our Services
            </button>
          </div>

          <div className="lg:col-span-3">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 7000 }}
              navigation
              pagination={{ clickable: true }}
              loop
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <div className="p-10 text-center bg-white shadow-lg rounded-xl">
                    <h4 className="mb-4 text-xl font-semibold">{t.title}</h4>
                    <p className="mb-6 italic leading-relaxed text-gray-600">
                      “{t.quote}”
                    </p>
                    <div className="flex flex-col items-center">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="object-cover mb-3 rounded-full w-14 h-14"
                      />
                      <p className="font-medium">{t.name}</p>
                      <span className="text-sm text-gray-500">{t.location}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
    <Footer/></>
  );
}

export default AboutUs;
