import React from "react";

// import style
import "../assets/css/Community.scss";

// import assets
import XImg from "../assets/images/social/x.png";
import InstagramImg from "../assets/images/social/instagram.png";
import DiscordImg from "../assets/images/social/discord.png";
import DollarImg from "../assets/images/dollar.png";

const Community = () => {
  return (
    <div className="community-section">
      <img src={DollarImg} alt="dollar" className="community-dollar-img" />
      <div className="community-block">
        <div className="community-title text">Join Our Community</div>
        <div className="community-content">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </div>
        <div className="social-group">
          <button className="social-btn">
            <img src={XImg} alt="x" className="social-icon" />
          </button>
          <button className="social-btn">
            <img src={InstagramImg} alt="instagram" className="social-icon" />
          </button>
          <button className="social-btn">
            <img src={DiscordImg} alt="discord" className="social-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
