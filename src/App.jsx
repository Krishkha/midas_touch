import React from "react";
import Navbar from "./component/Navbar";
import Landingpage from "./pages/Landingpage";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className=" h-auto">
      <Navbar />
      <Landingpage />
      <Footer />
    </div>
  );
};

export default App;
