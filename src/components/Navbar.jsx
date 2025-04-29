import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showSmallHeader, setShowSmallHeader] = useState(false);

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
      <header className={`w-full max-w-[1400px] mx-auto fixed z-[999] top-0 left-0 right-0 flex justify-between items-center py-5 transition-all duration-500 ${showSmallHeader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Logo */}
        <div className='w-[130px]'>
          <img src={logo} alt="Logo" className='w-full h-full object-contain' />
        </div>
        {/* Menus */}
        <nav>
          <ul className='flex justify-center items-center text-[#06362E] gap-5'>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Home</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>About</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Gallery</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Room</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Contact Us</li>
          </ul>
        </nav>
        {/* Login */}
        <div className='flex items-center gap-5'>
          <button className='px-8 py-2 rounded-full bg-[#06362E] font-semibold text-[#E2C686]'>Book Room</button>
          <button className='px-8 py-2 rounded-full bg-[#231F20] font-semibold text-[#E2C686]'>Login</button>
        </div>
      </header>

      {/* Second Small Header */}
      <header className={`fixed top-5 left-0 right-0 py-3 md:flex justify-between items-center px-10 z-[998] max-w-[900px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#ffecbe] rounded-full transition-all duration-500 ${showSmallHeader ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className='w-[100px]'>
          <img src={logo} alt="Logo" className='w-full h-full object-contain' />
        </div>
        <nav>
          <ul className='flex justify-center items-center text-[#06362E] gap-5'>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Home</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>About</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Gallery</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Room</li>
            <li className='font-medium px-4 py-1.5 rounded-3xl bg-[#ffecbe]'>Contact Us</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
