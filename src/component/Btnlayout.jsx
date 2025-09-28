import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";

const Btnlayout = ({ onclick, btnlayoutImage, btnbgColor, lable }) => {
  return (
    <button
      className={`relative w-auto h-auto p-0 m-0 inline-block hover:from-yellow-700 hover:to-yellow-800 
                 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                   btnbgColor ? `bg-[${btnbgColor}]` : `bg-white`
                 } rounded-[5px] `}
      onClick={onclick}
    >
      {/* Background Image */}
      <img src={btnlayoutImage} alt="" className="w-60 h-full object-cover" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 text-white font-semibold">
        <p>{lable}</p>
        <LuMoveRight className="text-xl" />
      </div>
    </button>
  );
};

export default Btnlayout;
