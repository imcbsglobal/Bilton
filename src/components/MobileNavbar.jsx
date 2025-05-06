import React from 'react'
import logo1 from "../assets/logo1.png"
import { IoClose } from "react-icons/io5";


const MobileNavbar = ({openMenu, setOpenMenu}) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 flex justify-center items-center right-0 bg-[#06362E] overflow-hidden z-[9999]'>
      <div className='text-[#E2C686] absolute top-5 right-5 text-xl' onClick={() => setOpenMenu(!openMenu)}>
        <IoClose/>
      </div>
      <header className='h-full w-full flex flex-col justify-evenly items-center gap-2'>
        <div className='w-[150px]'>
          <img src={logo1} alt="" className='w-full h-full object-contain'/>
        </div>
        <nav>
        <ul className="flex flex-col justify-center text-[#E2C686] gap-2">
            <a href="/" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Home
              </li>
            </a>
            <a href="/about" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                About
              </li>
            </a>
            <a href="/gallery" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Gallery
              </li>
            </a>
            <a href="/room" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Room
              </li>
            </a>
            <a href="" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Contact Us
              </li>
            </a>
          </ul>
        </nav>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='px-6 py-1 rounded-lg bg-[#E2C686] text-[#06362E] font-semibold'>Login</div>
          <div className='px-6 py-1 rounded-lg bg-[#E2C686] text-[#06362E] font-semibold'>Book Room</div>
        </div>
      </header>
    </div>
  )
}

export default MobileNavbar
