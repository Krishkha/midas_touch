import React from "react";
import { Images } from "../../assets/images";
import { FaAnglesRight } from "react-icons/fa6";

const Section_4 = () => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex flex-col md:flex-row justify-center md:justify-evenly items-center px-6 md:px-12 py-10">
      {/* Background Image */}
      <img
        src={Images.banner_2}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left Content */}
      <div className="flex flex-col gap-6 text-center md:text-left max-w-xl z-10">
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg"
          style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
        >
          Discover the Midas Lifestyle
        </h1>
        <p
          className="text-white text-base sm:text-lg md:text-xl leading-relaxed"
          style={{ fontFamily: "Lexend", fontWeight: 400 }}
        >
          Explore our signature villas and resorts — where nature meets comfort
          and elegance.
        </p>

        <button className="bg-white w-fit px-6 py-3 rounded-md flex justify-center items-center gap-3 mx-auto md:mx-0 hover:bg-[#f5f5f5] transition">
          <span
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            className="text-[#5C0A08]"
          >
            Discover More
          </span>
          <FaAnglesRight className="text-[#5C0A08]" />
        </button>
      </div>

      {/* Right Play Button */}
      {/* <div className="mt-8 md:mt-0 z-10">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-[#cdcbcb45] rounded-full flex justify-center items-center">
          <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center shadow-lg">
            <img src={Images.play_button} alt="Play" className="w-7 sm:w-9 md:w-10 h-auto" />
          </div>
        </div>
      </div> */}
      
      <div className="w-50 h-50 mt-8 md:mt-0 z-10 flex justify-center items-center">
        <div className="w-30 h-30  bg-[#cdcbcb45] rounded-full flex justify-center items-center">
          <div className="bg-white w-23 h-23 rounded-full flex justify-center items-center shadow-lg">
            <img src={Images.play_button} alt="" className="w-7 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_4;



// import React from "react";
// import { Images } from "../../assets/images";
// import { FaAnglesRight } from "react-icons/fa6";

// const Section_4 = () => {
//   return (
//     <section className="relative w-full h-[700px] flex justify-evenly items-center">
//       <img
//         src={Images.banner_2}
//         alt="Banner"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />
//       <div className="absolute inset-0 bg-black/60"></div>

//       <div className="flex flex-col gap-7">
//         <h1
//           className="text-white text-5xl font-bold drop-shadow-lg mb-4"
//           style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
//         >
//           Discover the Midas Lifestyle
//         </h1>
//         <p
//           className=" text-white text-lg max-w-2xl z-10"
//           style={{ fontFamily: "Lexend", fontWeight: 400 }}
//         >
//           Explore our signature villas and resorts — where nature meets comfort
//           and elegance.
//         </p>

//         <button className="bg-white z-10 w-40 gap-3 py-3 rounded-[7px] flex justify-center items-center flex-row">
//           <p
//             style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
//             className="text-[#5C0A08]"
//           >
//             Discover More
//           </p>
//           <FaAnglesRight className="text-[#5C0A08]" />
//         </button>
//       </div>

//       <div className="w-50 h-50 z-10">
//         <div className="w-30 h-30 bg-[#cdcbcb45] rounded-full flex justify-center items-center">
//           <div className="bg-white w-23 h-23 rounded-full flex justify-center items-center">
//             <img src={Images.play_button} alt="" className="w-7 h-auto" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section_4;
