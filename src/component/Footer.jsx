import React from "react";
import { Images } from "../assets/images";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaAngleRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const quickLink = ["Home", "About Us", "Projects", "Video", "Contact Us"];
  const ourProjacts = [
    "Blue Horizon Khed Shivapur",
    "Delight Beach Resort Diveagar",
    "Delight Beach Villa",
    "Villa 4 BHK Diveagar",
    "Villa 4 BHK Panshet",
    "Villa 4 BHK Sinhagad",
  ];

  const contactUs = [
    {
      icon: <MdLocationOn />,
      title: "Address",
      dec: "928, Iconic Shyamal, Shyamal Cross Road, Shyamal Ahmedabad - 380015",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Mobile",
      dec: "+91 97247 813373",
    },
    {
      icon: <TfiEmail />,
      title: "Email",
      dec: "info@mayurwebtech.com",
    },
  ];

  return (
    <footer className="bg-[#f8f8f8]">
      {/* Top Section */}
      <div className="w-full mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 md:10 mb-10">
        {/* Logo + About */}
        <div className="py-10 flex flex-col justify-center items-center sm:block">
          <img src={Images.logo} alt="Logo" className="w-28 h-auto mb-5" />
          <p
            style={{ fontFamily: "Jost", fontWeight: 500 }}
            className="text-sm leading-relaxed text-gray-700"
          >
            At Midas Touch Hospitality, we craft timeless luxury across every
            destination we offer — from serene coastal escapes at Dive Agar to
            elegant resorts and private villas near Pune.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {[FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08] cursor-pointer transition"
                >
                  <Icon className="text-lg" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="py-10">
          <h2
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            className="text-lg text-[#5C0A08]"
          >
            Quick Links
            <div className="flex gap-2 mt-1">
              <div className="w-20 h-[2px] bg-[#5C0A08]"></div>
              <div className="w-10 h-[2px] bg-[#5C0A08]"></div>
            </div>
          </h2>

          <ul className="mt-3 space-y-2">
            {quickLink.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-700 hover:text-[#5C0A08] transition"
                style={{ fontFamily: "Jost", fontWeight: 500 }}
              >
                <FaAngleRight className="text-[#5C0A08]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Projects */}
        <div className="py-10">
          <h2
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            className="text-lg text-[#5C0A08]"
          >
            Our Projects
            <div className="flex gap-2 mt-1">
              <div className="w-20 h-[2px] bg-[#5C0A08]"></div>
              <div className="w-10 h-[2px] bg-[#5C0A08]"></div>
            </div>
          </h2>

          <ul className="mt-3 space-y-2">
            {ourProjacts.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-700 hover:text-[#5C0A08] transition"
                style={{ fontFamily: "Jost", fontWeight: 500 }}
              >
                <FaAngleRight className="text-[#5C0A08]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="bg-[#5C0A08] text-white h-auto pb-10 px-5 pt-10 w-80">
          <h2
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            className="text-lg"
          >
            Contact Us
            <div className="flex gap-2 mt-1">
              <div className="w-20 h-[2px] bg-white"></div>
              <div className="w-10 h-[2px] bg-white"></div>
            </div>
          </h2>

          <div className="mt-5 space-y-5">
            {contactUs.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h3>{item.title}</h3>
                </div>
                <p className="ml-6 text-sm">{item.dec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="bg-[#5C0A08] w-full text-white text-xs flex flex-col sm:flex-row justify-center items-center gap-3 py-3"
        style={{ fontFamily: "Lexend", fontWeight: 500 }}
      >
        <div className="h-[1px] w-20 sm:w-40 bg-white"></div>
        <p className="text-center">Copyright © 2025 Mayur Web Tech</p>
        <div className="h-[1px] w-20 sm:w-40 bg-white"></div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { Images } from "../assets/images";
// import {
//   FaInstagram,
//   FaLinkedinIn,
//   FaFacebookF,
//   FaTwitter,
//   FaAngleRight,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import { TfiEmail } from "react-icons/tfi";

// const Footer = () => {
//   const quickLink = ["Home", "About Us", "Projects", "Video", "Contact Us"];
//   const ourProjacts = [
//     "Blue Horizon Khed Shivapur",
//     "Delight Beach Resort Diveagar",
//     "Delight Beach Villa",
//     "Villa 4 BHK Diveagar",
//     "Villa 4 BHK Panshet",
//     "Villa 4 BHK Sinhagad",
//   ];

//   const contactUs = [
//     {
//       icon: <MdLocationOn />,
//       title: "address",
//       dec: "928, Iconic Shyamal, Shyamal Cross Road, Shyamal Ahmedabad - 380015",
//     },
//     {
//       icon: <FaPhoneAlt />,
//       title: "Mobile",
//       dec: "+91 97247 813373",
//     },
//     {
//       icon: <TfiEmail />,
//       title: "Emial",
//       dec: "info@mayurwebtech.com",
//     },
//   ];
//   return (
//     <div className="h-auto">
//       <div className="px-15 flex justify-between flex-wrap">
//         <div className="w-70 py-10 gap-10">
//           <img src={Images.logo} alt="" className="w-30 h-auto mt-5" />
//           <p style={{ fontFamily: "Jost", fontWeight: 500 }} className="mt-5">
//             At Midas Touch Hospitality, we craft timeless luxury across every
//             destination we offer — from serene coastal escapes at Dive Agar to
//             elegant resorts and private villas near Pune.
//           </p>

//           <div className="flex gap-3 mt-5">
//             <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
//               <FaInstagram className="text-lg cursor-pointer" />
//             </div>
//             <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
//               <FaFacebookF className="text-lg cursor-pointer" />
//             </div>
//             <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
//               <FaLinkedinIn className="text-lg cursor-pointer" />
//             </div>
//             <div className="w-10 h-10 bg-[#5C0A08] rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#5C0A08]">
//               <FaTwitter className="text-lg cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-start gap-5 py-10   ">
//           <h2
//             style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
//             className="text-[20px] text-[#5C0A08]"
//           >
//             Quick Link

//             <div className="flex gap-2 mt-1">
//               <div className="w-20 h-[2px] bg-[#5C0A08]"></div>
//               <div className="w-10 h-[2px] bg-[#5C0A08]"></div>
//             </div>
//           </h2>

//           <div className="gap-5">
//             {quickLink.map((item) => (
//               <h3
//                 className="flex items-center gap-2 mt-2"
//                 style={{ fontFamily: "Jost", fontWeight: 500 }}
//               >
//                 <FaAngleRight className="text-[#5C0A08]" /> {item}
//               </h3>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col items-start gap-5 py-10   ">
//           <h2
//             style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
//             className="text-[20px] text-[#5C0A08]"
//           >
//             Our Projects
//             <div className="flex gap-2 mt-1">
//               <div className="w-20 h-[2px] bg-[#5C0A08]"></div>
//               <div className="w-10 h-[2px] bg-[#5C0A08]"></div>
//             </div>
//           </h2>

//           <div className="gap-10">
//             {ourProjacts.map((item) => (
//               <h3
//                 className="flex items-center gap-2 mt-2"
//                 style={{ fontFamily: "Jost", fontWeight: 500 }}
//               >
//                 <FaAngleRight className="text-[#5C0A08]" /> {item}
//               </h3>
//             ))}
//           </div>
//         </div>

//         <div className="bg-[#5C0A08] h-80 px-5 pt-10 w-90">
//           <h2
//             style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
//             className="text-[20px] text-[#fff]"
//           >
//             Contact Us
//             <div className="flex gap-2 mt-1">
//               <div className="w-20 h-[2px] bg-[#fff]"></div>
//               <div className="w-10 h-[2px] bg-[#fff]"></div>
//             </div>
//           </h2>

//           {contactUs.map((item) => (
//             <div
//               className="text-white mt-5"
//               style={{ fontFamily: "Jost", fontWeight: 500 }}
//             >
//               <div className="flex items-center gap-2">
//                 {item.icon}
//                 <h3>{item.title}</h3>
//               </div>
//               <p className="ml-5">{item.dec}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* copyright */}
//       <div
//         className="bg-[#5C0A08] w-full h-10 text-white text-[10px] flex justify-center items-center gap-5"
//         style={{ fontFamily: "Lexend", fontWeight: 500 }}
//       >
//         <div className="h-[1px] w-50 bg-white "></div>
//         Copyright © 2025 Mayur Web Tech
//         <div className="h-[1px] w-50 bg-white "></div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
