import React from "react";
import "./Roadmap.css";
function Roadmap({ dark }) {
  // <i className="far fa-check-circle"></i>;
  return (
    <div className="roadmap">
      <div
        data-aos-duration="800"
        data-aos="fade-right"
        data-aos-delay="600"
        className={`find-top ${dark ? "top-dark" : ""}`}
      >
        <h1 className="big">ROADMAP</h1>
        <h1 className="small">ROADMAP</h1>
      </div>
      <div
        data-aos-duration="1000"
        data-aos="fade-left"
        data-aos-delay="700"
        className="roadmap-grid"
      >
        <div className="road-box blue-box">
          <i className="far fa-check-circle"></i>
          <p>New Website Launched</p>
        </div>
        <div className="road-box blue-box">
          <i className="far fa-check-circle"></i>
          <p>Reached 5,000 Holders</p>
        </div>
        <div className="road-box blue-box">
          <i className="far fa-check-circle"></i>
          <p>Listed on CoinMarketCap</p>
        </div>
        <div className="road-box blue-box">
          <i className="far fa-check-circle"></i>
          <p>Listen on CoinGecko</p>
        </div>
        <div className="road-box blue-box">
          <i className="far fa-check-circle"></i>
          <p>Initial Listing on FEGex</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>NFTs.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>NFT Market Place.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>NFTs Mystery Box.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Track App.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Tools.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Wallet.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Swap.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Cards Game.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Sword Game.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Metaverse.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Store.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Shop.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Arcane Surprise.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>100 Million Market Cap.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>1 Billion Market Cap.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>Top #150 Cryptocurrency.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>HQ in Dubai.</p>
        </div>
        <div className="road-box">
          <i className="far fa-check-circle"></i>
          <p>KYC</p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
