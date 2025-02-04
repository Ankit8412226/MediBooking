import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, Calendar, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navigationItems = [
    { name: "HOME", path: "/" },
    { name: "ALLDOCTORS", path: "/AllDoctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [token, setToken] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    setToken(false);
    // Add your logout logic here
  };

  const MobileNavigation = () => (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween" }}
          className="fixed inset-0 bg-white z-50 md:hidden"
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <img src={assets.logo} alt="Neurologist" className="h-8" />
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col py-4">
              {navigationItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-3 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Profile Section in Sidebar */}
            {token ? (
              <div className="mt-auto border-t">
                <div className="p-4">
                  <div className="flex items-center space-x-3 px-6 py-3">
                    <img
                      src={assets.profile_pic}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-gray-500">john@example.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <button className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50">
                      <User className="w-5 h-5 mr-3" />
                      My Profile
                    </button>
                    <button className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50">
                      <Calendar className="w-5 h-5 mr-3" />
                      My Appointments
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-6 py-3 text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-auto p-4 border-t">
                <button
                  onClick={handleLoginClick}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="w-full border-b border-gray-300 bg-white fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-10 ">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full md:hidden"
          >
            <Menu className="w-6 text-gray-600" />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img src={assets.logo} alt="Neurologist" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 transition-all"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Profile/Login */}
          <div className="hidden md:block">
            {token ? (
              <div className="relative">
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-2"
                >
                  <img
                    src={assets.profile_pic}
                    alt="Profile"
                    className="w-8  rounded-full"
                  />
                  <ChevronDown className="w-4  text-gray-600" />
                </button>

                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border"
                    >
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center">
                        <User className="w-4  mr-2" />
                        My Profile
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center">
                        <Calendar className="w-4  mr-2" />
                        My Appointments
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center text-red-600"
                      >
                        <LogOut className="w-4  mr-2" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={handleLoginClick}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <MobileNavigation />

      {/* Overlay for mobile navigation */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Header;
