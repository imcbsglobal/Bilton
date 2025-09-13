import React, { useState } from "react";
import CurvedSlider from "../Gallery/CurvedSlider";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("images");
  // Replace these URLs with your actual Cloudinary / remote image URLs.
  const images = [
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564115/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_smieew.jpg",
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564096/WhatsApp_Image_2025-09-11_at_9.31.53_AM_w714cl.jpg",
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.46_AM_zmkrxc.jpg",
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564111/WhatsApp_Image_2025-09-11_at_9.31.50_AM_1_ycdoe2.jpg",
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565434/WhatsApp_Image_2025-09-11_at_9.51.46_AM_tcdrsm.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565440/WhatsApp_Image_2025-09-11_at_9.59.51_AM_uwofle.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565475/WhatsApp_Image_2025-09-11_at_9.59.50_AM_sshsdz.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564096/WhatsApp_Image_2025-09-11_at_9.31.53_AM_w714cl.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564097/WhatsApp_Image_2025-09-11_at_9.31.49_AM_yqzzir.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564101/WhatsApp_Image_2025-09-11_at_9.31.52_AM_qkk2a4.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564101/WhatsApp_Image_2025-09-11_at_9.31.50_AM_v0tkcp.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564102/WhatsApp_Image_2025-09-11_at_9.31.52_AM_1_zl4tif.jpg", // example — replace
    "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564104/WhatsApp_Image_2025-09-11_at_9.31.51_AM_1_akvwbt.jpg" // example — replace
  ];

  const videos = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      poster:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      poster:
        "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="pt-[150px] overflow-hidden">
      <section className="md:mb-10 px-2 lg:px-0">
        <div className="text-center text-4xl lg:text-6xl boldText font-semibold leading-tight">
          Where Luxury Meets Comfort <span className="block">for an Unforgettable Stay</span>
        </div>
        <div>
          <CurvedSlider />
        </div>
      </section>

      <section>
        <div className="max-w-[1400px] mx-auto mb-10 px-2">
          <div className="md:flex px-2 md:px-0 justify-between w-full gap-5 items-start mb-10">
            <div className="text-5xl boldText font-bold leading-tight w-full md:w-[60%]">
             A Glimpse of  <span className="block">Comfort & Luxury</span>
            </div>
            <div className="w-full md:w-[40%]">
              Step inside and explore the perfect blend of modern elegance and homely comfort. Our gallery showcases thoughtfully designed rooms, inviting dining spaces, and welcoming amenities—all crafted to make every stay memorable. Discover the atmosphere where luxury meets warmth, and envision your next unforgettable stay with us.
            </div>
          </div>

          <div className="px-2 md:px-0 mb-6">
            <div className="flex gap-1 text-sm">
              <button
                onClick={() => setActiveFilter("images")}
                className={`transition-colors ${activeFilter === "images" ? "text-black font-medium" : "text-gray-500"}`}
              >
                Images
              </button>
              <span className="text-gray-400">/</span>
              <button
                onClick={() => setActiveFilter("videos")}
                className={`transition-colors ${activeFilter === "videos" ? "text-black font-medium" : "text-gray-500"}`}
              >
                Videos
              </button>
            </div>
          </div>

          {/* Gallery - Images */}
          {activeFilter === "images" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {images.map((src, index) => (
                <div key={index} className="w-full h-[350px] rounded-3xl bg-[#000] overflow-hidden">
                  <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          )}

          {/* Gallery - Videos */}
          {activeFilter === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {videos.map((video, index) => (
                <div key={index} className="w-full h-[350px] rounded-3xl bg-[#000] overflow-hidden">
                  <video className="w-full h-full object-cover" controls poster={video.poster}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
