import React, { useEffect } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import "animate.css";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add animation classes when component mounts
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((element, index) => {
      element.classList.add("animate__animated");
      element.classList.add(
        index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
      );
    });
  }, []);

  const handleViewMore = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    navigate(`/doctors`);
  };

  return (
    <>
      <div className="flex items-center justify-center px-6 md:px-10 mt-4 gap-4 flex-col">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-black font-semibold text-3xl animate__animated animate__fadeInDown">
            Top Doctors to Book
          </p>
          <p className="text-black font-sm leading-6 animate__animated animate__fadeInDown animate__delay-1s">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>

        {/* Doctors List */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-3 sm:px-0">
          {doctors.slice(0, 10).map((item, index) => (
            <div
              key={item.id}
              className={`animate-on-load flex flex-col min-w-55 border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500`}
            >
              <div className="w-full bg-[#EAEFFF] rounded-t-[12px] overflow-hidden">
                <img
                  src={item.image}
                  alt={`Doctor ${item.name}`}
                  className="object-cover w-full"
                />
              </div>
              <p className="text-green-500 px-4 text-left w-full flex items-center justify-start gap-2 mt-2">
                <span className="w-2 h-2 bg-green-500 rounded-full border-4 border-green-500"></span>
                Available
              </p>
              <p className="text-xs md:text-sm  font-tiny text-left text-gray-800 px-4 ">
                {item.name}
              </p>
              <p className="text-xs md:text-sm text-left text-gray-800 px-4 mb-4">
                {item.speciality}
              </p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={handleViewMore}
            className="w-full font-light text-center px-5 py-3 text-black bg-[#EAEFFF] rounded-full hover:scale-105 hover:bg-blue-500 transition ease-in duration-500"
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default TopDoctors;
