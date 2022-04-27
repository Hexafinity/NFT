import React from "react";
import "./QR.css";
import code from "../../../Assets/code.png";
function QR({ dark }) {
  return (
    <div className={`qr ${dark ? "dark" : ""}`}>
      {dark ? <div className="blur"></div> : ""}
      <div data-aos="fade-right" className="left-qr">
        <img src={code} alt="" />
      </div>
      <div data-aos="fade-left" className="right-qr">
        <h1 className={`qr-h1 ${dark ? "dark-h1" : ""}`}>
          Join our official Telegram
        </h1>
        <p className={`${dark ? "dark-p" : ""}`}>
          Join our Telegram group to get all news about the project, have some
          insights before anyone else, and have fun with the community
        </p>
      </div>
    </div>
  );
}

export default QR;
