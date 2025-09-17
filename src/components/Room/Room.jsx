// src/pages/Room.jsx
import React, { useState } from "react";
import { MdOutlineBed } from "react-icons/md";
import { Search, Bed, Calendar, Users, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { TbUsers } from "react-icons/tb";

const Room = () => {
  const [roomType] = useState("Luxury Suite");
  const [dates] = useState("May 10 - May 15, 2025");
  const [guests] = useState("2 Adults, 1 Child");
  const navigate = useNavigate();

  // Each room contains images[] and a features[] array (features set according to your lists)
  const roomData = [
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
      features: [
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
        "Smoking stain (note)",
        "Iron Box"
      ]
    },
    {
      id: "deluxe",
      name: "Deluxe",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565475/WhatsApp_Image_2025-09-11_at_9.59.50_AM_sshsdz.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565476/deluxe_balcony.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757565477/deluxe_bath.jpg"
      ],
      visitors: 420,
      room: "1 extra-large double bed + balcony",
      price: 249,
      shortDesc: "Spacious room with city views.",
      features: [
        "Single sofa",
        "Tea Table",
        "Kettle",
        "Coffee",
        "Tea",
        "Milk powder",
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
        "Smoking stain (note)",
        "Iron Box"
      ]
    },
    {
      id: "executive",
      name: "Executive",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564101/WhatsApp_Image_2025-09-11_at_9.31.52_AM_qkk2a4.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564102/executive_desk.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564103/executive_bath.jpg"
      ],
      visitors: 220,
      room: "1 king-size bed",
      price: 299,
      shortDesc: "Premium amenities for business travelers.",
      features: [
        "Double seater sofa",
        "Tea Table",
        "Kettle",
        "Coffee",
        "Tea",
        "Milk powder",
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
        "Double seating sofa",
        "Hair dryer",
        "Slippers",
        "Iron Box",
        "Shoe cleaner",
        "Smoking stain (note)",
        "Laundry bag"
      ]
    },
    {
      id: "executive-triple",
      name: "Executive Triple",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564104/WhatsApp_Image_2025-09-11_at_9.31.51_AM_1_akvwbt.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564105/exectriple_beds.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564106/exectriple_view.jpg"
      ],
      visitors: 150,
      room: "3 single beds",
      price: 349,
      shortDesc: "Extra space for groups and families.",
      features: [
        "Double seater sofa",
        "Tea Table",
        "Kettle",
        "Coffee",
        "Tea",
        "Milk powder",
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
        "Hair dryer",
        "Slippers",
        "Iron Box",
        "Shoe cleaner",
        "Smoking stain (note)",
        "Laundry bag"
      ]
    },
    {
      id: "studio",
      name: "Studio",
      images: [
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564109/WhatsApp_Image_2025-09-11_at_9.31.50_AM_2_egjoxa.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564110/studio_kitchen.jpg",
        "https://res.cloudinary.com/dtouoqusd/image/upload/v1757564111/studio_balcony.jpg"
      ],
      visitors: 180,
      room: "Studio layout with kitchenette",
      price: 329,
      shortDesc: "Open-plan room with kitchenette.",
      features: [
        "Double seater sofa",
        "Tea Table",
        "Kettle",
        "Coffee",
        "Tea",
        "Milk powder",
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
        "Double sofa",
        "Tea Table",
        "Hair dryer",
        "Slippers",
        "Iron Box",
        "Shoe cleaner",
        "Smoking stain (note)",
        "Laundry bag",
        "Kitchen amenities",
        "Fridge",
        "Induction",
        "Sofa come bed",
        "Hangers"
      ]
    }
  ];

  const handleNavigate = (room) => {
    navigate(`/roomDetail/${room.id}`, { state: room });
  };

  return (
    <div className="">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50 mb-5 to-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center justify-center pt-8 md:pt-16">
            <div className="inline-flex items-center rounded-full bg-white px-6 py-2 border border-emerald-200">
              <span className="text-emerald-800 font-medium text-sm md:text-base">
                Experience luxury like never before
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-[#06362E] boldText pb-3 md:pb-0">
              dream stay
            </h1>

            <div className="relative w-full max-w-6xl mx-auto mb-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-amber-200 h-80 md:h-96 lg:h-[500px]">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44b75684118919.5d52806ed0805.jpg"
                  alt="Luxury hotel suite with panoramic view"
                  className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center -mt-10 md:mt-0 px-4">
          <div className="w-full max-w-5xl mx-auto px-2">
            <div className="bg-emerald-900 rounded-2xl p-6 shadow-xl border border-amber-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-amber-200 mb-1">
                    <Bed size={18} />
                    <span className="text-sm font-medium">Room Type</span>
                  </div>
                  <div className="flex items-center justify-between bg-emerald-800 rounded-lg p-3">
                    <span className="text-white font-medium">{roomType}</span>
                    <ChevronDown size={18} className="text-amber-300" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-amber-200 mb-1">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">Check-in / Check-out</span>
                  </div>
                  <div className="flex items-center justify-between bg-emerald-800 rounded-lg p-3">
                    <span className="text-white font-medium">{dates}</span>
                    <ChevronDown size={18} className="text-amber-300" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-amber-200 mb-1">
                    <Users size={18} />
                    <span className="text-sm font-medium">Guests</span>
                  </div>
                  <div className="flex items-center justify-between bg-emerald-800 rounded-lg p-3">
                    <span className="text-white font-medium">{guests}</span>
                    <ChevronDown size={18} className="text-amber-300" />
                  </div>
                </div>

                <button className="flex-none flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-emerald-900 font-bold rounded-lg px-6 py-3 transition duration-300 shadow-lg">
                  <Search size={20} className="mr-2" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="mb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#06362E] mb-4">
              Luxurious Accommodations
            </h2>
            <p className="text-emerald-700 max-w-2xl mx-auto">
              Discover our exquisite collection of rooms designed for ultimate comfort and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {roomData.slice(0, 3).map((room) => (
              <article
                key={room.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleNavigate(room)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") handleNavigate(room); }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={room.images?.[0]} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="bg-amber-400 text-emerald-900 font-semibold px-4 py-2 rounded-full text-sm flex items-center">
                      <FiSearch className="mr-1" />
                      View Details
                    </button>
                  </div>
                </div>

                <div className="p-5 bg-[#06362E] text-white">
                  <h3 className="font-semibold text-lg mb-1 text-[#E2C686]">{room.name}</h3>
                  <div className="flex items-center text-sm mb-2 text-gray-300">
                    <MdOutlineBed className="mr-1 text-[#E2C686]" />
                    <span>{room.room}</span>
                  </div>

                  <p className="text-sm text-gray-300">{room.shortDesc}</p>

                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <ul className="flex gap-0.5 text-amber-300">
                        <li><HiStar /></li>
                        <li><HiStar /></li>
                        <li><HiStar /></li>
                        <li><HiStar /></li>
                      </ul>
                      <span className="ml-2 text-xs text-gray-300 flex items-center">
                        ({room.visitors} <TbUsers className="ml-1" />)
                      </span>
                    </div>

                    <div className="text-xs bg-emerald-800 px-2 py-1 rounded-md text-amber-200">
                      From ${room.price}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:px-24 lg:px-40 xl:px-56">
            {roomData.slice(3, 5).map((room) => (
              <article
                key={room.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleNavigate(room)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={room.images?.[0]} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-5 bg-[#06362E] text-white">
                  <h3 className="font-semibold text-lg mb-1 text-[#E2C686]">{room.name}</h3>
                  <div className="flex items-center text-sm mb-2 text-gray-300">
                    <MdOutlineBed className="mr-1 text-[#E2C686]" />
                    <span>{room.room}</span>
                  </div>

                  <p className="text-sm text-gray-300">{room.shortDesc}</p>

                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <ul className="flex gap-0.5 text-amber-300">
                        <li><HiStar /></li>
                        <li><HiStar /></li>
                        <li><HiStar /></li>
                        <li><HiStar /></li>
                      </ul>
                      <span className="ml-2 text-xs text-gray-300 flex items-center">
                        ({room.visitors} <TbUsers className="ml-1" />)
                      </span>
                    </div>

                    <div className="text-xs bg-emerald-800 px-2 py-1 rounded-md text-amber-200">
                      From ${room.price}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#06362E] text-[#E2C686] hover:bg-emerald-800 px-8 py-3 rounded-full font-medium transition-colors duration-300 border border-[#E2C686]/30">
              View All Room Types
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Room;
