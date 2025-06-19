import React,{useState} from 'react'
import { MdOutlineBed } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { TbUsers } from "react-icons/tb";
import { Search, Bed, Calendar, Users, ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom"

const Room = () => {
  const [roomType, setRoomType] = useState('Luxury Suite');
  const [dates, setDates] = useState('May 10 - May 15, 2025');
  const [guests, setGuests] = useState('2 Adults, 1 Child');
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/roomDetail")
  }

  const roomData = [
    {name:"Master Bed Room", img : "https://www.johndickandson.co.uk/wp-content/uploads/2019/06/Aleal-15.jpg", visitors : 320, room:"1 extra-large double bed"},
    {name:"Deluxe Double Room Room", img : "https://img.edilportale.com/product-thumbs/b_bed-with-upholstered-headboard-adora-572518-relcbb72ad.jpg", visitors : 320,room:"1 extra-large double bed"},
    {name:"Double Room Room", img : "https://www.alesyamebel.ru/upload/iblock/82b/x56lauyudsxhqjj0cjzhydslvvy8azbzn.jpeg.pagespeed.ic.x8pIFoq1_l.jpg", visitors : 320,room:"1 extra-large double bed"},
    {name:"Budget Double Room Room", img : "https://img.goodfon.ru/wallpaper/nbig/0/2a/interer-stil-dizain-komnata-roskoshnaia-spalnia.webp", visitors : 320,room:"1 extra-large double bed"},
    {name:"Master Bed Room", img : "https://avatars.mds.yandex.net/i?id=b46a11b664c69c7354fdab44bf5b60c66c35c30d-5668792-images-thumbs&n=13", visitors : 320,room:"1 extra-large double bed"},
    {name:"Master Bed Room", img : "https://assets-news.housing.com/news/wp-content/uploads/2022/03/09211415/Modern-bedroom-lighting-ideas-Enhance-the-interiors-with-lights-for-your-bedroom.jpg", visitors : 320,room:"1 extra-large double bed"},
    {name:"Master Bed Room", img : "https://avatars.mds.yandex.net/i?id=ef2780716fa8f23bcd49d334fd381a90-4054844-images-thumbs&n=13", visitors : 320,room:"1 extra-large double bed"},
    {name:"Master Bed Room", img : "https://i.pinimg.com/originals/18/f0/12/18f012da5970d208362a99d31821be7f.jpg", visitors : 320,room:"1 extra-large double bed"},
  ]
  return (
    <div className="">
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50 mb-5 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44b75684118919.5d52806ed0805.jpg')] opacity-30" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center pt-8 md:pt-16">
          {/* Pre-heading tag */}
          <div className="inline-flex items-center rounded-full bg-[#ffffff] px-6 py-2 border border-emerald-200">
            <span className="text-emerald-800 font-medium text-sm md:text-base">Experience luxury like never before</span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-[#06362E] boldText pb-3 md:pb-0">
            dream stay
          </h1>
      
          {/* Hero image with parallax effect */}
          <div className="relative w-full max-w-6xl mx-auto mb-[400px] md:mb-40 ">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-amber-200 h-80 md:h-96 lg:h-[500px]">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44b75684118919.5d52806ed0805.jpg"
                alt="Luxury hotel suite with panoramic view"
                className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
              />
              
              {/* Gold accent corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-400 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-400 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-400 rounded-br-3xl"></div>
            </div>
          </div>
        </div>
        
        {/* Booking widget */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 md:bottom-16 w-full max-w-5xl mx-auto px-2 ">
          <div className="bg-emerald-900 rounded-2xl p-6 shadow-xl border border-amber-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Room selection */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-amber-200 mb-1">
                  <Bed size={18} />
                  <span className="text-sm font-medium">Room Type</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-800 rounded-lg p-3 cursor-pointer hover:bg-emerald-700 transition duration-300">
                  <span className="text-white font-medium">{roomType}</span>
                  <ChevronDown size={18} className="text-amber-300" />
                </div>
              </div>
              
              {/* Date selection */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-amber-200 mb-1">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">Check-in / Check-out</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-800 rounded-lg p-3 cursor-pointer hover:bg-emerald-700 transition duration-300">
                  <span className="text-white font-medium">{dates}</span>
                  <ChevronDown size={18} className="text-amber-300" />
                </div>
              </div>
              
              {/* Guests selection */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-amber-200 mb-1">
                  <Users size={18} />
                  <span className="text-sm font-medium">Guests</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-800 rounded-lg p-3 cursor-pointer hover:bg-emerald-700 transition duration-300">
                  <span className="text-white font-medium">{guests}</span>
                  <ChevronDown size={18} className="text-amber-300" />
                </div>
              </div>
              
              {/* Search button */}
              <button className="flex-none flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-emerald-900 font-bold rounded-lg px-6 py-3 transition duration-300 shadow-lg">
                <Search size={20} className="mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="mb-10">
        <div className="max-w-[1400px] mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
            {roomData.map((room) => (
              <a href="/roomDetail">
              <div className="w-full h-[400px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#06362E] rounded-3xl" onClick={handleNavigate}>
                <div className='h-[300px] w-full rounded-3xl overflow-hidden'>
                  <img src={room.img} alt="" className='h-full w-full object-cover'/>
                </div>
                <div className='px-2 pt-2'>
                  <div className='text-[#E2C686] font-semibold'>{room.name}</div>
                  <div className='text-[#ffffff] text-xs mb-1 flex items-center gap-2'>{room.room} <span className='text-[#E2C686]'><MdOutlineBed/></span></div>
                  <div>
                    <ul className='flex gap-0.5 text-[#f4c018] items-center'>
                      <li><HiStar/></li>
                      <li><HiStar/></li>
                      <li><HiStar/></li>
                      <li><HiStar/></li>
                      <li className='text-xs text-[#fff] flex items-center gap-1'>( {room.visitors} <TbUsers/>)</li>
                    </ul>
                  </div>
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Room
