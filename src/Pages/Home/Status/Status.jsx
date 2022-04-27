import React from "react";
import "./Status.css";
import icon1 from "../../../Assets/Group 356.png";
import icon2 from "../../../Assets/Group 357.png";
import icon3 from "../../../Assets/Group 358.png";
import letter from "../../../Assets/a.svg";
function Status({ dark }) {
  return (
    <div data-aos="fade-down" className="status">
      <div
        data-aos="fade-down"
        className={`find-top ${dark ? "top-dark" : ""}`}
      >
        <h1 className="big">ARCANE STATUS</h1>
        <h1 className="small">ARCANE STATUS</h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="600"
        className="status-box-div"
      >
        <div className={`status-box ${dark ? "white-bg" : ""}`}>
          <img src={icon1} alt="" />
          <p>Arcane Holder</p>
          <p>5900</p>
        </div>
        <div className={`status-box ${dark ? "white-bg" : ""}`}>
          <img src={icon2} alt="" />
          <p>NFTs</p>
          <p>17</p>
        </div>
        <div className={`status-box ${dark ? "white-bg" : ""}`}>
          <img src={icon3} alt="" />
          <p>Pooled Arcane</p>
          <p>190,417,621</p>
        </div>
      </div>
      <div data-aos="fade-right" className="btn-div-status">
        <button>
          <img src={letter} alt="" /> Buy Mysterybox
        </button>
      </div>
    </div>
  );
}

export default Status;
