import React from 'react'
import { TbCurrencyRupee } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { MdCreditCardOff } from "react-icons/md";
import { IoCloudDone } from "react-icons/io5";

const Checkout = () => {
  return (
    <div className="pt-[130px]">
      <section className="mb-10">
        <div className="w-full max-w-[1300px] mx-auto md:flex justify-center items-center gap-5">
          <div className="w-full md:w-[75%] h-[800px] shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-[#ffffff] border border-[#ffed94] rounded-3xl py-10 px-10">
            <div className="text-3xl boldText mb-5 text-[#06362E]">
              Enter Your Details
            </div>
            <div className="px-5 py-2 rounded-lg border border-[#ffed94] bg-[#06362E] text-[#fff] mb-5">
              Almost done ! Just fill in the required{" "}
              <span className="text-[#f00]">*</span> info
            </div>
            <div>
              <form action="" className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your first name"
                      className="w-full mt-2 rounded-lg px-6 py-2 outline-none border-none bg-[#f0f0f0]"
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your last name"
                      className="w-full mt-2 rounded-lg px-6 py-2 outline-none border-none bg-[#f0f0f0]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label>E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your e-mail address"
                      className="w-full mt-2 rounded-lg px-6 py-2 outline-none border-none bg-[#f0f0f0]"
                    />
                  </div>
                  <div>
                    <label>Country / Region</label>
                    <input
                      type="text"
                      required
                      placeholder="Select your country / region"
                      className="w-full mt-2 rounded-lg px-6 py-2 outline-none border-none bg-[#f0f0f0]"
                    />
                  </div>
                </div>
                <div className="border-b border-[#ffed94] pb-6">
                  <label>Phone Number</label>
                  <div className="flex items-center w-full gap-2 mt-2">
                    <div className="py-2 px-2 bg-[#f0f0f0] whitespace-nowrap rounded-lg">
                      In +91
                    </div>
                    <input
                      type="number"
                      className="px-6 py-2 outline-none border-none rounded-lg bg-[#f0f0f0] w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-2">
                    Who are you booking for ?
                  </div>
                  <label className="flex gap-2">
                    <input type="radio" name="booking" value="main-guest" />
                    I'm the main guest
                  </label>
                  <label className="flex gap-2">
                    <input type="radio" name="booking" value="main-guest" />
                    Booking is for someone else
                  </label>
                </div>
                {/* Good to Know */}
                <div className='mt-1'>
                    <div className='font-semibold mb-2'>Good to know :</div>
                    <div className=''>
                        <div className='flex items-center gap-5'><span className='text-[#06362E]'><MdCreditCardOff/></span>No credit card needed</div>
                        <div className='flex items-center gap-5'><span className='text-[#06362E]'><IoCloudDone/></span>Stay flexible : You can cancel for free at any time, so lock in this great price today.</div>
                        <div className='flex items-center gap-5'><span className='text-[#06362E]'><IoCloudDone/></span>No payment is required to secure this booking. You'll pay during stay.</div>
                    </div>
                </div>
                {/* Submit Button */}
                <div className='mt-5 flex justify-center items-center w-full'>
                    <button className='w-full py-2 px-5 bg-[#06362E] rounded-lg text-[#E2C686] font-bold'>Submit</button>
                </div>
              </form>
            </div>
          </div>
          {/* Right */}
          <div className="w-full md:w-[25%] h-[800px] bg-[#ffed94] rounded-3xl">
            <div className="w-full h-[250px] rounded-3xl overflow-hidden mb-2">
              <img
                src="https://avatars.mds.yandex.net/i?id=e43a3b6c87037a05e118e32ee197d6007d374d02-5888427-images-thumbs&ref=rim&n=33&w=375&h=250"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2">
              <div className="text-xs text-[#06362E] font-semibold">
                Booking for
              </div>
              <div className="text-2xl mb-1 font-semibold text-[#131212]">
                Master Bed Room
              </div>
              <div className="flex items-center gap-5 mb-3">
                <div className="px-2 py-2 rounded-lg bg-[#ffffff] text-[#96c800] font-semibold">
                  5.0
                </div>
                <div className="font-semibold">Perfect</div>
                <ul className="flex items-center text-[#060606]">
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
              {/* Booking Details */}
              <div className="bg-[#fff] mb-3 w-full px-5 rounded-3xl py-5">
                <div className="font-semibold">Your booking details</div>
                <div className='grid grid-cols-2 mt-3 gap-3'>
                  {/* Check In */}
                  <div className="border-r border-[#0000003d]">
                    <label className="text-[11px] text-[#515151]">
                      Check-In
                    </label>
                    <div>Sat 11 Oct 2025</div>
                    <span className="text-xs text-[#515151]">
                      12:30 - 20:00
                    </span>
                  </div>
                  {/* Check Out */}
                  <div className="">
                    <label className="text-[11px] text-[#515151]">
                      Check-In
                    </label>
                    <div>Sat 10 Oct 2025</div>
                    <span className="text-xs text-[#515151]">
                      12:30 - 20:00
                    </span>
                  </div>
                </div>
                <div className='mt-3 text-sm'>Total length of stay</div>
                <span className='font-semibold'>1 night</span>
                {/* Selected Members */}
                <div className='mt-3'>
                    <label className='text-sm'>You selected</label>
                    <div className='font-semibold'>1 room for 2 adults</div>
                </div>
              </div>
              {/* Price Summary */}
              <div className='bg-[#fff] overflow-hidden mb-2 w-full rounded-3xl py-5'>
                <div className='font-semibold mb-2 px-5'>Your price summary</div>
                <div className='w-full px-5 text-2xl py-2 bg-[#06362E] flex justify-between'>
                    <span className='text-[#E2C686] font-semibold'>Price</span>
                    <div className='flex items-center'>
                        <span className='text-[#E2C686]'><TbCurrencyRupee/></span>
                        <span className='text-[#E2C686] font-bold'>3,000</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout
