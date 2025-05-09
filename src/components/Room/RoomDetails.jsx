import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyRupee } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { BiWifi } from "react-icons/bi";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { SlSizeFullscreen } from "react-icons/sl";

const RoomDetails = () => {
  return (
    <div className="pt-[130px] overflow-hidden px-2">
      <section className="mb-10">
        <div className="max-w-[1300px] w-full mx-auto md:flex md:justify-center gap-5">
            {/* Left */}
          <div className="w-full md:w-[80%]">
            <div className="w-full gap-2 md:gap-5 mb-5">
              <div className="w-full md:flex justify-center items-center gap-2 md:gap-5">
                <div className="h-[400px] w-full md:w-[70%] bg-[#000] rounded-3xl overflow-hidden mb-2 md:mb-0">
                  <img
                    src="https://img.alicdn.com/imgextra/i4/6000000000812/O1CN01BARJPO1HrwMP7c8oA_!!6000000000812-0-tbvideo.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[30%] gap-2 md:gap-5 flex flex-col">
                  <div className="w-full h-[190px] bg-[#000] rounded-3xl overflow-hidden">
                    <img
                      src="https://img.alicdn.com/imgextra/i3/6000000004147/O1CN015jojJ21gVMxjbBBZI_!!6000000004147-0-tbvideo.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-[190px] bg-[#000] rounded-3xl overflow-hidden">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=b7a4c95f306bc28f0e7ea80fb05b69f4649a7444-7663003-images-thumbs&ref=rim&n=33&w=375&h=250"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
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
                Master Bedroom
              </div>
              <div className="max-w-[900px] text-[#06362E]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                animi. Fugiat, doloremque eveniet incidunt consequatur quaerat
                veniam vel nobis cum veritatis maxime, dignissimos nostrum sunt,
                maiores provident error. Provident, neque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusantium vero temporibus odit excepturi aliquid corporis eum ipsam, consectetur molestias, reiciendis eligendi laboriosam saepe aliquam ipsum, at voluptate quia delectus.
              </div>
            </div>
            {/* Features */}
            <div>
                <div className="font-bold text-xl boldText mb-2 text-center md:text-start">Hotel Features</div>
                <div className="flex justify-center mb-5 md:mb-0 md:justify-start">
                    <ul className="grid grid-cols-2 md:flex items-center gap-3">
                        <li className="flex items-center gap-2 text-lg px-4 py-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <span><BiWifi/></span>
                            <span>Wi-Fi</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg px-4 py-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <span><LuBedDouble/></span>
                            <span>Kings Bed</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg px-4 py-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <span><PiBathtub/></span>
                            <span>Bathtub</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg px-4 py-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <span><ImSpoonKnife/></span>
                            <span>Breakfast</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg px-4 py-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <span><SlSizeFullscreen/></span>
                            <span>4m x 6m</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full md:w-[20%] bg-[#06362E] h-[600px] rounded-3xl shadow-sm py-10 px-2">
            <div className="text-center font-semibold mb-5 text-[#E2C686]">
              Master Double Bed Room
            </div>
            <div className="flex justify-between w-full mb-5">
              <div>
                <label className="text-sm text-[#fff]">Check-In</label>
                <div className="px-4 py-2 rounded-xl bg-[#E2C686] text-[#06362E] mt-2 font-semibold">
                  Oct 7, 2025
                </div>
              </div>
              <div>
                <label className="text-sm text-[#fff]">Check-Out</label>
                <div className="px-4 py-2 rounded-xl bg-[#E2C686] text-[#06362E] mt-2 font-semibold">
                  Oct 7, 2025
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
                        <div className="font-semibold">1 Nights</div>
                        <span className="flex items-center font-semibold"><TbCurrencyRupee/>2500</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="font-semibold">Discount</div>
                        <span className="flex items-center font-semibold"><TbCurrencyRupee/>25%</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="font-semibold">Breakfast</div>
                        <span className="flex items-center font-semibold"><TbCurrencyRupee/>500</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="font-semibold">Service Fee</div>
                        <span className="flex items-center font-semibold"><TbCurrencyRupee/>300</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mb-5">
                <div className="text-[#fff]">Total Payment</div>
                <div className="flex items-center text-[#E2C686] font-bold">
                    <TbCurrencyRupee/>3000
                </div>
            </div>
            <a href="/CheckBookingConfirmation">
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
