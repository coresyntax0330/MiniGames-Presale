import React from "react";

// import style
import "../assets/css/Tokenomics.scss";

// import assets
import ChartImg from "../assets/images/chart.png";
import TeamImg from "../assets/images/vector/team.png";
import TreasuryImg from "../assets/images/vector/treasury.png";
import AirdropImg from "../assets/images/vector/airdrop.png";
import LiquidityImg from "../assets/images/vector/liquidity.png";
import SeedphaseImg from "../assets/images/vector/seedphase.png";

const Tokenomics = () => {
  return (
    <div className="tokenomics-section" id="tokenomics">
      <div className="tokenomics-title text">Tokenomics</div>
      <div className="tokenomics-wrapper">
        <img alt="chart" src={ChartImg} className="tokenomics-chart-img" />
        <img alt="direction" src={TeamImg} className="team-img" />
        <img alt="direction" src={TreasuryImg} className="treasury-img" />
        <img alt="direction" src={AirdropImg} className="airdrop-img" />
        <img alt="direction" src={LiquidityImg} className="liquidity-img" />
        <img alt="direction" src={SeedphaseImg} className="seedphase-img" />

        <div className="tokenomics-item team-item">
          <div className="item-title">Team</div>
          <div className="item-text">
            Lorem ipsum is placeholder text commonly used in the graphic
          </div>
        </div>
        <div className="tokenomics-item treasury-item">
          <div className="item-title">Treasury</div>
          <div className="item-text">
            Lorem ipsum is placeholder text commonly used in the graphic
          </div>
        </div>
        <div className="tokenomics-item airdrop-item">
          <div className="item-title">Airdrop</div>
          <div className="item-text">
            Lorem ipsum is placeholder text commonly used in the graphic
          </div>
        </div>
        <div className="tokenomics-item liquidity-item">
          <div className="item-title">Liquidity</div>
          <div className="item-text">
            Lorem ipsum is placeholder text commonly used in the graphic
          </div>
        </div>
        <div className="tokenomics-item seedphase-item">
          <div className="item-title">Seed Phase</div>
          <div className="item-text">
            Lorem ipsum is placeholder text commonly used in the graphic
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
