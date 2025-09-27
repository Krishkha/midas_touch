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
      title: "address",
      dec: "928, Iconic Shyamal, Shyamal Cross Road, Shyamal Ahmedabad - 380015",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Mobile",
      dec: "+91 97247 813373",
    },
    {
      icon: <TfiEmail />,
      title: "Emial",
      dec: "info@mayurwebtech.com",
    },
  ];
  return (
    <div className="h-auto">
      <div className="px-15 flex justify-between">
        <div className="w-70 py-10 gap-10">
          <img src={Images.logo} alt="" className="w-30 h-auto mt-5" />
          <p style={{ fontFamily: "Jost", fontWeight: 500 }} className="mt-5">
            At Midas Touch Hospitality, we craft timeless luxury across every
            destination we offer — from serene coastal escapes at Dive Agar to
            elegant resorts and private villas near Pune.
          </p>

          <div className="flex gap-3 mt-5">
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
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 py-10   ">
          <h2
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            className="text-[20px] text-[#5C0A08]"
          >
            Quick Link
          </h2>

          <div className="gap-10">
            {quickLink.map((item) => (
              <h3
                className="flex items-center gap-2 mt-5"
                style={{ fontFamily: "Jost", fontWeight: 500 }}
              >
                <FaAngleRight className="text-[#5C0A08]" /> {item}
              </h3>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 py-10   ">
          <h2
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            className="text-[20px] text-[#5C0A08]"
          >
            Our Projects
          </h2>

          <div className="gap-10">
            {ourProjacts.map((item) => (
              <h3
                className="flex items-center gap-2 mt-3"
                style={{ fontFamily: "Jost", fontWeight: 500 }}
              >
                <FaAngleRight className="text-[#5C0A08]" /> {item}
              </h3>
            ))}
          </div>
        </div>

        <div className="bg-[#5C0A08] h-80 px-5 pt-10 w-90">
          <h2
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            className="text-[20px] text-[#fff]"
          >
            Contact Us
          </h2>

          {contactUs.map((item) => (
            <div
              className="text-white mt-5"
              style={{ fontFamily: "Jost", fontWeight: 500 }}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <h3>{item.title}</h3>
              </div>
              <p className="ml-5">{item.dec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* copyright */}
      <div
        className="bg-[#5C0A08] w-full h-10 text-white text-[10px] flex justify-center items-center gap-5"
        style={{ fontFamily: "Lexend", fontWeight: 500 }}
      >
        <div className="h-[1px] w-50 bg-white "></div>
        Copyright © 2025 Mayur Web Tech
        <div className="h-[1px] w-50 bg-white "></div>
      </div>
    </div>
  );
};

export default Footer;
