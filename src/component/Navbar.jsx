import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { Images } from "../assets/images";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md relative">
      {/* Top bar */}
      <div className="hidden md:flex flex-col md:flex-row md:justify-between md:items-center bg-white px-4 md:px-6 py-3 text-sm relative z-10">
        {/* Contact (Desktop) */}
        <motion.div
          className="hidden md:flex flex-row items-center space-x-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <div style={{ fontFamily: "Lexend", fontWeight: 700 }}>
              <p className="font-semibold text-[#5C0A08]">Call Us</p>
              <p className="text-black">+91 1234567890</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
              <FaEnvelope className="text-white text-lg" />
            </div>
            <div style={{ fontFamily: "Lexend", fontWeight: 700 }}>
              <p className="font-semibold text-[#5C0A08]">Mail Us</p>
              <p className="text-black">mwt2025@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Center Logo */}
        <motion.div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-white py-4 px-6 rounded-bl-2xl rounded-br-2xl shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <img
            src={Images.logo}
            alt="Midas Touch Hospitality"
            className="object-contain w-30 h-30"
          />
        </motion.div>

        {/* Socials (Desktop) */}
        <motion.div
          className="hidden md:flex items-center space-x-4 mt-4 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold text-gray-700">Follow Us:</span>
          <FaInstagram className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
          <FaLinkedinIn className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
          <FaFacebookF className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
          <FaTwitter className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
        </motion.div>
      </div>

      {/* Navbar Links */}
      <div className="bg-white md:bg-[#5C0A08] text-white px-6 py-3 flex justify-between items-center">
        <img
          src={Images.logo}
          alt="Midas Touch Hospitality"
          className="block md:hidden object-contain w-10 h-10"
        />

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-8 font-medium list-none"
          style={{ fontFamily: "Lexend", fontWeight: 500 }}
        >
          <li className="cursor-pointer hover:text-yellow-400">Home</li>
          <li className="cursor-pointer hover:text-yellow-400">About Us</li>
          <li className="cursor-pointer hover:text-yellow-400 relative group">
            Projects <span className="ml-1">▼</span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded-md min-w-[150px] list-none">
              <li className="px-4 py-2 hover:bg-gray-200">Project 1</li>
              <li className="px-4 py-2 hover:bg-gray-200">Project 2</li>
            </ul>
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex gap-12 justify-center items-center">
          <ul className="flex space-x-8 font-medium list-none">
            <li className="cursor-pointer hover:text-yellow-400">Video</li>
            <li className="cursor-pointer hover:text-yellow-400">Contact Us</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-900 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
          >
            Make a Reservation
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5C0A08] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-red-800 text-white flex flex-col justify-center items-center space-y-4 px-6 py-4 font-medium list-none"
          >
            <li className="cursor-pointer hover:text-yellow-400">Home</li>
            <li className="cursor-pointer hover:text-yellow-400">About Us</li>
            <li className="cursor-pointer hover:text-yellow-400">Projects</li>
            <li className="cursor-pointer hover:text-yellow-400">Video</li>
            <li className="cursor-pointer hover:text-yellow-400">Contact Us</li>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-900 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
            >
              Make a Reservation
            </motion.button>

            {/* Socials on Mobile */}
            <motion.div
              className="flex gap-3 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
                <FaInstagram className="text-lg cursor-pointer" />
              </div>
              <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
                <FaFacebookF className="text-lg cursor-pointer" />
              </div>
              <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
                <FaLinkedinIn className="text-lg cursor-pointer" />
              </div>
              <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
                <FaTwitter className="text-lg cursor-pointer" />
              </div>
            </motion.div>

            <motion.div
              className="flex md:flex flex-row items-center space-x-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Contact Info on Mobile */}{" "}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-8 space-y-2 sm:space-y-0 pt-4">
                {" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
                    {" "}
                    <FaPhoneAlt className="text-white text-lg" />{" "}
                  </div>{" "}
                  <div style={{ fontFamily: "Lexend", fontWeight: 700 }}>
                    {" "}
                    <p className="font-semibold text-[#FFD700]">Call Us</p>{" "}
                    <p className="text-white">+91 1234567890</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
                    {" "}
                    <FaEnvelope className="text-white text-lg" />{" "}
                  </div>{" "}
                  <div style={{ fontFamily: "Lexend", fontWeight: 700 }}>
                    {" "}
                    <p className="font-semibold text-[#FFD700]">Mail Us</p>{" "}
                    <p className="text-white">mwt2025@gmail.com</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>  
  );
};

export default Navbar;

// import React from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaInstagram,
//   FaLinkedinIn,
//   FaFacebookF,
//   FaTwitter,
// } from "react-icons/fa";
// import { Images } from "../assets/images";

// const Navbar = () => {
//   return (
//     <div className="w-full shadow-md relative">
//       <div className="flex justify-between items-center bg-white px-6 py-3 text-sm relative z-10">
//         <div className="flex items-center space-x-8">
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
//               <FaPhoneAlt className="text-white text-lg" />
//             </div>
//             <div style={{ fontFamily: "Lexend", fontWeight: 700 }}>
//               <p className="font-semibold text-[#5C0A08]">Call Us</p>
//               <p className="text-black">+91 1234567890</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-red-800 flex justify-center items-center rounded-full">
//               <FaEnvelope className="text-white text-lg" />
//             </div>
//             <div style={{ fontFamily: "Lexend", fontWeight: 700 }}>
//               <p className="font-semibold text-[#5C0A08]">Mail Us</p>
//               <p className="text-black">mwt2025@gmail.com</p>
//             </div>
//           </div>
//         </div>

//         <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-white py-4 px-6 rounded-bl-2xl rounded-br-2xl shadow">
//           <img
//             src={Images.logo}
//             alt="Midas Touch Hospitality"
//             className="object-contain w-30 h-30"
//           />
//         </div>

//         <div className="flex items-center space-x-4">
//           <span className="font-semibold text-gray-700">Follow Us:</span>
//           <FaInstagram className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
//           <FaLinkedinIn className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
//           <FaFacebookF className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
//           <FaTwitter className="text-red-800 text-lg cursor-pointer hover:text-red-600" />
//         </div>
//       </div>

//       <div className="bg-red-900 text-white px-6 py-3 flex justify-between items-center">
//         <ul className="flex space-x-8 font-medium" style={{ fontFamily: "Lexend", fontWeight: 500 }}>
//           <li className="cursor-pointer hover:text-yellow-400" >Home</li>
//           <li className="cursor-pointer hover:text-yellow-400">About Us</li>
//           <li className="cursor-pointer hover:text-yellow-400 relative group">
//             Projects <span className="ml-1">▼</span>
//             <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded-md min-w-[150px]">
//               <li className="px-4 py-2 hover:bg-gray-200">Project 1</li>
//               <li className="px-4 py-2 hover:bg-gray-200">Project 2</li>
//             </ul>
//           </li>
//         </ul>

//         <div className="flex gap-12 justify-center items-center">
//           <ul className="flex space-x-8 font-medium">
//             <li className="cursor-pointer hover:text-yellow-400">Video</li>
//             <li className="cursor-pointer hover:text-yellow-400">Contact Us</li>
//           </ul>
//           <button className="bg-white text-red-900 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition">
//             Make a Reservation
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
