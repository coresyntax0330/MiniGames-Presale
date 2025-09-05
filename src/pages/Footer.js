import React from "react";

// import style
import "../assets/css/Footer.scss";

// import assets
import LogoImg from "../assets/images/logo.png";
import XImg from "../assets/images/social/x.png";
import InstagramImg from "../assets/images/social/instagram.png";
import DiscordImg from "../assets/images/social/discord.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="header-section">
          <div className="menu-bar">
            <img src={LogoImg} alt="logo" className="menu-logo" />
            <a href="#dolla" className="menu-item small-text">
              $DOLLA
            </a>
            <a href="#aboutus" className="menu-item small-text">
              About us
            </a>
            <a href="#tokenomics" className="menu-item small-text">
              Tokenomics
            </a>
            <a href="#howtobuy" className="menu-item small-text">
              How to buy?
            </a>
          </div>
          <div className="sign-bar">
            <button
              className="social-btn"
              type="button"
              onClick={() => alert("Social account was not linked yet.")}
            >
              <img src={XImg} alt="x" className="social-icon" />
            </button>
            <button
              className="social-btn"
              type="button"
              onClick={() => alert("Social account was not linked yet.")}
            >
              <img src={InstagramImg} alt="instagram" className="social-icon" />
            </button>
            <button
              className="social-btn"
              type="button"
              onClick={() => alert("Social account was not linked yet.")}
            >
              <img src={DiscordImg} alt="discord" className="social-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
