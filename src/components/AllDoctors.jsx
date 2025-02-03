import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";

const AllDoctors = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [activeSpecialty, setActiveSpecialty] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const speciality = new URLSearchParams(location.search).get("speciality");

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist",
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      setActiveSpecialty(speciality);
    } else {
      setFilterDoc(doctors);
      setActiveSpecialty("");
    }
  };

  useEffect(() => applyFilter(), [speciality]);

  const handleSpecialtyClick = (specialty) => {
    if (activeSpecialty === specialty) {
      navigate("?");
      setActiveSpecialty("");
      setFilterDoc(doctors);
    } else {
      navigate(`?speciality=${specialty}`);
      setActiveSpecialty(specialty);
      setFilterDoc(doctors.filter((doc) => doc.speciality === specialty));
    }
  };

  const handleNavigate = (id) => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    navigate(`/appointment/${id}`);
  };

  return (
    <div className="w-full gap-y-6 flex flex-col items-start justify-center">
      {/* Mobile Header - Only visible on small screens */}
      <div className="sm:hidden w-full">
        <div className="flex items-center justify-between text-sm py-4 mb-2 border-b border-b-[#ADADAD]">
          <p className="text-gray-600">
            Browse through the doctors specialist.
          </p>
          <button
            className="py-1 px-3 border rounded text-sm transition-all"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filters
          </button>
        </div>

        {/* Mobile Filters */}
        <div
          className={`flex flex-col gap-4 text-sm mb-6 ${
            !isFilterOpen && "hidden"
          }`}
        >
          {specialties.map((specialty) => (
            <div
              key={specialty}
              onClick={() => handleSpecialtyClick(specialty)}
              className={`
                w-full px-3 py-1 border rounded cursor-pointer transition-all
                ${
                  activeSpecialty === specialty
                    ? "text-primary border-primary bg-primary/5"
                    : "text-gray-600 border-gray-300"
                }
              `}
            >
              {specialty}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Hidden on small screens */}
      <p className="hidden sm:block text-lg text-gray-600 font-medium mt-2">
        Browse through the doctors specialists.
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Desktop Sidebar - Hidden on small screens */}
        <div className="hidden sm:block col-span-1 text-gray-600 text-sm">
          {specialties.map((specialty) => (
            <p
              key={specialty}
              onClick={() => handleSpecialtyClick(specialty)}
              className={`
                mb-2 pl-3 pr-6 pt-1 pb-1 border rounded transition-all cursor-pointer
                ${
                  activeSpecialty === specialty
                    ? "border-blue-500 text-blue-600"
                    : "border-gray-300 hover:bg-gray-50"
                }
              `}
            >
              {specialty}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="col-span-1 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filterDoc.map((item) => (
            <div
              key={item._id}
              className="flex flex-col border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              onClick={() => handleNavigate(item._id)}
            >
              <div className="w-full bg-[#EAEFFF] rounded-t-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={`Doctor ${item.name}`}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-green-500 px-4 text-left w-full flex items-center gap-2 mt-2">
                <span className="w-2 h-2 bg-green-500 rounded-full border-4 border-green-500" />
                Available
              </p>
              <p className="text-sm font-medium text-left text-gray-800 px-4">
                {item.name}
              </p>
              <p className="text-sm text-left text-gray-600 px-4 mb-4">
                {item.speciality}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
