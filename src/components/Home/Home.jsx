import React, {useRef} from 'react'
import homeBanner from "../../assets/homeBanner.png"
import { FiSearch } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
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
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


SwiperCore.use([Autoplay]);


const Home = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for the image (zooms in as you scroll)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Parallax effect for the text (moves up as you scroll)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Fade in animation when section comes into view
  const [textRef, textInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const roomsData = [
      {name : "Master Bed", img : "https://media.cntraveler.com/photos/53dabff3dcd5888e145ca051/master/w_1200,c_limit/eccleston-square-hotel-london-england-2-113144.jpg", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro! Maiores impedit quas quis, voluptatem minus nostrum deserunt beatae, corporis dolorem consequatur quidem minima in dolores eum provident iste sequi?"},
      {name : "Master Bed", img : "", desc : ""},
      {name : "Master Bed", img : "", desc : ""},
  ]
   
  return (
    <div className="overflow-hidden">
    <section 
    ref={sectionRef}
    className="homeBannerBg lg:mb-20 flex flex-col mb-10 md:mb-0 items-center h-screen w-full relative overflow-hidden"
  >
    <div className="pt-[140px] px-2 z-10">
      <motion.div 
        ref={textRef}
        initial={{ opacity: 0, y: 20 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: textY }}
        className="text-5xl lg:text-6xl font-bold text-center mb-5 boldText text-[#06362E] overflow-hidden"
      >
        <div className="animate-slideUp">
          <span className="inline-block overflow-hidden">
            {Array.from("Where Serenity Meets").map((char, i) => (
              <span
                key={`char-${i}`}
                className="inline-block animate-letterReveal"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>
        <div className="animate-slideUp block">
          <span className="inline-block overflow-hidden">
            {Array.from("Luxury").map((char, i) => (
              <span
                key={`char2-${i}`}
                className="inline-block animate-letterReveal"
                style={{ animationDelay: `${i * 0.05 + 0.2}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={textInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        style={{ y: textY }}
        className="block text-sm text-center max-w-[700px] mx-auto smallText animate-fadeIn delay-700"
      >
        Discover a peaceful escape wrapped in elegance. Every detail is designed to soothe your senses and elevate your experience.
      </motion.div>
    </div>
    <motion.div 
      style={{ scale: imageScale }}
      className="lg:absolute bottom-0 h-[450px] left-0 right-0 w-full"
    >
      <img
        src={homeBanner}
        alt="Luxury hotel banner"
        className="w-full h-full object-contain lg:bottom-[-30px] lg:bottom-0"
      />
    </motion.div>
</section>

      <section className="mb-0 md:mb-10 w-full">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="md:flex md:justify-between md:items-center w-full md:gap-10">
            {/* Left */}
            <div className="md:w-[70%]">
              {/* Slider */}
              <div className="flex pr-2 scrollbar w-full gap-5 mb-7 overflow-auto whitespace-nowrap flex-shrink-0">
                <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564115/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_smieew.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564112/WhatsApp_Image_2025-09-11_at_9.31.51_AM_zbtrhi.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564111/WhatsApp_Image_2025-09-11_at_9.31.50_AM_1_ycdoe2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[300px] h-[200px] rounded-2xl bg-[#000] overflow-hidden flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="boldText text-5xl font-bold px-2 md:px-0 mb-2 md:mb-0">
                Unlock the Art of{" "}
                <span className="block">Sophisticated Stays</span>
              </div>
            </div>
            {/* Right */}
            <div className="md:w-[30%] px-2 md:px-0">
              <div className="mb-10">
                I really enjoyed my stay at Bilton Hotel. The rooms were clean and comfortable, the staff was very friendly, and the food was great. Would definitely stay here again.
              </div>
              <div className="flex items-center gap-5 mb-10">
                <ul className="flex items-center justify-between w-full relative">
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] overflow-hidden">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=a8a454253a840152c92884be6e94c17c_l-6235668-images-thumbs&n=13"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[40px] overflow-hidden">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=c160aee9623b7a101f30791adb6a8f23af4f92dc-10766712-images-thumbs&ref=rim&n=33&w=250&h=250"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[80px] overflow-hidden">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=31d260c202753873d3a6094c57a15fee409561ea-12420722-images-thumbs&n=13"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[120px] overflow-hidden">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=d9d247ce069038740ecaf920ffdd982ac10b1b42-10346227-images-thumbs&ref=rim&n=33&w=250&h=250"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="w-[60px] h-[60px] rounded-full bg-[#000] absolute left-[160px] overflow-hidden">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=397cadf3f411b37814741ca1a78c89d5e190dc51-5222125-images-thumbs&n=13"
                      alt=""
                      className="w-full h-full object-cover"
                    />
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

      <section className="lg:mb-10 bg-[#ffe7b0] py-10 w-full relative">
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src={demo} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="max-w-[1400px] mx-auto pt-16 md:pt-0 md:py-16 rounded-3xl px-2 lg:px-20 w-full">
          <div className="text-center mb-10 font-bold boldText text-5xl md:text-5xl text-[#06362E]">
            WHERE ELEGANCE  <span className="block">feels like HOME</span>
          </div>
          {/* Rooms */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            className="relative z-20 w-full"
          >
            {[...Array(3)].map((_, index) => (
              <SwiperSlide key={index} className='w-full'>
                <div className="w-full h-[400px] rounded-3xl relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-2 overflow-hidden bg-[#06362E]">
                  <div className="h-[100%] w-full rounded-3xl overflow-hidden">
                    <img
                      src={
                        index === 0
                          ? "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.46_AM_zmkrxc.jpg"
                          : index === 1
                          ? "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564097/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_-_Copy_a61u4x.jpg"
                          : "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564096/WhatsApp_Image_2025-09-11_at_9.31.53_AM_w714cl.jpg"
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="py-2 px-3">
                    {/* <div className="mb-1 font-bold boldText text-[#E2C686]">
                      Executive
                    </div> */}
                    {/* <div className="text-sm text-[#fff3d7]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempore optio doloribus, nemo excepturi minus voluptatem!
                    </div> */}
                  </div>
                  {/* <div className="absolute bottom-5 right-5 p-2 text-xl rounded-full bg-[#E2C686] text-[#06362E]">
                    <FaArrowRight />
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="mb-10 lg:mb-20">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center px-2">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 w-full">
            {/* left */}
            <div className="col-span-4 w-full h-[450px] bg-[#000] overflow-hidden rounded-3xl relative">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <img
                  src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" absolute bottom-0 left-0 right-0 inset-0 bg-[#00000030]"></div>
              <div className="absolute z-10 w-[250px] h-[150px] px-5 py-5 rounded-3xl bg-[#00000036] text-[#fff] right-2 top-2 backdrop-blur-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolor dolores dolore tenetur eveniet
              </div>
              <div className="absolute bottom-10 left-10 text-4xl md:text-5xl boldText text-[#fff] font-bold leading-tight">
                Your Comfort <span className="block">Outside Home</span>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col gap-5 w-full col-span-4 md:col-span-2">
              <div className="w-full h-[215px] rounded-3xl bg-[#000] relative overflow-hidden">
                <div className="absolute right-3 top-3 z-10 p-2 bg-[#06362E] text-[#E2C686] rounded-full shadow-sm">
                  <MdArrowOutward />
                </div>
                <div className="flex flex-col absolute bottom-2 px-10 z-10">
                  <div className="boldText font-bold text-2xl relative z-10   text-[#fff]">
                    Executive
                  </div>
                  <div className="text-sm text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, quasi.
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <img
                    src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757565475/WhatsApp_Image_2025-09-11_at_9.59.50_AM_sshsdz.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full h-[215px] rounded-3xl bg-[#000] relative overflow-hidden">
                <div className="absolute right-3 top-3 z-10 p-2 bg-[#06362E] text-[#E2C686] rounded-full shadow-sm">
                  <MdArrowOutward />
                </div>
                <div className="flex flex-col absolute bottom-2 px-10 z-10">
                  <div className="boldText font-bold text-2xl relative z-10   text-[#fff]">
                    Deluxe
                  </div>
                  <div className="text-sm text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, quasi.
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <img
                    src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 lg:mb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="md:flex justify-center gap-10 w-full px-2 lg:px-10">
            {/* Left */}
            <div className="md:w-[40%] h-full">
              <div className="text-5xl lg:text-8xl font-bold boldText mb-5 md:mb-10 text-[#06362E]">
                Inspiring <span className="block">Locations</span>{" "}
                <span className="block">to Lodge</span>
              </div>
              <div className="mb-5 md:mb-10 text-[#06362E]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                culpa autem odio obcaecati at deleniti iste sapiente minus, odit
                praesentium! Molestias quos nulla ullam eius velit expedita
                sequi commodi quas!
              </div>
              <div className="relative flex items-center mb-5 md:mb-10">
                <input
                  type="text"
                  placeholder="Find Inspiring Places"
                  readOnly
                  className="border-[#06362E] border-[2px] rounded-full outline-none py-3 w-full px-5 "
                />
                <span className="text-2xl absolute right-5 p-2 rounded-full bg-[#06362E] text-[#E2C686]">
                  <FiSearch />
                </span>
              </div>
              <div className="flex mb-5 md:mb-0">
                <ul className="flex justify-between items-center relative">
                  <li className="w-[80px] h-[80px] bg-[#000] rounded-full overflow-hidden">
                    <img
                      src="https://static.tildacdn.com/tild6330-3132-4565-a534-613739653634/par.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="w-[80px] h-[80px] bg-[#000] rounded-full absolute left-16 overflow-hidden">
                    <img
                      src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/126293/126293_00_2x.jpg?20170621045738"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="w-[80px] h-[80px] bg-[#000] rounded-full absolute left-[120px] overflow-hidden">
                    <img
                      src="https://sun9-54.userapi.com/impf/c849120/v849120972/1c5608/tQxWfJ5ZKGY.jpg?size=736x896&quality=96&sign=898d6448a2a71b4edf05a9dc58bd263c&c_uniq_tag=vvA597yVaJ9hV_Wgl_ku4fMM41SUnh-NmtdendFGv38&type=album"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* Right */}
            <div className="md:w-[60%] h-full">
              <div className="h-[320px] w-full bg-[#000] relative rounded-3xl mb-5 overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <img
                    src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757564101/WhatsApp_Image_2025-09-11_at_9.31.52_AM_qkk2a4.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative text-[#fff] boldText text-3xl px-10 pt-10">
                  Exceptional Properties Located in Stunning Surrounding
                </div>
                <div className="flex px-10 absolute bottom-10">
                  <div className="px-6 flex gap-2 items-center text-sm relative py-2 rounded-full bg-[#E2C686] text-[#06362E] font-bold boldText">
                    Show Top-Rated Villas <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="relative mb-5 flex justify-between px-10 text-xl bg-[#06362E] font-semibold text-[#E2C686] py-3 rounded-full">
                <div>2000 +</div>
                <div>Unique Places</div>
              </div>
              <div className="flex justify-center items-center gap-5">
                <div className="w-full h-[200px] rounded-3xl relative bg-[#000] overflow-hidden">
                  <div className="w-full h-[200px] absolute top-0 bottom-0 left-0 right-0">
                    <img
                      src="https://i.ytimg.com/vi/VuhxBe-wyYM/maxresdefault.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative px-5 py-5 boldText text-[#fff] flex items-end h-full z-20 justify-end">
                    Recommended Places
                  </div>
                  <div className="inset-0 bg-[#0000005d] absolute"></div>
                </div>
                <div className="w-full h-[200px] rounded-3xl relative bg-[#000] overflow-hidden">
                  <div className="w-full h-[200px] absolute top-0 bottom-0 left-0 right-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/1200px-Munnar_hillstation_kerala.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative px-5 py-5 boldText text-[#fff] flex items-end h-full z-20 justify-end">
                    Recommended Places
                  </div>
                  <div className="inset-0 bg-[#0000005d] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
      {/* Left Column */}
      <div className="lg:col-span-4 col-span-1 flex flex-col gap-2">
        {/* Top left large box */}
        <div
          className="w-full h-[350px] relative rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")',
            backgroundSize: "1400px 604px",
            backgroundPosition: "left top",
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
            <img src={bgshade} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative py-10 px-5 sm:px-10">
            <div className="boldText text-4xl sm:text-5xl text-[#fff] font-bold mb-5">
              Find Your <span className="block">Perfect Space</span>
            </div>
            <div className="text-sm max-w-[400px] text-[#fff]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem temporibus minus itaque! Amet autem accusantium
              pariatur labore cumque architecto ut.
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Bottom left box */}
          <div
            className="w-full h-[300px] relative rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")',
              backgroundSize: "1400px 604px",
              backgroundPosition: "left bottom",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
              <img
                src={bgshade}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px] relative p-5 sm:p-10">
              <img
                src={calender}
                alt=""
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Bottom center-left box */}
          <div
            className="w-full h-[300px] relative rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")',
              backgroundSize: "1400px 604px",
              backgroundPosition: "center bottom",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
              <img
                src={bgshade}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="px-5 py-10 flex flex-col gap-2 justify-center items-center h-full relative w-full">
              <div className="boldText text-xl sm:text-2xl mb-2 text-[#fff]">
                Plan Your Perfect Stay
              </div>

              <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                <div className="flex items-center gap-2 text-sm">
                  <TbHome2 />
                  <span className="font-semibold">Room</span>
                  <span className="text-[#535353]">Pine Log</span>
                </div>
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </div>
              <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                <div className="flex items-center gap-2 text-sm">
                  <BsCalendar3 />
                  <span className="font-semibold">Check-in</span>
                  <span className="text-[#535353]">11 April 2025</span>
                </div>
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </div>
              <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                <div className="flex items-center gap-2 text-sm">
                  <BsCalendar3 />
                  <span className="font-semibold">Check-out</span>
                  <span className="text-[#535353]">12 April 2025</span>
                </div>
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </div>
              <div className="flex gap-5 justify-between items-center py-2 px-5 bg-[#fff] rounded-3xl w-full">
                <div className="flex items-center gap-2 text-sm">
                  <HiMiniUsers />
                  <span className="font-semibold">Guests</span>
                  <span className="text-[#535353]">4 Adults</span>
                </div>
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 col-span-1 flex flex-col gap-2">
        {/* Top right box */}
        <div
          className="w-full h-[350px] relative rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")',
            backgroundSize: "1400px 604px",
            backgroundPosition: "right top",
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
            <img src={bgshade} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom right box */}
        <div
          className="w-full h-[300px] flex justify-center items-center relative rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://p0.pikist.com/photos/449/6/james-bond-island-thailand-tourism-tourist-destination-nature-rock-mar-landscape.jpg")',
            backgroundSize: "1400px 604px",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl overflow-hidden opacity-70">
            <img src={bgshade} alt="" className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div className="p-4 border-[#fff] border rounded-full relative">
            <div className="w-[250px] mx-auto h-[250px] bg-[#fff] m-auto rounded-full overflow-hidden">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.4225106618806!2d77.59407017507596!3d12.944793887368057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzQxLjMiTiA3N8KwMzUnNDcuOSJF!5e0!3m2!1sen!2sin!4v1757496582934!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
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
            <img
              src="https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:flex px-2 justify-center md:justify-between items-center w-full md:px-20">
            <div>
              <div className="text-5xl md:text-6xl boldText relative z-20 md:px-10 font-bold text-[#fff] mb-5">
                Follow Our <span className="block">Bilton</span>
              </div>
              <div className="relative w-[300px]">
                <img
                  src={curveline}
                  alt=""
                  className="w-full h-full object-containx`"
                />
              </div>
            </div>
            <div className="relative z-20 text-lg md:text-2xl font-semibold text-[#fff]">
              If you appreciate this shot !{" "}
              <span className="block">
                Please follow our Bilton Luxury Hotel
              </span>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
