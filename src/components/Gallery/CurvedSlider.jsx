import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.png'
import room3 from '../../assets/room3.png'
import room4 from '../../assets/room4.png'
import hotel from '../../assets/Homebanner.jpg'
import reception from '../../assets/reception.png'
import living from '../../assets/living.png'
import dine from '../../assets/dine.jpg'
import dine1 from '../../assets/dine1.png'
import rec1 from '../../assets/rec1.png'
import build from '../../assets/build.jpg'
import build2 from '../../assets/build2.jpg'
import build3 from '../../assets/build3.jpg'
import build4 from '../../assets/build4.jpg'
import dine3 from '../../assets/dine3.jpg'
const images = [
   room1,
   reception,
    dine,
    build,
      room2,
      hotel,
      dine1,
      build2,
      living,
      room3,
      dine3,
      build3,
      room4,
      build4
];

const CurvedSlider = () => {
  return (
    <div className="relative bg-white pt-20 pb-20 md:pt-20 md:pb-20 overflow-hidden h-[650px]">
      {/* Top curved mask */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-white z-10 rounded-b-[100%_100px]"></div>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="w-[500px] h-[500px] flex items-center justify-center"
          >
            <img
              src={src}
              className="w-full h-full object-cover rounded-xl shadow-xl"
              alt={`Slide ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom curved mask */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white z-10 rounded-t-[100%_100px] mb-0"></div>
    </div>
  );
};

export default CurvedSlider;
