import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Images } from "../assets/images";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

const data = [
  {
    id: 1,
    img: Images.about_banner_1,
    title: "Delight beach resort diveagar",
    desc: "Step into seaside serenity at Diveagar’s Delight Beach Resort where comfort meets the calm of the coast.",
  },
  {
    id: 2,
    img: Images.about_banner_2,
    title: "Villa 4 BHK Panshet",
    desc: "Relax at our 4 BHK Villa in Panshet — where comfort meets scenic beauty.",
  },
  {
    id: 3,
    img: Images.about_banner_3,
    title: "Delight beach villa",
    desc: "Wake up to ocean views and unwind in coastal luxury — your perfect beachside retreat.",
  },
  {
    id: 4,
    img: Images.about_banner_1,
    title: "Luxury Pool Villa",
    desc: "Indulge in luxury with a private pool villa surrounded by greenery and modern comforts.",
  },
  {
    id: 5,
    img: Images.about_banner_1,
    title: "Hilltop Stay",
    desc: "Escape to a scenic hilltop retreat offering panoramic views and peaceful surroundings.",
  },
  {
    id: 6,
    img: Images.about_banner_1,
    title: "Hilltop Stay",
    desc: "Escape to a scenic hilltop retreat offering panoramic views and peaceful surroundings.",
  },
  {
    id: 7,
    img: Images.about_banner_1,
    title: "Hilltop Stay",
    desc: "Escape to a scenic hilltop retreat offering panoramic views and peaceful surroundings.",
  },
];

const Slider = () => {
  return (
    <div className="w-full  px-6 py-10 bg-[#5C0A080D]">
      <div className="text-center mb-6 flex justify-between">
        <h2
          className="text-2xl font-bold text-[#5b0c0c] relative inline-block"
          style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
        >
          Our Work, Your Escape
          {/* <span className="block w-60 h-1 bg-[#5b0c0c] mt-1"></span> */}
          <img src={Images.h1_underline} className="w-60" alt="" />
        </h2>

        {/* Navigation Arrows */}
        <div className="flex gap-2 z-10">
          <button className="prev-btn bg-[#5b0c0c] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#400909]">
            <img src={Images.left_arrow} alt="" className="w-7 h-7" />
          </button>
          <button className="next-btn bg-[#5b0c0c] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#400909]">
            <img src={Images.right_arrow} alt="" className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        spaceBetween={0} // 👈 reduce the gap (default often 30)
        slidesPerView={"auto"} // makes w-80 respected
        centeredSlides={false} // remove extra centering space
        grabCursor={true}
        slidesPerView={5}
        loop={true}
        // breakpoints={{
        //   0: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        // }}
        className="gap-0 h-100"
      >
        {data.map((p) => (
          <SwiperSlide key={p.id} className="overflow-visible">
            <div className="bg-white rounded-lg shadow-md flex flex-col w-80 relative pb-5 overflow-visible">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3
                  className="text-lg font-bold text-[#5b0c0c] mb-2"
                  style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[12px] text-gray-600 flex-grow overflow-hidden text-ellipsis line-clamp-2"
                  style={{ fontFamily: "Lexend", fontWeight: 500 }}
                >
                  {p.desc}
                </p>
                <button
                  className=" bg-[#5b0c0c] text-white py-2 rounded-md hover:bg-[#400909] transition w-30 flex items-center justify-center gap-2 absolute top-75"
                  style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
                >
                  Read More <FiArrowUpRight className="text-white text-lg" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
