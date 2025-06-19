import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';
import TextReveal from './TextReveal';
import bgShade from "../../assets/bgshade.png"
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { CheckCircle, Star, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const aboutData = [
    { img : "https://img-new.cgtrader.com/items/47716/4e076435c4/modern-bedroom-3d-model-max.jpg" },
    { img : "https://avatars.mds.yandex.net/i?id=f3792c41e492c9c9ba1c28b815b6d0ae_l-4257007-images-thumbs&ref=rim&n=13&w=1500&h=911" },
    { img : "https://citygrowsys.com/webcontent/images/solutions/hotel-guest-room-management.jpg" },
    { img : "https://cdnb.artstation.com/p/assets/images/images/037/137/685/large/kami-interier2-2-gigapixel-scale-2-00x.jpg?1619594019" },
    // { img : "https://oboi-plenka.ru/image/cache/catalog/divino/6/647869674-fotooboi-d2-061-divino-volny-obaemnye-3-m-h-2-7-m-1200x800.jpg" },
    { img : "https://avatars.mds.yandex.net/i?id=be180821b2e9d71357bf6e65e26b2efc_l-7544543-images-thumbs&ref=rim&n=13&w=1550&h=1550" },
    { img : "https://citygrowsys.com/webcontent/images/solutions/hotel-guest-room-management.jpg" }
  ]

  const featuress = [
    {
      image: "https://cdn1.matadornetwork.com/blogs/1/2024/01/Taj-Yeshwantpur-Bengaluru-4.jpg",
      title: "Trusted Service",
      points: ["Experienced Team", "24/7 Support", "High Client Satisfaction"],
    },
    {
      image: "https://cdn1.matadornetwork.com/blogs/1/2024/01/Taj-Yeshwantpur-Bengaluru-4.jpg",
      title: "Quality Assurance",
      points: ["Top-Grade Tools", "Clean Code", "Performance Oriented"],
    },
    {
      image: "https://cdn1.matadornetwork.com/blogs/1/2024/01/Taj-Yeshwantpur-Bengaluru-4.jpg",
      title: "Custom Solutions",
      points: ["Tailored for You", "Scalable Designs", "Cross-Platform Ready"],
    },
    {
      image: "https://cdn1.matadornetwork.com/blogs/1/2024/01/Taj-Yeshwantpur-Bengaluru-4.jpg",
      title: "Trusted Service",
      points: ["Experienced Team", "24/7 Support", "High Client Satisfaction"],
    },
    {
      image: "https://cdn1.matadornetwork.com/blogs/1/2024/01/Taj-Yeshwantpur-Bengaluru-4.jpg",
      title: "Quality Assurance",
      points: ["Top-Grade Tools", "Clean Code", "Performance Oriented"],
    },
    {
      image: "https://cdn1.matadornetwork.com/blogs/1/2024/01/Taj-Yeshwantpur-Bengaluru-4.jpg",
      title: "Custom Solutions",
      points: ["Tailored for You", "Scalable Designs", "Cross-Platform Ready"],
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Unmatched Quality',
      points: [
        'Highest grade materials',
        'Rigorous quality control',
        'Consistent excellence'
      ],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      points: [
        'Personalized service',
        '24/7 support',
        'Guaranteed happiness'
      ],
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Total Protection',
      points: [
        'Comprehensive warranty',
        'Security guarantees',
        'Peace of mind'
      ],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Sparkles,
      title: 'Innovative Solutions',
      points: [
        'Cutting-edge technology',
        'Continuous improvement',
        'Future-forward approach'
      ],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];
  return (
    <div className="pt-[100px]">
      <section className="mb-10">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col justify-center items-center">
            {/* Animated tagline */}
            <div className="mb-5 px-10 font-semibold text-[#06362E] py-2 rounded-full border-2 border-[#E2C686] shadow-[0_3px_10px_rgb(0,0,0,0.1)] animate-fadeIn opacity-0">
              About Us
            </div>

            {/* Main heading with staggered letter animation */}
            <div className="boldText text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center text-[#06362E] font-semibold mb-5 overflow-hidden">
              <div className="animate-slideUp delay-100 opacity-0">
                <span className="inline-block overflow-hidden">
                  {Array.from("Explore Our Mission and").map((char, i) => (
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
              <div className="animate-slideUp delay-300 opacity-0 block">
                <span className="inline-block overflow-hidden">
                  {Array.from("Values in Comfort-Driven").map((char, i) => (
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
              <div className="animate-slideUp delay-500 opacity-0">
                <span className="inline-block overflow-hidden">
                  {Array.from("Hospitality Solutions").map((char, i) => (
                    <span
                      key={`char3-${i}`}
                      className="inline-block animate-letterReveal"
                      style={{ animationDelay: `${i * 0.05 + 0.4}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            {/* Description with fade-in */}
            <div className="max-w-[600px] mx-auto text-center mb-5 animate-fadeIn delay-700 opacity-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              quia Lorem ipsum dolor sit amet.
            </div>

            {/* Button with subtle scale animation */}
            <div className="flex justify-center items-center animate-fadeIn delay-1000 opacity-0">
              <button className="font-semibold rounded-full flex items-center gap-2 bg-[#06362E] text-[#ffffff] px-6 py-2 hover:scale-105 transition-transform duration-300">
                Discover More <FaCircleArrowRight className="animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 mb-10 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {aboutData.map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-gray-200 h-[300px] overflow-hidden rounded-xl text-center text-xl font-medium shadow">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-16">
        <div className="max-w-[1200px] mx-auto px-2 flex flex-col justify-center items-center">
          <TextReveal />
        </div>
      </section>

      <section className="mb-16 px-2">
        <div className="max-w-[1400px] mx-auto h-[600px] w-full rounded-3xl bg-[#000] relative px-5 pb-5 flex items-end overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <img
              src="https://kmp.ru/upload/iblock/308/308f5b3393799a26f3bbba85892108bc.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-[50%] w-[95%] h-[450px] bg-[#fff8e8] rounded-2xl relative px-5 py-10">
            <div className="flex flex-col justify-start items-start">
              <div className="px-6 py-2 mb-5 rounded-full border-2 text-[#06362E] border-[#06362E] text-xs md:text-sm font-semibold">
                About Bilton
              </div>
              <div className="mb-5 text-3xl md:text-5xl boldText font-bold text-[#06362E]">
                Redefining stays with effortless guest experiences
              </div>
              <div className="text-xs md:text-sm mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt dolor voluptas recusandae quos perferendis voluptatem
                est omnis, reprehenderit, fugiat tenetur rerum necessitatibus
                molestias architecto libero iure. Ut iste doloribus ad.
              </div>
              <div className="flex items-center gap-5">
                <div className="px-6 py-2 border border-[#06362E] text-[#E2C686] bg-[#06362E] text-sm font-semibold rounded-full">
                  Discover More
                </div>
                <div className="px-6 py-2 text-[#06362E] bg-[#fbe0a1] text-sm font-semibold rounded-full">
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Whay Choose Us */}

      <section className="py-16 mb-10 bg-gradient-to-br from-[#f4f4f4] to-[#ffffff] relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#06362E] to-[#0A6A5C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#E2C686] to-[#F3D8A0] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title with Animated Underline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#06362E] relative inline-block">
              Why Choose Us
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-[#06362E] to-[#E2C686] animate-pulse"></span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active bg-[#06362E]",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="why-choose-us-swiper py-10"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`
                ${feature.bgColor} 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl 
                rounded-2xl p-6 flex flex-col 
                items-center justify-center text-center 
                border-2 border-transparent hover:border-[#06362E]/20
              `}
                >
                  <div
                    className={`
                  ${feature.iconColor} 
                  mb-4 w-20 h-20 
                  flex items-center justify-center 
                  rounded-full bg-white 
                  shadow-md
                `}
                  >
                    <feature.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#06362E] mb-4">
                    {feature.title}
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {feature.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center gap-2"
                      >
                        <CheckCircle
                          size={16}
                          className="text-[#06362E] opacity-70"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="mb-16 px-2">
        <div className="max-w-[1200px] flex flex-col justify-center items-center relative mx-auto w-full h-[300px] rounded-3xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
          <div className="h-[300px] absolute top-0 bottom-0 left-0 right-0">
            <img
              src="https://cdn1.matadornetwork.com/blogs/1/2024/01/Taj-Yeshwantpur-Bengaluru-4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[300px] absolute top-0 bottom-0 left-0 right-0">
            <img
              src={bgShade}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative text-[#fff] text-4xl font-semibold boldText text-center px-10">
            Lorem ipsum dolor sit amet consectetur{" "}
            <span className="block">adipisicing elit</span>
          </div>
          <div className=" relative mt-5">
            <div className="flex items-center gap-5 px-10 py-3 rounded-full bg-[#fcdf9c] text-[#06362E] font-semibold">
              Make a schedule{" "}
              <span>
                <FaCircleArrowRight />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
