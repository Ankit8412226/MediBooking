import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const handleClick = (speciality) => {
    navigate(`/AllDoctors?speciality=${speciality}`);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-10 md:py-16 max-w-[100vw]">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <p className="text-3xl text-center md:text-4xl lg:text-4xl font-bold">
          Find by Speciality
        </p>
        <p className="text-center text-sm font-sm md:leading-5">
          Simply browse through our extensive list of trusted doctors
          <br />
          schedule your appointment hassle-free
        </p>

        <div className="w-full overflow-x-auto flex items-center justify-center">
          <div className="flex items-center justify-start gap-6 pb-4 mt-4">
            {specialityData.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer 
                  flex items-center justify-center flex-col 
                  transition-all duration-300 
                  hover:translate-y-[-10px] rounded-lg 
                  p-2  "
              >
                <div ref={ref} className="overflow-hidden rounded-full mb-2">
                  <img
                    src={item.image}
                    alt={item.speciality}
                    className="w-16  md:w-20  
                      transform transition-transform duration-300 
                      group-hover:scale-110"
                  />
                </div>
                <p
                  onClick={() => handleClick(item.speciality)}
                  className="text-sm text-center group-hover:text-blue-600"
                >
                  {item.speciality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default SpecialityMenu;
