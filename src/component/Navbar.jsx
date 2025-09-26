import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { Images } from "../assets/images";

const Navbar = () => {
  return (
    <div className="w-full shadow-md relative">
      <div className="flex justify-between items-center bg-white px-6 py-3 text-sm relative z-10">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Call Us</p>
              <p className="text-gray-600">+91 1234567890</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
              <FaEnvelope className="text-white text-lg" />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Mail Us</p>
              <p className="text-gray-600">mwt2025@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-white py-4 px-6 rounded-bl-2xl rounded-br-2xl shadow">
          <img
            src={Images.logo}
            alt="Midas Touch Hospitality"
            className="object-contain w-30 h-30"
          />
        </div>

        <div className="flex items-center space-x-4">
          <span className="font-semibold text-gray-700">Follow Us:</span>
          <FaInstagram className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
          <FaLinkedinIn className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
          <FaFacebookF className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
          <FaTwitter className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
        </div>
      </div>

      <div className="bg-red-900 text-white px-6 py-3 flex justify-between items-center">
        <ul className="flex space-x-8 font-medium">
          <li className="cursor-pointer hover:text-yellow-400">Home</li>
          <li className="cursor-pointer hover:text-yellow-400">About Us</li>
          <li className="cursor-pointer hover:text-yellow-400 relative group">
            Projects <span className="ml-1">▼</span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded-md min-w-[150px]">
              <li className="px-4 py-2 hover:bg-gray-200">Project 1</li>
              <li className="px-4 py-2 hover:bg-gray-200">Project 2</li>
            </ul>
          </li>
        </ul>

        <div className="flex gap-12 justify-center items-center">
          <ul className="flex space-x-8 font-medium">
            <li className="cursor-pointer hover:text-yellow-400">Video</li>
            <li className="cursor-pointer hover:text-yellow-400">Contact Us</li>
          </ul>
          <button className="bg-white text-red-900 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
