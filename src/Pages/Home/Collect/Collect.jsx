import React from "react";
import "./Collect.css";
import img from "../../../Assets/mystrey.png";
function Collect({ dark }) {
  return (
    <div className="collect">
      <div data-aos="fade-right" className="collect_left">
        <img src={img} alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="1000" className="collect_right">
        <div
          data-aos="fade-down"
          className={`find-top ${dark ? "top-dark" : ""}`}
        >
          <h1 className="big">MYSTERY BOX</h1>
          <h1 className="small">MYSTERY BOX</h1>
        </div>
        <p className={`${dark ? "dark-p" : ""}`}>
          The mystery box will be available for $10, each box will have either
          of Five different NFT rarities. Holders will be able to sell their
          NFTs on Arcane Market Place.
        </p>
      </div>
    </div>
  );
}

export default Collect;
