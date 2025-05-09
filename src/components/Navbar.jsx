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
        {/* Logo */}
        <div className="w-[130px]">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
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
          <a href="/roomDetail">
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
        className={`fixed top-5 left-0 right-0 py-5 flex justify-between items-center px-10 z-[998] max-w-[900px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#ffecbe] rounded-full transition-all duration-500 ${
          showSmallHeader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[100px]">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
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
