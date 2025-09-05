import React from "react";

// import style
import "../assets/css/Aboutus.scss";

// import assets
import EarnImg from "../assets/images/earn.png";

const AboutUs = () => {
  return (
    <div className="aboutus-section" id="aboutus">
      <div className="aboutus-wrapper">
        <button
          type="button"
          className="aboutus-btn"
          onClick={() => alert("This function is not working.")}
        >
          About us
        </button>
        <div className="aboutus-title text">Making Web3 Easy</div>
        <div className="aboutus-content">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder text commonly used in the graphic
        </div>
      </div>
      <div className="explain-wrapper">
        <img src={EarnImg} alt="logo" className="explain-img" />
      </div>
    </div>
  );
};

export default AboutUs;
