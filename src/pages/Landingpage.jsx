import React from "react";
import { Images } from "../assets/images";
import Btnlayout from "../component/Btnlayout";
import Swiper from "../component/Slider";
import Slider from "../component/Slider";
import { FaAnglesRight } from "react-icons/fa6";

const Landingpage = () => {
  const data = [
    {
      icon: Images.about_1,
      number: "200+",
      lable: "Projects Completed",
    },
    {
      icon: Images.about_2,
      number: "350+",
      lable: "Happy Clients",
    },
    {
      icon: Images.about_3,
      number: "700+",
      lable: "Tailored Concepts",
    },
    {
      icon: Images.about_4,
      number: "25+",
      lable: "Destinations Served",
    },
  ];

  return (
    <>
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={Images.banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-white text-5xl font-bold drop-shadow-lg mb-4"
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
          >
            Blue horizon khed shivapur
          </h1>
          <p
            className="text-white text-lg max-w-2xl mx-auto mb-6"
            style={{ fontFamily: "Lexend", fontWeight: 400 }}
          >
            A peaceful hilltop escape offering premium stays, fine dining, and
            nature&apos;s charm — crafted by Midas Touch Hospitality.
          </p>

          <Btnlayout
            onclick={() => console.log("cliced")}
            btnlayoutImage={Images.btn_layout}
            lable={"View Destination"}
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full h-auto py-20 flex">
        {/* side left */}
        <div className="w-1/2 h-full flex justify-end">
          <div className="grid grid-cols-4 grid-rows-5 w-full max-w-3xl h-[500px] gap-3 relative left-30">
            <div className="row-span-2 col-span-1 overflow-hidden rounded-lg shadow-md">
              <img
                src={Images.about_banner_1}
                alt="Small 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="row-span-3 col-span-1 row-start-3 overflow-hidden rounded-lg shadow-md">
              <img
                src={Images.about_banner_2}
                alt="Small 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="row-span-5 col-span-2 overflow-hidden rounded-lg shadow-md">
              <img
                src={Images.about_banner_3}
                alt="Large"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-50 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#5C0A08] text-white w-30 h-30 flex flex-col items-center justify-center rounded-full shadow-lg">
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
              >
                10+
              </span>
              <span
                className="text-[12px]"
                style={{ fontFamily: "Lexend", fontWeight: 700 }}
              >
                Years
              </span>
              <span
                className="text-[12px]"
                style={{ fontFamily: "Lexend", fontWeight: 700 }}
              >
                Experience
              </span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 h-full py-10 px-10 flex flex-col justify-center relative">
          <div>
            <h1
              className="text-[#5C0A08] text-3xl font-bold drop-shadow-lg mb-2"
              style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
            >
              About Us Midas Touch Hospitality
            </h1>
            {/* underline (relative to text width) */}
            <div className="h-1 bg-[#5C0A08] w-[35%]"></div>
          </div>

          <h2
            className="text-[#000] text-3xl mt-6 font-bold drop-shadow-lg"
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
          >
            Where every moment is transformed into a golden experience.
          </h2>

          <p
            className="text-black mt-4 leading-relaxed"
            style={{ fontFamily: "Lexend", fontWeight: 400 }}
          >
            At{" "}
            <span className="text-[#5C0A08] font-bold">
              Midas Touch Hospitality
            </span>
            , we craft timeless luxury across every destination we offer — from
            serene coastal escapes at Dive Agar to elegant resorts and private
            villas near Pune. Our handpicked properties are more than just
            places to stay — they are curated experiences designed to indulge
            your senses.
          </p>

          <div className="mt-6">
            <Btnlayout
              onclick={() => console.log("clicked")}
              btnlayoutImage={Images.btn_layout}
              btnbgColor="#5C0A08"
              lable="Discover More"
            />
          </div>

          <div className="flex bg-[#fff] rounded-xl overflow-hidden w-full justify-between mt-6 shadow-lg absolute  top-90 right-50">
            {data.map((item, index) => {
              return (
                <>
                  <div className="w-auto text-center h-auto py-5 flex flex-col justify-center items-center px-5 gap-2">
                    <img src={item.icon} className="w-10 h-auto" alt="" />
                    <h2
                      className="text-2xl font-bold text-[#5C0A08]"
                      style={{ fontFamily: "Lexend", fontWeight: 700 }}
                    >
                      {item.number}
                    </h2>
                    <p
                      className="text-1xl font-bold text-black "
                      style={{ fontFamily: "Lexend", fontWeight: 500 }}
                    >
                      {item.lable}
                    </p>
                  </div>
                  <div className="w-0.5 bg-[#5C0A083D] my-7"></div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section>
        <Slider />
      </section>

      {/* section 4 */}

      <section className="relative w-full h-[700px] flex justify-evenly items-center">
        <img
          src={Images.banner_2}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60"></div>  

        <div className="flex flex-col gap-7">
          <h1
            className="text-white text-5xl font-bold drop-shadow-lg mb-4"
            style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
          >
            Discover the Midas Lifestyle
          </h1>
          <p
            className=" text-white text-lg max-w-2xl z-10"
            style={{ fontFamily: "Lexend", fontWeight: 400 }}
          >
            Explore our signature villas and resorts — where nature meets
            comfort and elegance.
          </p>
          
          <button className="bg-white z-10 w-40 gap-3 py-3 rounded-[7px] flex justify-center items-center flex-row">
            <p style={{ fontFamily: "Bree Serif", fontWeight: 400 }} className="text-[#5C0A08]">
              Discover More
            </p>
              <FaAnglesRight className="text-[#5C0A08]" />
          </button>
        </div>

        <div className="w-50 h-50 z-10">
          <div className="w-30 h-30 bg-[#cdcbcb45] rounded-full flex justify-center items-center" >
            <div className="bg-white w-23 h-23 rounded-full flex justify-center items-center">
              <img src={Images.play_button} alt="" className="w-7 h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
