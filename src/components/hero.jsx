import React, { useRef } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Hero = () => {
  const pageRef = useRef(null);

  const handleScroll = () => {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      ref={pageRef}
      className="w-full flex flex-col md:flex-row bg-primary rounded-lg items-center justify-between mt-6 gap-4  md:px-10 "
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left p-8 md:px-10 md:m-auto">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex w-full flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 0 ">
          <img src={assets.group_profiles} alt="group" className="w-20" />
          <p className="text-white text-sm w-full leading-4  ">
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <div className="flex items-center md:items-start justify-center md:justify-start w-full">
          <button
            onClick={handleScroll}
            className="bg-white  px-8 py-3 text-gray-600 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-500 m-auto md:m-0"
          >
            Book appointment
            <img src={assets.arrow_icon} alt="arrow icon" />
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex items-end justify-center">
        <img
          src={assets.header_img}
          alt="Header image"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
