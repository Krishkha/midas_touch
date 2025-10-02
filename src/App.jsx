import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Landingpage from "./pages/Landingpage/Landingpage";

const App = () => {
  return (
    <div className=" h-auto">
      <Navbar />
      <Landingpage />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
