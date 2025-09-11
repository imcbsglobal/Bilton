import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const images = [
  {
    src: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564115/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_smieew.jpg",
    url: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564115/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_smieew.jpg",
    alt: "Room 1"
  },
  {
    src: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564096/WhatsApp_Image_2025-09-11_at_9.31.53_AM_w714cl.jpg",
    url: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564096/WhatsApp_Image_2025-09-11_at_9.31.53_AM_w714cl.jpg",
    alt: "Reception"
  },
  {
    src: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565434/WhatsApp_Image_2025-09-11_at_9.51.46_AM_tcdrsm.jpg",
    url: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565434/WhatsApp_Image_2025-09-11_at_9.51.46_AM_tcdrsm.jpg",
    alt: "Dining"
  },
  {
    src: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg",
    url: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg",
    alt: "Building"
  },
  {
    src: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564112/WhatsApp_Image_2025-09-11_at_9.31.51_AM_zbtrhi.jpg",
    url: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564112/WhatsApp_Image_2025-09-11_at_9.31.51_AM_zbtrhi.jpg",
    alt: "Room 2"
  },
  {
    src: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
    url: "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
    alt: "Hotel"
  }
  // 👉 Add more Cloudinary URLs here the same way
];

const CurvedSlider = () => {
  return (
    <div className="relative bg-white pt-20 pb-20 md:pt-20 md:pb-20 overflow-hidden h-[650px]">
      {/* Top curved mask */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-white z-10 rounded-b-[100%_100px]" />

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-full"
      >
        {images.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="w-[500px] h-[500px] flex items-center justify-center"
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.src}
                className="w-full h-full object-cover rounded-xl shadow-xl"
                alt={item.alt ?? `Slide ${idx + 1}`}
                loading="lazy"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom curved mask */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white z-10 rounded-t-[100%_100px] mb-0" />
    </div>
  );
};

export default CurvedSlider;
