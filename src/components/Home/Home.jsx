// src/pages/Home.jsx
import React, { useRef, useState } from 'react'
import homeVideo from "../../assets/BILTON_BANNER.mp4";
import homeVideo2 from "../../assets/BILTON_BANNER2.mp4";
import { FiSearch } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa6';
import demo from "../../assets/bannerbg.png"
import bgshade from "../../assets/bgshade.png"
import calender from "../../assets/calender.jpeg"
import { IoIosStar } from "react-icons/io";
import { TbHome2 } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
import curveline from "../../assets/curv.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image29 from "../../assets/image29.JPG";
import image30 from "../../assets/image30.JPG";
import image31 from "../../assets/image31.JPG";
import { useNavigate } from 'react-router-dom';

// enable modules for older SwiperCore usage (optional)
SwiperCore.use([Autoplay]);

// === Category data for the added section ===
const categories = [
  {
    id: "standard",
    label: "Standard",
    name: "Standard",
    images: [
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758006514/0_82_tu1q8l.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758008965/0_90_my2rjq.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758008998/0_94_nbosvd.jpg"
    ],
    visitors: 320,
    room: "1 extra-large double bed",
    price: 199,
    shortDesc: "Cozy room with essential comforts.",
    path: "/roomDetail"
  },
  {
    id: "deluxe",
    label: "Deluxe",
    name: "Deluxe",
    images: [
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758010268/0_105_czv71w.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758012976/0_121_xcueky.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758013012/0_126_cdkolu.jpg"
    ],
    visitors: 420,
    room: "1 extra-large double bed + balcony",
    price: 249,
    shortDesc: "Spacious room with city views.",
    path: "/roomDetail"
  },
  {
    id: "executive",
    label: "Executive",
    name: "Executive",
    images: [
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758013106/0_43_rwf1le.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758013129/0_53_b6js0j.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758013074/0_39_tmk2qq.jpg"
    ],
    visitors: 220,
    room: "1 king-size bed",
    price: 299,
    shortDesc: "Premium amenities for business travelers.",
    path: "/roomDetail"
  },
  {
    id: "executive-triple",
    label: "Executive Triple",
    name: "Executive Triple",
    images: [
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758013166/0_133_h52ay2.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758013484/0_135_hvxraf.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758013566/0_140_lhj4rc.jpg"
    ],
    visitors: 150,
    room: "3 single beds",
    price: 349,
    shortDesc: "Extra space for groups and families.",
    path: "/roomDetail"
  },
  {
    id: "studio",
    label: "Studio",
    name: "Studio",
    images: [
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758014182/0_2_maxnqe.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758014285/0_15_blabbj.jpg",
      "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758014339/0_23_hhr8el.jpg"
    ],
    visitors: 180,
    room: "Studio layout with kitchenette",
    price: 329,
    shortDesc: "Open-plan room with kitchenette.",
    path: "/roomDetail"
  }
];

const Home = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  // Parallax effect for the video
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Parallax effect for the text
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Fade in animation when section comes into view
  const [textRef, textInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Navigate to room details route with id param and pass state
  const goToCategory = (cat) => {
    if (!cat) return;
    // navigate to /roomDetail/:id and pass the full category as state
    navigate(`${cat.path}/${cat.id}`, { state: cat });
  };

  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <section
        ref={sectionRef}
        className="homeBannerBg lg:mb-20 flex flex-col mb-10 md:mb-0 items-center h-screen w-full relative overflow-hidden"
      >
        <div className="pt-[140px] px-2 z-10">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ y: textY }}
            className="text-5xl lg:text-6xl font-bold text-center mb-5 boldText text-[#06362E] overflow-hidden"
          >
            {/* you can add banner text here */}
          </motion.div>
        </div>

        {/* Background Video */}
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            src={homeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="mb-0 md:mb-10 w-full">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="md:flex md:justify-between md:items-center w-full md:gap-10">
            {/* Left */}
            <div className="md:w-[70%]">
              {/* Slider - REPLACED with Swiper auto slider */}
              <div className="mb-7">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                  }}
                  className="w-full"
                >
                  <SwiperSlide>
                    <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden mx-auto">
                      <img src={image29} alt="Gallery" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden mx-auto">
                      <img src={image30} alt="Gallery" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden mx-auto">
                      <img src={image31} alt="Gallery" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden mx-auto">
                      <img src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564115/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_smieew.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden mx-auto">
                      <img src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564112/WhatsApp_Image_2025-09-11_at_9.31.51_AM_zbtrhi.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden mx-auto">
                      <img src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564111/WhatsApp_Image_2025-09-11_at_9.31.50_AM_1_ycdoe2.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden mx-auto">
                      <img src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Content */}
              <div className="boldText text-5xl font-bold px-2 md:px-0 mb-2 md:mb-0">
                Your Perfect Stay Awaits
                <span className="block"></span>
              </div>
            </div>

            {/* Right */}
            <div className="md:w-[30%] px-2 md:px-0">
              <div className="mb-10">
                Bilton Hotel offers clean and comfortable rooms designed for a relaxing stay. Guests can enjoy delicious dining options with a variety of cuisines prepared fresh daily. The hotel provides excellent hospitality with friendly staff to assist at any time. With well-maintained interiors and quality service, Bilton Hotel ensures a pleasant and memorable experience for every guest.
              </div>

              <div className="flex items-center gap-5 mb-10">
                <ul className="flex items-center justify-between w-full relative">
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] overflow-hidden">
                    <img src="https://avatars.mds.yandex.net/i?id=a8a454253a840152c92884be6e94c17c_l-6235668-images-thumbs&n=13" alt="" className="w-full h-full object-cover" />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[40px] overflow-hidden">
                    <img src="https://avatars.mds.yandex.net/i?id=c160aee9623b7a101f30791adb6a8f23af4f92dc-10766712-images-thumbs&ref=rim&n=33&w=250&h=250" alt="" className="object-cover w-full h-full" />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[80px] overflow-hidden">
                    <img src="https://avatars.mds.yandex.net/i?id=31d260c202753873d3a6094c57a15fee409561ea-12420722-images-thumbs&n=13" alt="" className="w-full h-full object-cover" />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[120px] overflow-hidden">
                    <img src="https://avatars.mds.yandex.net/i?id=d9d247ce069038740ecaf920ffdd982ac10b1b42-10346227-images-thumbs&ref=rim&n=33&w=250&h=250" alt="" className="w-full h-full object-cover" />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[160px] overflow-hidden">
                    <img src="https://avatars.mds.yandex.net/i?id=397cadf3f411b37814741ca1a78c89d5e190dc51-5222125-images-thumbs&n=13" alt="" className="w-full h-full object-cover" />
                  </li>
                </ul>

                <div className="font-medium leading-tight">
                  100k + happy guests
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-1 py-2 px-4 rounded-full border border-[#00000022]">
                  4.9 <IoIosStar />
                </div>
                <button className="py-2 px-4 rounded-full border border-[#0002] font-semibold">
                  Book Your Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Explore By Category (ADDED) ===== */}
      <section className="lg:mb-10 bg-[#ffe7b0] py-10 w-full relative">
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src={demo} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="max-w-[1400px] mx-auto pt-16 md:pt-0 md:py-16 rounded-3xl px-2 lg:px-20 w-full relative z-20">
          <div className="text-center mb-6 font-bold boldText text-5xl md:text-5xl text-[#06362E]">
            Explore By Category
          </div>

          {/* Category pills */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className={`font-medium px-4 py-1.5 rounded-3xl transition ${
                  selectedCategory.id === cat.id ? "bg-[#06362E] text-[#E2C686]" : "bg-[#ffecbe] text-[#06362E]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* preview */}
          <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div
              className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => goToCategory(selectedCategory)}
            >
              <img src={selectedCategory.images?.[0] || selectedCategory.img || ''} alt={selectedCategory.label} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col justify-between p-6 rounded-3xl bg-[#06362E] text-[#fff]">
              <div>
                <div className="text-3xl font-bold mb-3">{selectedCategory.label}</div>
                <div className="text-sm text-[#fff3d7] mb-6">
                  Explore our {selectedCategory.label.toLowerCase()} — carefully curated for comfort and style. Click to view {selectedCategory.label.toLowerCase()} options and details.
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button onClick={() => goToCategory(selectedCategory)} className="px-6 py-3 rounded-full bg-[#E2C686] text-[#06362E] font-semibold">
                  View {selectedCategory.label}
                </button>
                <div className="text-sm opacity-80">Or click the image to open</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== End Explore By Category ===== */}

      {/* rest of your sections unchanged... */}
      <section className="mb-10 lg:mb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="md:flex justify-center gap-10 w-full px-2 lg:px-10">
            {/* Left */}
            <div className="md:w-[40%] h-full">
              <div className="text-5xl lg:text-5xl font-bold boldText mb-5 md:mb-10 text-[#06362E]">
                Home-Like Comfort <span className="block">Hotel-Style Elegance</span>
                <span className="block"></span>
              </div>
              <div className="mb-5 md:mb-10 text-[#06362E]">
                Bilton Hotel offers comfort, care, and warm hospitality. A place where every stay feels just like home.
              </div>
              <div className="relative flex items-center mb-5 md:mb-10">
                <input type="text" placeholder="Find Inspiring Places" readOnly className="border-[#06362E] border-[2px] rounded-full outline-none py-3 w-full px-5 " />
                <span className="text-2xl absolute right-5 p-2 rounded-full bg-[#06362E] text-[#E2C686]"><FiSearch /></span>
              </div>
            </div>

            {/* Right */}
            <div className="md:w-[60%] h-full">
              <div className="h-[580px] w-full bg-[#000] relative rounded-3xl overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <video src={homeVideo2} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-[#00000030]"></div>
                <div className="flex px-10 absolute bottom-10">
                  <div className="px-6 flex gap-2 items-center text-sm relative py-2 rounded-full bg-[#E2C686] text-[#06362E] font-bold boldText">
                    Show Top-Rated Villas <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ...remaining content unchanged (promo grid, explore, etc.) */}
      <section className="mb-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
            {/* Left Column */}
            <div className="lg:col-span-4 col-span-1 flex flex-col gap-2">
              {/* Top left large box */}
              <div className="w-full h-[350px] relative rounded-3xl bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")', backgroundSize: "1400px 604px", backgroundPosition: "left top" }}>
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
                  <img src={bgshade} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative py-10 px-5 sm:px-10">
                  <div className="boldText text-4xl sm:text-5xl text-[#fff] font-bold mb-5">
                    Experience Stays<span className="block">That Feel Like Home</span>
                  </div>
                  <div className="text-sm max-w-[400px] text-[#fff]">
                    Bilton Hotel, Bangalore offers comfort, care, and warm hospitality—just like home. Nestled in the heart of the city, it’s the perfect place to relax and refresh while enjoying the vibrant charm of Bangalore. Every stay with us is designed to make you feel at ease, turning the city into your preferred home away from home.
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                {/* Bottom left box */}
                <div className="w-full h-[300px] relative rounded-3xl bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")', backgroundSize: "1400px 604px", backgroundPosition: "left bottom" }}>
                  <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
                    <img src={bgshade} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-[300px] relative p-5 sm:p-10">
                    <img src={calender} alt="calendar" className="w-full h-full object-contain rounded-3xl" />
                  </div>
                </div>

                {/* Bottom center-left box */}
                <div className="w-full h-[300px] relative rounded-3xl bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")', backgroundSize: "1400px 604px", backgroundPosition: "center bottom" }}>
                  <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
                    <img src={bgshade} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="px-5 py-10 flex flex-col gap-2 justify-center items-center h-full relative w-full">
                    <div className="boldText text-xl sm:text-2xl mb-2 text-[#fff]">Plan Your Perfect Stay</div>

                    <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                      <div className="flex items-center gap-2 text-sm">
                        <TbHome2 />
                        <span className="font-semibold">Room</span>
                        <span className="text-[#535353]">Pine Log</span>
                      </div>
                      <span className="text-xl"><RiArrowDropDownLine /></span>
                    </div>

                    <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                      <div className="flex items-center gap-2 text-sm">
                        <BsCalendar3 />
                        <span className="font-semibold">Check-in</span>
                        <span className="text-[#535353]">11 April 2025</span>
                      </div>
                      <span className="text-xl"><RiArrowDropDownLine /></span>
                    </div>

                    <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                      <div className="flex items-center gap-2 text-sm">
                        <BsCalendar3 />
                        <span className="font-semibold">Check-out</span>
                        <span className="text-[#535353]">12 April 2025</span>
                      </div>
                      <span className="text-xl"><RiArrowDropDownLine /></span>
                    </div>

                    <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                      <div className="flex items-center gap-2 text-sm">
                        <HiMiniUsers />
                        <span className="font-semibold">Guests</span>
                        <span className="text-[#535353]">4 Adults</span>
                      </div>
                      <span className="text-xl"><RiArrowDropDownLine /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 col-span-1 flex flex-col gap-2">
              {/* Top right box */}
              <div className="w-full h-[350px] relative rounded-3xl bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")', backgroundSize: "1400px 604px", backgroundPosition: "right top" }}>
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
                  <img src={bgshade} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Bottom right box */}
              <div className="w-full h-[300px] flex justify-center items-center relative rounded-3xl bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")', backgroundSize: "1400px 604px", backgroundPosition: "right bottom" }}>
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
                  <img src={bgshade} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 border-[#fff] border rounded-full relative">
                  <div className="w-[250px] mx-auto h-[250px] bg-[#fff] m-auto rounded-full overflow-hidden">
                    <iframe className="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.4225106618806!2d77.59407017507596!3d12.944793887368057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzQxLjMiTiA3N8KwMzUnNDcuOSJF!5e0!3m2!1sen!2sin!4v1757496582934!5m2!1sen!2sin" loading="lazy"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 px-2">
        <div className="max-w-[1200px] relative mx-auto py-20 bg-[#030303] overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-[#00000042] z-10"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full">
            <img src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="md:flex px-2 justify-center md:justify-between items-center w-full md:px-20">
            <div>
              <div className="text-5xl md:text-6xl boldText relative z-20 md:px-10 font-bold text-[#fff] mb-5">
                Explore <span className="block">Bilton</span>
              </div>
              <div className="relative w-[300px]">
                <img src={curveline} alt="curveline" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="relative z-20 text-lg md:text-2xl font-semibold text-[#fff]">
              Unwind in comfort, enjoy delicious moments, and feel truly at home.
              <span className="block"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
