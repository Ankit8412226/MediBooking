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

  const [token, setToken] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-300 flex items-center justify-between p-4 bg-white">
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <img src={assets.logo} alt="Neurologist" className="h-10" />
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center justify-center space-x-8">
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
      </nav>

      {/* Profile / Account Section */}
      <div className="flex items-center justify-center">
        {token ? (
          <div className="relative group w-12 flex items-center cursor-pointer">
            <img
              src={assets.profile_pic}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <img
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
              className="ml-2 w-4 h-4"
            />
            {/* Dropdown Menu */}
            <div className="absolute top-14 right-0 bg-[#F8F8F8] shadow-md rounded-md w-40 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
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
        ) : (
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg">
            Create Account
          </button>
        )}
        <div className="md:hidden flex items-center justify-center p-5">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={assets.menu_icon} alt="menu icon" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="bg-white w-64 h-full p-4 shadow-lg flex flex-col">
            <button
              className="self-end mb-4"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={assets.cross_icon}
                alt="close menu"
                className="w-6 h-6"
              />
            </button>
            {navigationItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="text-gray-700 cursor-pointer text-base font-bold py-2 hover:bg-gray-100 transition-all"
                onClick={() => setMenuOpen(false)} // Close menu on navigation
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
