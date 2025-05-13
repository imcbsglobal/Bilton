import React,{useState, useEffect} from 'react'
import { IoClose } from "react-icons/io5";
import { SlLock } from "react-icons/sl";

const CheckBookingConfirmation = () => {
    const [openConfirmPopUp, setOpenConfirmPopUp] = useState(false)

  return (
    <div className='pt-[130px] mb-10 flex justify-center items-center w-full'>
      <section className='w-full px-2'>
        <div className='max-w-[700px] rounded-3xl w-full px-2 mx-auto flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.1)] justify-center items-center h-[500px] bg-[#fff] border-2 border-[#E2C686]'>
            <div className='text-center font-bold boldText mb-2 text-3xl'>Finish Your Booking</div>
            <div className='px-10 text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis dolor quidem possimus in sunt labore consequatur. Laudantium voluptas, neque quidem mollitia alias quam, corrupti magni natus suscipit ad aperiam.</div>
            <div className='flex justify-center gap-2 md:gap-10'>
                <button className='py-2 px-6 text-sm md:text-base rounded-lg bg-[#06362E] text-[#E2C686] font-semibold cursor-pointer' onClick={() => setOpenConfirmPopUp(!openConfirmPopUp)}>Check your booking</button>
                <a href="/payment">
                  <button className='py-2 px-6 text-sm md:text-base rounded-lg bg-[#06362E] text-[#E2C686] font-semibold cursor-pointer'>Complete booking</button>
                </a>
            </div>
        </div>
      </section>
      {openConfirmPopUp && (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-[#00000095] z-[9999] h-screen backdrop-blur-sm'>
            <div className='max-w-[700px] relative mx-auto bg-[#ffff] border-4 border-[#E2C686] py-10 px-10 w-full h-[400px] rounded-3xl'>
                <div className='absolute right-5 top-5 text-3xl cursor-pointer' onClick={() => setOpenConfirmPopUp(!openConfirmPopUp)}>
                    <IoClose/>
                </div>
                <div className='text-center font-bold text-2xl boldText mb-5 text-[#06362E]'>Your Booking Summary</div>
                <div className='grid grid-cols-2 mt-3 gap-5 max-w-[400px] mx-auto'>
                  {/* Check In */}
                  <div className=" px-5 py-3 bg-[#fff] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-2xl border-2 border-[#E2C686]">
                    <label className="text-[11px] text-[#515151]">
                      Check-In
                    </label>
                    <div>Sat 11 Oct 2025</div>
                    <span className="text-xs text-[#515151]">
                      12:30 - 20:00
                    </span>
                  </div>
                  {/* Check Out */}
                  <div className="px-5 py-3 bg-[#fff] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-2xl border-2 border-[#E2C686]">
                    <label className="text-[11px] text-[#515151]">
                      Check-In
                    </label>
                    <div>Sat 10 Oct 2025</div>
                    <span className="text-xs text-[#515151]">
                      12:30 - 20:00
                    </span>
                  </div>
                </div>
                <div className='mt-3 text-sm mb-10 text-center font-medium'>Total length of stay</div>
                <div className='flex justify-center items-center'>
                    <button onClick={() => setOpenConfirmPopUp(!openConfirmPopUp)} className='flex cursor-pointer items-center justify-center gap-2 px-4 py-2 bg-[#edd395] font-semibold text-[#06362E] rounded-lg'><SlLock/>Looks good, complete your booking!</button>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default CheckBookingConfirmation
