// src/pages/RoomDetails.jsx
import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyRupee, TbStarFilled } from "react-icons/tb";
import { BiWifi } from "react-icons/bi";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { SlSizeFullscreen } from "react-icons/sl";
import { BsCheck2 } from "react-icons/bs";
import delux1 from "../../assets/rooms/delux1.jpg";
import delux2 from "../../assets/rooms/delux2.jpg";


const RoomDetails = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  // local UI state for features expand/collapse
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // room passed via navigation state (preferred)
  const roomFromState = location?.state ?? null;

  // id param (could be name or id depending on route)
  const roomIdFromParam = params?.id || params?.name || null;

  // Debugging logs
  console.log('Room from state:', roomFromState);
  console.log('Room from param:', roomIdFromParam);

  // fallbackRooms: used only if no state provided
  const fallbackRooms = [
    {
      id: "standard",
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
    },
    {
      id: "deluxe",
      name: "Deluxe",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565475/WhatsApp_Image_2025-09-11_at_9.59.50_AM_sshsdz.jpg",
        delux1,
        delux2
      ],
      visitors: 420,
      room: "1 extra-large double bed + balcony",
      price: 249,
      shortDesc: "Spacious room with city views.",
    },
    {
      id: "executive",
      name: "Executive",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564101/WhatsApp_Image_2025-09-11_at_9.31.52_AM_qkk2a4.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564112/WhatsApp_Image_2025-09-11_at_9.31.51_AM_zbtrhi.jpg"
      ],
      visitors: 220,
      room: "1 king-size bed",
      price: 299,
      shortDesc: "Premium amenities for business travelers.",
    },
    {
      id: "executive-triple",
      name: "Executive Triple",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564104/WhatsApp_Image_2025-09-11_at_9.31.51_AM_1_akvwbt.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564115/WhatsApp_Image_2025-09-11_at_9.31.53_AM_1_smieew.jpg"
      ],
      visitors: 150,
      room: "3 single beds",
      price: 349,
      shortDesc: "Extra space for groups and families.",
    },
    {
      id: "studio",
      name: "Studio",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565434/WhatsApp_Image_2025-09-11_at_9.51.46_AM_tcdrsm.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565433/WhatsApp_Image_2025-09-11_at_9.50.24_AM_cfx0c5.jpg"
      ],
      visitors: 180,
      room: "Studio layout with kitchenette",
      price: 329,
      shortDesc: "Open-plan room with kitchenette.",
    },
  ];

  // Decide which room to display:
  // Prefer location.state if present (preserves images array), else fallback by id
  let room = null;
  if (roomFromState && Object.keys(roomFromState).length > 0) {
    room = roomFromState;
  } else if (roomIdFromParam) {
    const found = fallbackRooms.find(
      (r) =>
        r.id === roomIdFromParam ||
        (r.name && r.name.toLowerCase() === String(roomIdFromParam).toLowerCase())
    );
    if (found) room = found;
  }

  console.log('Final room data:', room);

  if (!room) {
    return (
      <div className="pt-[130px] px-4">
        <div className="max-w-[900px] mx-auto text-center py-32">
          <h2 className="text-2xl font-bold mb-4 text-[#06362E]">No room selected</h2>
          <p className="mb-6">Please go back and choose a room to see its details.</p>
          <button className="py-2 px-4 bg-[#06362E] text-[#E2C686] rounded-lg" onClick={() => navigate(-1)}>Back to rooms</button>
        </div>
      </div>
    );
  }

  // Safe image selection with fallbacks
  const mainImg = (room.images && room.images[0]) || room.img || "";
  const img1 = (room.images && room.images[1]) || room.img || mainImg;
  const img2 = (room.images && room.images[2]) || room.img || mainImg;

  // Price math (example)
  const basePrice = Number(room.price || 0);
  const breakfast = 500;
  const serviceFee = 300;
  const total = basePrice + breakfast + serviceFee;

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
    "Smoking stain (note)"
  ];

  const features = Array.isArray(room.features) && room.features.length > 0 ? room.features : defaultFeatures;

  // Determine which features to render (first 4 or all)
  const firstFour = features.slice(0, 4);
  const displayedFeatures = showAllFeatures ? features : firstFour;

  return (
    <div className="pt-[130px] overflow-hidden px-4">
      <section className="mb-10">
        <div className="max-w-[1300px] w-full mx-auto md:flex md:justify-center gap-5">
          {/* Left column */}
          <div className="w-full md:w-[80%]">
            {/* Images */}
            <div className="w-full gap-2 md:gap-5 mb-5">
              <div className="w-full md:flex justify-center items-center gap-2 md:gap-5">
                <div className="h-[400px] w-full md:w-[70%] bg-[#000] rounded-3xl overflow-hidden mb-2 md:mb-0">
                  <img src={mainImg} alt={room.name || "room"} className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-[30%] gap-2 md:gap-5 flex flex-col">
                  <div className="w-full h-[190px] bg-[#000] rounded-3xl overflow-hidden">
                    <img src={img1} alt={`${room.name} alt 1`} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-[190px] bg-[#000] rounded-3xl overflow-hidden">
                    <img src={img2} alt={`${room.name} alt 2`} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading and short desc */}
            <div className="mb-5">
              <div className="flex items-center gap-5 mb-2">
                <div className="p-2 rounded-lg bg-[#e0e0e0] font-semibold text-[#3db800]">5.0</div>
                <div className="font-bold text-[#3db800]">Perfect</div>
                <ul className="flex items-center gap-0.5 text-[#ffdf12]">
                  <li><TbStarFilled/></li>
                  <li><TbStarFilled/></li>
                  <li><TbStarFilled/></li>
                  <li><TbStarFilled/></li>
                  <li><TbStarFilled/></li>
                </ul>
              </div>

              <div className="boldText text-4xl mb-2 font-bold text-[#06362E]">
                {room.name}
              </div>

              <div className="max-w-[900px] text-[#06362E]">
                {room.shortDesc || "A comfortable stay with essential comforts."}
                <div className="mt-3 text-sm text-gray-600">
                  <strong>Bed:</strong> {room.room || "—"}<br/>
                  <strong>Visitors:</strong> {room.visitors || "—"}
                </div>
              </div>
            </div>

            {/* Room Features */}
            <div>
              <div className="font-bold text-xl boldText mb-4 text-center md:text-start">Room Features</div>

              {/* Pills grid showing first 4 or all */}
              <div className="md:max-w-[900px] mx-auto mb-3">
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {displayedFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.12)] bg-white"
                    >
                      {/* optional check icon */}
                      <span className="text-emerald-700"><BsCheck2 /></span>
                      <span className="text-sm text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Show more / less control */}
                {features.length > 4 && (
                  <div className="flex justify-center md:justify-start mt-4">
                    <button
                      onClick={() => setShowAllFeatures(s => !s)}
                      aria-expanded={showAllFeatures}
                      className="inline-flex items-center gap-2 text-sm text-[#06362E] bg-white/90 px-4 py-2 rounded-full shadow transition-transform hover:scale-105"
                    >
                      <span>{showAllFeatures ? "Show less" : `Show ${features.length - 4} more`}</span>
                      <IoIosArrowDown
                        className={`transform transition-transform duration-200 ${showAllFeatures ? "rotate-180" : "rotate-0"}`}
                      />
                    </button>
                  </div>
                )}
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
                  Oct 7, 2025
                </div>
              </div>
              <div>
                <label className="text-sm text-[#fff]">Check-Out</label>
                <div className="mt-2 bg-[#E2C686] text-[#06362E] rounded-xl px-3 py-2 font-semibold">
                  Oct 8, 2025
                </div>
              </div>
            </div>

            <div className="px-4 py-2 bg-[#E2C686] rounded-xl flex justify-between items-center text-[#06362E] font-semibold mb-5">
              <div>2 Adults, 1 Children</div>
              <div><IoIosArrowDown/></div>
            </div>

            <div className="mb-5">
              <div className="text-[#ffffff] mb-2">Price</div>
              <div className="w-full h-[150px] bg-[#E2C686] rounded-xl py-5 px-5 text-[#06362E]">
                <div className="flex justify-between">
                  <div className="font-semibold">1 Night</div>
                  <span className="flex items-center font-semibold"><TbCurrencyRupee/>{basePrice}</span>
                </div>
                <div className="flex justify-between">
                  <div className="font-semibold">Discount</div>
                  <span className="flex items-center font-semibold"><TbCurrencyRupee/>0</span>
                </div>
                <div className="flex justify-between">
                  <div className="font-semibold">Breakfast</div>
                  <span className="flex items-center font-semibold"><TbCurrencyRupee/>{breakfast}</span>
                </div>
                <div className="flex justify-between">
                  <div className="font-semibold">Service Fee</div>
                  <span className="flex items-center font-semibold"><TbCurrencyRupee/>{serviceFee}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-5">
              <div className="text-[#fff]">Total Payment</div>
              <div className="flex items-center text-[#E2C686] font-bold">
                <TbCurrencyRupee/>{total}
              </div>
            </div>

            <a href="/checkout">
              <div className="py-2 px-5 flex justify-center items-center w-full mb-5 bg-[#fff] rounded-xl font-semibold text-[#06362E]">Book Now</div>
            </a>

            <div className="text-xs text-center text-[#ffffffd0]">You will not get charged yet</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetails;