import React from "react";

// import style
import "./assets/css/App.scss";

// import pages
import Header from "./pages/Header";
import Dolla from "./pages/Dolla";
import AboutUs from "./pages/AboutUs";
import OurPartner from "./pages/OurPartner";
import HowToBuy from "./pages/HowToBuy";
import Community from "./pages/Community";
import Footer from "./pages/Footer";
import Tokenomics from "./pages/Tokenomics";

const App = () => {
  return (
    <div className="main-section">
      <div className="container">
        <Header />
        <Dolla />
        <AboutUs />
        <OurPartner />
        <Tokenomics />
        <HowToBuy />
        <Community />
      </div>
      <Footer />
    </div>
  );
};

export default App;
