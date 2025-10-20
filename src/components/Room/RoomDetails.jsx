// src/pages/RoomDetails.jsx
import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyRupee, TbStarFilled } from "react-icons/tb";
import { BsCheck2 } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { SlSizeFullscreen } from "react-icons/sl";
import { 
  Wifi, 
  Bed, 
  Bath, 
  Coffee, 
  Droplet,
  Armchair,
  Wind,
  Tv,
  Snowflake,
  Shirt,
  Soup,
  Milk,
  Package,
  Scissors,
  Sparkles,
  CircleAlert
} from 'lucide-react';
import delux1 from "../../assets/rooms/delux1.jpg";
import delux2 from "../../assets/rooms/delux2.jpg";

// Icon mapping for features
const featureIcons = {
  'Wi-Fi': <Wifi className="w-4 h-4" />,
  'Bed': <Bed className="w-4 h-4" />,
  'Bathtub': <Bath className="w-4 h-4" />,
  'Breakfast': <Coffee className="w-4 h-4" />,
  '4m x 6m': <Package className="w-4 h-4" />,
  'Single chair': <Armchair className="w-4 h-4" />,
  'Kettle': <Soup className="w-4 h-4" />,
  'Coffee': <Coffee className="w-4 h-4" />,
  'Tea': <Coffee className="w-4 h-4" />,
  'Milk': <Milk className="w-4 h-4" />,
  'Powder': <Sparkles className="w-4 h-4" />,
  'Water bottle': <Droplet className="w-4 h-4" />,
  'Toilet roll': <Package className="w-4 h-4" />,
  'Hair comb': <Scissors className="w-4 h-4" />,
  'Dental kit': <Sparkles className="w-4 h-4" />,
  'Shaving kit': <Scissors className="w-4 h-4" />,
  'Shampoo': <Droplet className="w-4 h-4" />,
  'Moisturizer': <Sparkles className="w-4 h-4" />,
  'Shower gel': <Droplet className="w-4 h-4" />,
  'Soap': <Sparkles className="w-4 h-4" />,
  'Ear care': <Sparkles className="w-4 h-4" />,
  'TV': <Tv className="w-4 h-4" />,
  'Fan': <Wind className="w-4 h-4" />,
  'A/C': <Snowflake className="w-4 h-4" />,
  'Bath Towel': <Shirt className="w-4 h-4" />,
  'Hand Towel': <Shirt className="w-4 h-4" />,
  'Iron': <Shirt className="w-4 h-4" />,
  'Smoking stain (note)': <CircleAlert className="w-4 h-4" />
};

// Helper function to get icon for a feature
const getFeatureIcon = (feature) => {
  // Check if exact match exists
  if (featureIcons[feature]) {
    return featureIcons[feature];
  }
  
  // Check for partial matches (e.g., "1 extra-large double bed" contains "Bed")
  const lowerFeature = feature.toLowerCase();
  if (lowerFeature.includes('bed')) return featureIcons['Bed'];
  if (lowerFeature.includes('wifi') || lowerFeature.includes('wi-fi')) return featureIcons['Wi-Fi'];
  if (lowerFeature.includes('bath')) return featureIcons['Bathtub'];
  if (lowerFeature.includes('breakfast')) return featureIcons['Breakfast'];
  
  // Default icon
  return <BsCheck2 />;
};

const RoomDetails = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  // NEW: lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // room passed via navigation state (preferred)
  const roomFromState = location?.state ?? null;

  // id param (could be name or id depending on route)
  const roomIdFromParam = params?.id || params?.name || null;

  // fallbackRooms: used only if no state provided
  const fallbackRooms = [
    {
      id: "standard",
      name: "Standard",
      images: [
        "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758006514/0_82_tu1q8l.jpg",
        "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758008965/0_90_my2rjq.jpg",
        "https://res.cloudinary.com/dvxrou1vc/image/upload/v1758008998/0_94_nbosvd.jpg",
      ],
      visitors: 320,
      room: "1 extra-large double bed",
      price: 1999,
      shortDesc: "Cozy room with essential comforts.",
      pricing: {
        basePrice: 1999,
        breakfast: 400,
        serviceFee: 250,
        discount: 0,
      },
    },
    {
      id: "deluxe",
      name: "Deluxe",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565475/WhatsApp_Image_2025-09-11_at_9.59.50_AM_sshsdz.jpg",
        delux1,
        delux2,
      ],
      visitors: 420,
      room: "1 extra-large double bed + balcony",
      price: 2499,
      shortDesc: "Spacious room with city views.",
      pricing: {
        basePrice: 2499,
        breakfast: 500,
        serviceFee: 300,
        discount: 100,
      },
    },
    {
      id: "executive",
      name: "Executive",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564101/WhatsApp_Image_2025-09-11_at_9.31.52_AM_qkk2a4.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564112/WhatsApp_Image_2025-09-11_at_9.31.51_AM_zbtrhi.jpg",
      ],
      visitors: 220,
      room: "1 king-size bed",
      price: 2999,
      shortDesc: "Premium amenities for business travelers.",
      pricing: {
        basePrice: 2999,
        breakfast: 600,
        serviceFee: 350,
        discount: 150,
      },
    },
    {
      id: "executive-triple",
      name: "Executive Triple",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564104/WhatsApp_Image_2025-09-11_at_9.31.51_AM_1_akvwbt.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564115/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_smieew.jpg",
      ],
      visitors: 150,
      room: "3 single beds",
      price: 3499,
      shortDesc: "Extra space for groups and families.",
      pricing: {
        basePrice: 3499,
        breakfast: 700,
        serviceFee: 400,
        discount: 200,
      },
    },
    {
      id: "studio",
      name: "Studio",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565434/WhatsApp_Image_2025-09-11_at_9.51.46_AM_tcdrsm.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg",
      ],
      visitors: 180,
      room: "Studio layout with kitchenette",
      price: 3299,
      shortDesc: "Open-plan room with kitchenette.",
      pricing: {
        basePrice: 3299,
        breakfast: 550,
        serviceFee: 380,
        discount: 100,
      },
    },
  ];

  // Decide which room to display:
  let room = null;
  if (roomIdFromParam) {
    // First, try to find from fallback rooms using the URL param
    const found = fallbackRooms.find(
      (r) =>
        r.id === roomIdFromParam ||
        (r.name &&
          r.name.toLowerCase() === String(roomIdFromParam).toLowerCase())
    );
    if (found) {
      room = found;
      console.log("Room loaded from fallbackRooms:", room);
    }
  }
  
  // If not found in fallback, check navigation state
  if (!room && roomFromState && Object.keys(roomFromState).length > 0) {
    // Merge state data with fallback pricing if available
    const fallbackMatch = fallbackRooms.find(
      (r) => r.id === roomFromState.id || r.name === roomFromState.name
    );
    
    if (fallbackMatch && fallbackMatch.pricing) {
      room = { ...roomFromState, pricing: fallbackMatch.pricing };
      console.log("Room merged with fallback pricing:", room);
    } else {
      room = roomFromState;
      console.log("Room from state (no pricing merge):", room);
    }
  }

  if (!room) {
    return (
      <div className="pt-[130px] px-4">
        <div className="max-w-[900px] mx-auto text-center py-32">
          <h2 className="text-2xl font-bold mb-4 text-[#06362E]">
            No room selected
          </h2>
          <p className="mb-6">
            Please go back and choose a room to see its details.
          </p>
          <button
            className="py-2 px-4 bg-[#06362E] text-[#E2C686] rounded-lg"
            onClick={() => navigate(-1)}
          >
            Back to rooms
          </button>
        </div>
      </div>
    );
  }

  // Price math - use room-specific pricing or fallback to defaults
  const roomPricing = room?.pricing || {
    basePrice: Number(room?.price || 0),
    breakfast: 500,
    serviceFee: 300,
    discount: 0,
  };

  const basePrice = Number(roomPricing.basePrice) || 0;
  const breakfast = Number(roomPricing.breakfast) || 0;
  const serviceFee = Number(roomPricing.serviceFee) || 0;
  const discount = Number(roomPricing.discount) || 0;
  const total = basePrice + breakfast + serviceFee - discount;

  console.log("Price Debug:", { 
    basePrice, 
    breakfast, 
    serviceFee, 
    discount, 
    total, 
    roomPricing,
    roomData: room 
  });

  // Safe image selection with fallbacks
  const images = Array.isArray(room.images) && room.images.length > 0
    ? room.images
    : [room.img].filter(Boolean);

  const mainImg = images[0] || "";
  const img1 = images[1] || mainImg;
  const img2 = images[2] || mainImg;

  // Features: use room.features if provided, otherwise default full list
  const defaultFeatures = [
    "Wi-Fi",
    room.room || "Bed",
    "Bathtub",
    "Breakfast",
    "4m x 6m",
    "Single chair",
    "Kettle",
    "Coffee",
    "Tea",
    "Milk",
    "Powder",
    "Water bottle",
    "Toilet roll",
    "Hair comb",
    "Dental kit",
    "Shaving kit",
    "Shampoo",
    "Moisturizer",
    "Shower gel",
    "Soap",
    "Ear care",
    "TV",
    "Fan",
    "A/C",
    "Bath Towel",
    "Hand Towel",
    "Iron",
    "Smoking stain (note)",
  ];

  const features =
    Array.isArray(room.features) && room.features.length > 0
      ? room.features
      : defaultFeatures;

  // --- Lightbox helpers ---
  const openAt = (idx) => {
    setActiveIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const close = () => {
    setLightboxOpen(false);
    document.body.style.overflow = ""; // restore scroll
  };

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard support
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, next, prev]);

  // Basic swipe (mobile)
  const [touchX, setTouchX] = useState(null);
  const handleTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    setTouchX(null);
  };

  return (
    <div className="pt-[130px] overflow-hidden px-4">
      <section className="mb-10">
        <div className="max-w-[1300px] w-full mx-auto md:flex md:justify-center gap-5">
          {/* Left column */}
          <div className="w-full md:w-[80%]">
            {/* Images */}
            <div className="w-full gap-2 md:gap-5 mb-5">
              <div className="w-full md:flex justify-center items-center gap-2 md:gap-5">
                <button
                  type="button"
                  onClick={() => openAt(0)}
                  className="h-[400px] w-full md:w-[70%] bg-[#000] rounded-3xl overflow-hidden mb-2 md:mb-0 focus:outline-none"
                >
                  <img
                    src={mainImg}
                    alt={room.name || "room"}
                    className="w-full h-full object-cover"
                  />
                </button>

                <div className="w-full md:w-[30%] gap-2 md:gap-5 flex flex-col">
                  <button
                    type="button"
                    onClick={() => openAt(1)}
                    className="w-full h-[190px] bg-[#000] rounded-3xl overflow-hidden focus:outline-none"
                  >
                    <img
                      src={img1}
                      alt={`${room.name} alt 1`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => openAt(2)}
                    className="w-full h-[190px] bg-[#000] rounded-3xl overflow-hidden relative focus:outline-none"
                  >
                    <img
                      src={img2}
                      alt={`${room.name} alt 2`}
                      className="w-full h-full object-cover"
                    />
                    {images.length > 3 && (
                      <div className="absolute inset-0 bg-black/40 text-white flex items-center justify-center text-lg font-semibold">
                        +{images.length - 2} more
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Heading and short desc */}
            <div className="mb-5">
              <div className="flex items-center gap-5 mb-2">
                <div className="p-2 rounded-lg bg-[#e0e0e0] font-semibold text-[#3db800]">
                  5.0
                </div>
                <div className="font-bold text-[#3db800]">Perfect</div>
                <ul className="flex items-center gap-0.5 text-[#ffdf12]">
                  <li>
                    <TbStarFilled />
                  </li>
                  <li>
                    <TbStarFilled />
                  </li>
                  <li>
                    <TbStarFilled />
                  </li>
                  <li>
                    <TbStarFilled />
                  </li>
                  <li>
                    <TbStarFilled />
                  </li>
                </ul>
              </div>

              <div className="boldText text-4xl mb-2 font-bold text-[#06362E]">
                {room.name}
              </div>

              <div className="max-w-[900px] text-[#06362E]">
                {room.shortDesc || "A comfortable stay with essential comforts."}
                <div className="mt-3 text-sm text-gray-600">
                  <strong>Bed:</strong> {room.room || "—"}
                  <br />
                  <strong>Visitors:</strong> {room.visitors || "—"}
                </div>
              </div>
            </div>

            {/* Room Features */}
            <div>
              <div className="font-bold text-xl boldText mb-4 text-center md:text-start">
                Room Features
              </div>

              {/* Pills grid showing all features */}
              <div className="md:max-w-[900px] mx-auto mb-3">
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.12)] bg-white"
                    >
                      <span className="text-emerald-700">
                        {getFeatureIcon(feature)}
                      </span>
                      <span className="text-sm text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column (booking summary) */}
          <div className="w-full md:w-[20%] bg-[#06362E] h-[600px] rounded-3xl shadow-sm py-10 px-2">
            <div className="text-center font-semibold mb-5 text-[#E2C686]">
              {room.name}
            </div>

            <div className="flex justify-between w-full mb-5">
              <div>
                <label className="text-sm text-[#fff]">Check-In</label>
                <div className="mt-2 bg-[#E2C686] text-[#06362E] rounded-xl px-3 py-2 font-semibold">
                  12 AM
                </div>
              </div>
              <div>
                <label className="text-sm text-[#fff]">Check-Out</label>
                <div className="mt-2 bg-[#E2C686] text-[#06362E] rounded-xl px-3 py-2 font-semibold">
                  11 AM
                </div>
              </div>
            </div>

            <div className="px-4 py-2 bg-[#E2C686] rounded-xl flex justify-between items-center text-[#06362E] font-semibold mb-5">
              <div>2 Adults, 1 Children</div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>

            <div className="mb-5">
              <div className="text-[#ffffff] mb-2">Price</div>
              <div className="w-full min-h-[150px] bg-[#E2C686] rounded-xl py-5 px-5 text-[#06362E]">
                <div className="flex justify-between mb-2">
                  <div className="font-semibold">1 Night</div>
                  <span className="flex items-center font-semibold">
                    <TbCurrencyRupee className="text-lg" />
                    <span>{basePrice}</span>
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between mb-2">
                    <div className="font-semibold">Discount</div>
                    <span className="flex items-center font-semibold text-green-700">
                      <span>-</span>
                      <TbCurrencyRupee className="text-lg" />
                      <span>{discount}</span>
                    </span>
                  </div>
                )}
                <div className="flex justify-between mb-2">
                  <div className="font-semibold">Breakfast</div>
                  <span className="flex items-center font-semibold">
                    <TbCurrencyRupee className="text-lg" />
                    <span>{breakfast}</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="font-semibold">Service Fee</div>
                  <span className="flex items-center font-semibold">
                    <TbCurrencyRupee className="text-lg" />
                    <span>{serviceFee}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-5 px-2">
              <div className="text-[#fff] font-semibold">Total Payment</div>
              <div className="flex items-center text-[#E2C686] font-bold text-xl">
                <TbCurrencyRupee className="text-2xl" />
                <span>{total}</span>
              </div>
            </div>

            <a href="/checkout">
              <div className="py-2 px-5 flex justify-center items-center w-full mb-5 bg-[#fff] rounded-xl font-semibold text-[#06362E]">
                Book Now
              </div>
            </a>

            <div className="text-xs text-center text-[#ffffffd0]">
              You will not get charged yet
            </div>
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxOpen && images.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          onClick={(e) => {
            // close if backdrop clicked
            if (e.target === e.currentTarget) close();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              aria-label="Close"
              onClick={close}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/90 hover:bg-white shadow"
            >
              ✕
            </button>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-2 md:left-6 p-3 rounded-full bg-white/80 hover:bg-white shadow"
                >
                  ‹
                </button>
                <button
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-2 md:right-6 p-3 rounded-full bg-white/80 hover:bg-white shadow"
                >
                  ›
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={images[activeIndex]}
              alt={`${room.name} preview ${activeIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] object-contain select-none"
              draggable={false}
            />

            {/* Thumbnails strip */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto px-3 py-2 bg-black/40 rounded-xl">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`h-14 w-20 rounded-md overflow-hidden border ${
                      idx === activeIndex ? "border-white" : "border-transparent opacity-70"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`thumb ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;