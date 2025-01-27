import React, { useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";

const AllDoctors = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <p className="text-center text-lg font-medium mb-4">
          Browse through the doctors specialist.
        </p>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
          {/* Filters Section */}
          <div className="w-full lg:w-1/4">
            <p
              className="lg:hidden bg-blue-100 px-4 py-2 rounded-md text-blue-800 cursor-pointer"
              onClick={toggleFilter}
            >
              {filterOpen ? "Hide Filters" : "Show Filters"}
            </p>

            {/* Filters list */}
            <div
              className={`flex flex-col gap-3 mt-4 ${
                filterOpen ? "block" : "hidden"
              } lg:block`}
            >
              <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-blue-100">
                General Physician
              </button>
              <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-blue-100">
                Gynecologist
              </button>
              <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-blue-100">
                Dermatologist
              </button>
              <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-blue-100">
                Pediatricians
              </button>
              <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-blue-100">
                Neurologist
              </button>
              <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-blue-100">
                Gastroenterologist
              </button>
            </div>
          </div>

          {/* Doctors List */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctors.slice(0, 10).map((item) => (
              <div
                key={item.id}
                className="flex flex-col border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-full bg-blue-50 rounded-t-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Doctor ${item.name}`}
                    className="object-cover w-full"
                  />
                </div>
                <p className="text-green-600 mt-2 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full border-4 border-green-600"></span>
                  Available
                </p>
                <p className="text-base font-semibold mt-2">{item.name}</p>
                <p className="text-sm text-gray-500">{item.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDoctors;
