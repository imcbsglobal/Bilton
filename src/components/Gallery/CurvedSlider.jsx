import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

const images = [
  'https://avatars.mds.yandex.net/i?id=518b44dc418cf7f6664bd8c70b5d20b02b6df5a0-5697811-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/get-altay/1899063/2a0000016a69e31666453161ff0a6671ba57/XXL_height',
  'https://i.pinimg.com/originals/72/fa/97/72fa97df342c0014409a80bda2e26990.jpg',
  'https://avatars.mds.yandex.net/i?id=0b8016b06e84a8782d3af14f9a1fa1de_l-8282002-images-thumbs&ref=rim&n=13&w=2000&h=1415',
  'https://avatars.mds.yandex.net/i?id=329fbcafb06f3d8925cf818c7f61e815_l-10507661-images-thumbs&ref=rim&n=13&w=3000&h=2000',
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
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white z-10 rounded-t-[100%_100px]"></div>
    </div>
  );
};

export default CurvedSlider;
