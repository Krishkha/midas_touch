import React from "react";
import { Images } from "../../assets/images";
import Btnlayout from "../../component/Btnlayout";
import { motion } from "framer-motion";

const Section_1 = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={Images.banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg mb-3 sm:mb-4"
          style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 3, type: "spring" }}
        >
          Blue horizon khed shivapur
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-white text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-4 sm:mb-6"
          style={{ fontFamily: "Lexend", fontWeight: 400 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 3, type: "spring", delay: 0.2 }}
        >
          A peaceful hilltop escape offering premium stays, fine dining, and
          nature&apos;s charm — crafted by Midas Touch Hospitality.
        </motion.p>

        {/* Button */}
        <motion.div
          className="flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
        >
          <Btnlayout
            onclick={() => console.log("clicked")}
            btnlayoutImage={Images.btn_layout}
            lable={"View Destination"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section_1;



// import React from "react";
// import { Images } from "../../assets/images";
// import Btnlayout from "../../component/Btnlayout";

// const Section_1 = () => {
//   return (
//     <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
//       <img
//         src={Images.banner}
//         alt="Banner"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="relative z-10 text-center px-4">
//         <h1
//           className="text-white text-5xl font-bold drop-shadow-lg mb-4"
//           style={{ fontFamily: "Bree Serif", fontWeight: 400 }}
//         >
//           Blue horizon khed shivapur
//         </h1>
//         <p
//           className="text-white text-lg max-w-2xl mx-auto mb-6"
//           style={{ fontFamily: "Lexend", fontWeight: 400 }}
//         >
//           A peaceful hilltop escape offering premium stays, fine dining, and
//           nature&apos;s charm — crafted by Midas Touch Hospitality.
//         </p>

//         <Btnlayout
//           onclick={() => console.log("cliced")}
//           btnlayoutImage={Images.btn_layout}
//           lable={"View Destination"}
//         />
//       </div>
//     </section>
//   );
// };

// export default Section_1;
