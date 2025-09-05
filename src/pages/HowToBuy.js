import React from "react";

// import style
import "../assets/css/Howtobuy.scss";

// import assets
import VisaImg from "../assets/images/payment/visa.png";
import AppleImg from "../assets/images/payment/apple.png";
import MoonshotImg from "../assets/images/moonshot.png";

const HowToBuy = () => {
  return (
    <div className="howtobuy-section" id="howtobuy">
      <div className="howtobuy-title text">How to buy?</div>
      <div className="howtobuy-subtitle medium-text">With Crypto</div>
      <div className="howtobuy-wrapper">
        <div className="howtobuy-line"></div>
        <div className="howtobuy-item">
          <div className="how-number">1</div>
          <div className="how-sub-section">
            <div className="how-title">Connect Your Solana wallet</div>
            <div className="how-content">
              Lorem ipsum is placeholder text commonly used in the graphic
            </div>
          </div>
        </div>
        <div className="howtobuy-item">
          <div className="how-number">2</div>
          <div className="how-sub-section">
            <div className="how-title">Top up your wallet</div>
            <div className="how-content">
              Lorem ipsum is placeholder text commonly used in the graphic
            </div>
          </div>
        </div>
        <div className="howtobuy-item">
          <div className="how-number">3</div>
          <div className="how-sub-section">
            <div className="how-title">Buy From Official website</div>
            <div className="how-content">
              Lorem ipsum is placeholder text commonly used in the graphic
            </div>
          </div>
        </div>
      </div>
      <div className="howtobuy-title text">How to buy?</div>
      <div className="howtobuy-subtitle medium-text">Using Card</div>
      <div className="payment-btn-group">
        <button type="button" className="payment-btn">
          <img className="payment-btn-img" src={VisaImg} alt="visa" />
        </button>
        <button type="button" className="payment-btn">
          <img className="payment-btn-img" src={AppleImg} alt="visa" />
        </button>
      </div>
      <div className="card-description">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </div>
      <img className="moonshot-img" alt="moonshot" src={MoonshotImg} />
    </div>
  );
};

export default HowToBuy;
