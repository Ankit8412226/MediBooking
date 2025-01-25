import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigationItems = [
    { name: "HOME", path: "/" },
    { name: "ALLDOCTORS", path: "/doctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [token, setToken] = useState(false); // Correcting the state setter name
  const [menu, setShowmenu] = useState(false); // Correcting the state setter

  return (
    <div className="w-full border-b border-gray-300 flex items-center justify-between p-4 bg-white  z-999  ">
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <img src={assets.logo} alt="Neurologist" className="h-10" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center justify-center space-x-8 m-2">
        {navigationItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-gray-700 cursor-pointer text-base font-bold underline underline-offset-4 decoration-blue-700 w-max"
                : "text-gray-700 cursor-pointer text-base font-bold hover:text-blue-600 transition-all"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Profile/Account Button */}
      <div className="flex items-center justify-center mr-4">
        {token ? (
          <div className="relative group w-12 flex items-center cursor-pointer gap-2">
            <img
              src={assets.profile_pic}
              alt="Profile"
              className=" rounded-full"
            />
            <img src={assets.dropdown_icon} alt="Dropdown Icon" />

            {/* Dropdown Menu */}
            <div className="absolute top-14 right-0 bg-[#F8F8F8] shadow-md rounded-md w-40 py-2 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20">
              <div className="flex flex-col text-gray-700 text-sm">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray hover:text-black-600 cursor-pointer">
                  My Profile
                </button>

                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  My Appointments
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg hidden md:block">
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
