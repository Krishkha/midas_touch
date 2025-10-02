import React from "react";
import { Images } from "../../assets/images";
import Btnlayout from "../../component/Btnlayout";
import Swiper from "../../component/Slider";
import Slider from "../../component/Slider";
import { FaAnglesRight } from "react-icons/fa6";
import Section_1 from "./section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";

const Landingpage = () => {
  

  return (
    <>
      {/* Section 1 */}
      <Section_1 />
    
      {/* Section 2 */}
      <Section_2 />
      

      {/* section 3 */}
      <Section_3 />

      {/* section 4 */}
      <Section_4 />
    </>
  );
};

export default Landingpage;
