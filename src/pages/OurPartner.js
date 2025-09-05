import React from "react";

// import style
import "../assets/css/Ourpartner.scss";

// import assets
import PostImg from "../assets/images/partners/post.png";
import TcImg from "../assets/images/partners/tc.png";
import BbImg from "../assets/images/partners/bb.png";
import GizmodoImg from "../assets/images/partners/gizmodo.png";
import ForbesImg from "../assets/images/partners/forbes.png";

const OurPartner = () => {
  return (
    <div className="ourpartner-section">
      <div className="partner-title text"> Our Partners</div>
      <div className="partner-group">
        <img src={PostImg} className="partner-img" alt="Post img" />
        <img src={TcImg} className="partner-img" alt="Post img" />
        <img src={BbImg} className="partner-img" alt="Post img" />
        <img src={GizmodoImg} className="partner-img" alt="Post img" />
        <img src={ForbesImg} className="partner-img" alt="Post img" />
      </div>
    </div>
  );
};

export default OurPartner;
