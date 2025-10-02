import React from "react";
import { Images } from "../../assets/images";
import Btnlayout from "../../component/Btnlayout";

const Section_2 = () => {
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
    <section className="w-full h-full py-20 px-10 flex flex-col relative">
      <div className="w-full h-full py-20 flex flex-col justify-center md:flex-col lg:flex-row">
        {/* side left */}
        <div className="w-full lg:w-1/2 h-full md:flex justify-center items-center">
          <div className=" w-150 h-150 flex gap-5">

            {/* combo img */}
            <div className=" w-1/2 h-auto gap-10 rounded-lg">
              <div className="overflow-hidden rounded-lg shadow-md h-[30%]">
                <img
                  src={Images.about_banner_1}
                  alt="Small 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md h-[70%]">
                <img
                  src={Images.about_banner_2}
                  alt="Small 2"
                  className="w-full h-full object-cover mt-5"
                />
              </div>
            </div>

            {/* big img */}
            <div className="bg-green-600 w-1/1 h-auto rounded-lg">
              <div className="overflow-hidden rounded-lg shadow-md w-[100%] h-[100%]" >
                <img
                  src={Images.about_banner_3}
                  alt="Large"
                  className="w-[100%] h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* <div className="abcd grid grid-cols-4 grid-rows-5 w-full max-w-auto h-[500px] gap-3 relative left-30">
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
          </div> */}
        </div>

        {/* Right side */}
        <div className="w-full mt-10 sm:mt-0 px-10 text-center lg:w-1/2 h-auto md:px-10 flex flex-col relative justify-center items-center md:justify-start md:items-start md:text-start">
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

          <div className="mt-6 flex justify-center items-center md:justify-start md:items-start w-full">
            <Btnlayout
              onclick={() => console.log("clicked")}
              btnlayoutImage={Images.btn_layout}
              btnbgColor="#5C0A08"
              lable="Discover More"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex bg-[#fff] rounded-xl overflow-hidden w-auto md:w-auto justify-between shadow-lg md:absolute md:left-150 md:top-140">
          {data.map((item) => {
            return (
              <>
                <div className="w-auto text-center h-auto py-5 flex flex-col justify-center items-center px-5 gap-2">
                  <img src={item.icon} className="w-10 h-auto md:w-7" alt="" />
                  <h2
                    className="text-2xl md:text-xl font-bold text-[#5C0A08]"
                    style={{ fontFamily: "Lexend", fontWeight: 700 }}
                  >
                    {item.number}
                  </h2>
                  <p
                    className="text-1xl md:text-lg font-bold text-black "
                    style={{ fontFamily: "Lexend", fontWeight: 500 }}
                  >
                    {item.lable}
                  </p>
                </div>
                <div className="w-0.5 bg-[#5C0A083D] my-7"></div>
              </>
            );
          })}
        </div> */}
    </section>
  );
};

export default Section_2;
