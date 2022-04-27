import React from "react";
import "./Tokenomics.css";
import circle from "../../../Assets/Token/Elements-67.png";
import circle2 from "../../../Assets/Token/Elements-68.png";
import circle3 from "../../../Assets/Token/Elements-69.png";
function Tokenomics({ dark }) {
  return (
    <div
      data-aos-duration="800"
      data-aos="fade-top"
      data-aos-delay="800"
      className="tokenomics"
    >
      <div className={`find-top ${dark ? "top-dark" : ""}`}>
        <h1 className="big">TOKENOMICS</h1>
        <h1 className="small">TOKENOMICS</h1>
      </div>
      <div className="card-div-tokenomics">
        <div className={`card-tokenomics ${dark ? "header-color" : ""}`}>
          <img src={circle} alt="" />
          <h1>2% Liquidity Pool</h1>
          <p className={`${dark ? "dark-p" : ""}`}>
            2% from each transaction will go to the renounced contract which
            will be burnt forever, The other liquidity is Locked for 365Days,
            The team has provided liquidity and it will be locked for a variety
            of times.
          </p>
        </div>
        <div className={`card-tokenomics ${dark ? "header-color" : ""}`}>
          <img src={circle2} alt="" />
          <h1>2% Rewards</h1>
          <p className={`${dark ? "dark-p" : ""}`}>
            Holders will get 2% reflections from every transaction
            (Buy/Sell/Transfer) -including the burn wallet- Meaning Bigger bags
            get more reflections.
          </p>
        </div>
        <div className={`card-tokenomics ${dark ? "header-color" : ""}`}>
          <img src={circle3} alt="" />
          <h1>
            2% Marketing <br></br> Developers
          </h1>
          <p className={`${dark ? "dark-p" : ""}`}>
            This fee is used exclusively for development and marketing purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
