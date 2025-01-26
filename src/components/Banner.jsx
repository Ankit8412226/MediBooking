import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/register");
    // TODO: Implement create account logic here
  };
  return (
    <div className="bg-primary w-full h-full px-6 md:px-10 lg:px-20 mt-4 rounded-lg flex items-center justify-between flex-wrap md:flex-nowrap flex-col md:flex-row lg:flex-row min-h-[16rem] py-16 relative">
      <div className="flex items-center justify-center w-full flex-col gap-6">
        <p className="text-4xl font-bold text-white w-full text-center md:text-left">
          Book Appointment <br />
          With 100+ Trusted Doctors
        </p>

        <div className="mt-6 md:mt-4 w-full flex flex-start">
          <button
            onClick={handleCreateAccount}
            className="bg-white px-8 py-3 text-gray-600 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-500 m-auto md:m-0"
          >
            Create Account
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-36 md:w-76 lg:w-1/4">
        <img
          src={assets.appointment_img}
          alt="Appointment"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
