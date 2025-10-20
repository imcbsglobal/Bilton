import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import MobileNavbar from './MobileNavbar';
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [showSmallHeader, setShowSmallHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // You can adjust 100 to control when it switches
        setShowSmallHeader(true);
      } else {
        setShowSmallHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* First Header */}
      <header
        className={`w-full md:px-5 px-2 max-w-[1400px] mx-auto fixed z-[999] top-0 left-0 right-0 flex justify-between items-center py-5 transition-all duration-500 ${
          showSmallHeader ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Logo - MATCHING SHADed PILL AS MENU */}
        <div className="px-4 py-1.5 rounded-3xl bg-[#ffecbe] flex items-center justify-center">
          {/* Increase width so logo fits nicely */}
          <div className="w-[150px]">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        {/* Menus */}
        <nav className="hidden lg:flex">
          <ul className="flex justify-center items-center text-[#06362E] gap-5">
            <a href="/">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">
                Home
              </li>
            </a>
            <a href="/about">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">
                About
              </li>
            </a>
            <a href="/gallery">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">
                Gallery
              </li>
            </a>
            <a href="/room">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">
                Room
              </li>
            </a>
            <a href="/contact">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">
                Contact Us
              </li>
            </a>
          </ul>
        </nav>
        {/* Login */}
        <div className="items-center gap-5 hidden lg:flex">
          <a href="#">
            <button className="px-8 py-2 rounded-full cursor-pointer bg-[#06362E] font-semibold text-[#E2C686]">
              Book Room
            </button>
          </a>
          <a href="/login">
            <button className="px-8 py-2 cursor-pointer rounded-full bg-[#231F20] font-semibold text-[#E2C686]">
              Login
            </button>
          </a>
        </div>

        <div
          className="text-3xl text-[#06362E] lg:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <RiMenu3Line />
        </div>
      </header>

      {/* Second Small Header */}
      <header
        className={`fixed top-0 left-0 right-0 py-5 flex justify-between items-center px-10 z-[998] 
shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#ffecbe] rounded-none transition-all duration-500 ${
  showSmallHeader ? "opacity-100" : "opacity-0 pointer-events-none"
}`}
      >
        {/* small header logo with same shade */}
        <div className="px-3 py-1 rounded-3xl bg-[#ffecbe] flex items-center justify-center">
          <div className="w-[100px]">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex justify-center items-center text-[#06362E] gap-5">
            <a href="/">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">Home</li>
            </a>
            <a href="/about">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">About</li>
            </a>
            <a href="/gallery">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">Gallery</li>
            </a>
            <a href="/room">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">Room</li>
            </a>
            <a href="/contact">
              <li className="font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]">Contact Us</li>
            </a>
          </ul>
        </nav>

        {/* Contact Details */}
        <div className="hidden lg:flex flex-col text-[#06362E] text-sm mr-5">
          <span>Email: info@biltonhotel.com</span>
          <span>Phone: +91 88844 11190</span>
        </div>

        <div
          className="lg:hidden text-[#06362E] text-2xl"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <RiMenu3Line />
        </div>
      </header>


      {/* Mobile Navbar */}
      {openMenu && (
        <div>
          <MobileNavbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
