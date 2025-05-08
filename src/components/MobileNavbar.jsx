import React from 'react'
import logo1 from "../assets/logo1.png"
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"
import bannerBg from "../assets/1.png"

const MobileNavbar = ({openMenu, setOpenMenu}) => {
  return (
    <motion.div
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut"}}}
    exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
    className='fixed top-0 bottom-0 left-0 flex justify-center items-center right-0 bg-[#06362E] overflow-hidden z-[9999]'>
      <div className='absolute top-0 right-0 bottom-0 left-0'>
        <img src={bannerBg} alt="" className='w-full h-full object-cover opacity-20'/>
      </div>
      <div className='text-[#E2C686] absolute top-5 right-5 text-xl' onClick={() => setOpenMenu(!openMenu)}>
        <IoClose/>
      </div>
      <header className='h-full w-full flex flex-col justify-evenly items-center gap-2 relative z-50'>
        <motion.div
          initial={{x:-100,opacity:0}}
          animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:0.3}}}
          exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
        className='w-[150px]'>
          <img src={logo1} alt="" className='w-full h-full object-contain'/>
        </motion.div>
        <nav>
        <ul className="flex flex-col justify-center text-[#E2C686] gap-2">
            <motion.a
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:0.4}}}
            exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
            href="/" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Home
              </li>
            </motion.a>
            <motion.a
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:0.5}}}
            exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
            href="/about" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                About
              </li>
            </motion.a>
            <motion.a 
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:0.6}}}
            exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
            href="/gallery" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Gallery
              </li>
            </motion.a>
            <motion.a 
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:0.7}}}
            exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
            href="/room" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Room
              </li>
            </motion.a>
            <motion.a
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:0.8}}}
            exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
            href="/contact" onClick={() => setOpenMenu(!openMenu)}>
              <li className="font-medium">
                Contact Us
              </li>
            </motion.a>
          </ul>
        </nav>
        <div className='flex flex-col justify-center items-center gap-2'>
          <motion.a
          initial={{x:-100,opacity:0}}
          animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:0.9}}}
          exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
          href="/login" onClick={() => setOpenMenu(!openMenu)}>
            <div className='px-6 py-1 rounded-lg bg-[#E2C686] text-[#06362E] font-semibold'>Login</div>
          </motion.a>
          <motion.a
          initial={{x:-100,opacity:0}}
          animate={{x:0,opacity:1,transition:{duration:1,ease:"backInOut",delay:1}}}
          exit={{x:-100,opacity:0,transition:{duration:0.3,ease:"backInOut"}}}
          href="/register" onClick={() => setOpenMenu(!openMenu)}>
            <div className='px-6 py-1 rounded-lg bg-[#E2C686] text-[#06362E] font-semibold'>Book Room</div>
          </motion.a>
        </div>
      </header>
    </motion.div>
  )
}

export default MobileNavbar
