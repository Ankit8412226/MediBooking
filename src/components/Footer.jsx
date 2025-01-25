import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 lg:px-20 gap-12">
        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-6">
          <img src={assets.logo} alt="Medibooking logo" className="w-32 mb-2" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Medibooking - Your Trusted Platform for Booking Doctors Anytime,
            Anywhere. Medibooking revolutionizes the way you access healthcare
            services.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Services
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div className="flex flex-col gap-4 text-gray-600">
            <p>Email: support@medibooking.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Healthcare St, Medical City</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-6 border-t text-gray-500">
        © {new Date().getFullYear()} Medibooking. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
