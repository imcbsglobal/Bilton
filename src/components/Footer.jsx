import React from "react";
import logo1 from "../assets/logo1.png";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10 bg-[#06362E]">
      <div className="max-w-[1200px] mb-10 mx-auto flex justify-center md:justify-between flex-wrap gap-10 px-10">
        {/* Left menus */}
        <div className="flex flex-wrap justify-center gap-10 lg:gap-40 xl:gap-52 text-[#E2C686]">
          <div>
            <div className="font-bold text-lg">Company</div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Room</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-lg">Company</div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Room</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-lg">Company</div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Room</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-5 md:items-end items-center text-[#E2C686]">
          {/* Contact buttons */}
          <div className="flex md:items-start items-center justify-center gap-5">
            <div className="py-3 px-5 text-xs md:text-base border border-[#E2C686] text-[#fff]">
              Contact Sales
            </div>
            <div className="py-3 px-5 text-xs md:text-base border border-[#E2C686] text-[#fff]">
              Contact Support
            </div>
          </div>

          {/* Email + Address */}
          <div className="flex flex-col gap-1 text-center md:text-right text-sm">
            <div>Email: info@biltonhotel.com</div>
            <div>Phone: +91 88844 11190</div>
            <div>61, Lakkasandra Bus Stop, </div>
            <div>13th Cross, Hosur main Road</div>
            <div>Wilson Garden, Bengaluru-560027</div>

          </div>

          {/* Logo */}
          <div className="w-[200px]">
            <img
              src={logo1}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t max-w-[1200px] pt-5 flex justify-between px-2 gap-5 mx-auto border-[#fff] w-full">
        <div className="flex gap-5">
          <div className="text-[#E2C686]">Privacy</div>
          <div className="text-[#E2C686]">Policy</div>
        </div>
        <div>
          <ul className="flex gap-2 items-center text-[#E2C686]">
            <li>
              <IoLogoInstagram />
            </li>
            <li>
              <RiFacebookCircleLine />
            </li>
            <li>
              <FaWhatsapp />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
