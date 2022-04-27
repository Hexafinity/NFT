import React from "react";
import "./Audit.css";
import card from "../../../Assets/Token/Elements-18.png";
import card2 from "../../../Assets/Token/Elements-19.png";
import shape from "../../../Assets/Token/Elements-70.png";
import pdf from "../../../Assets/Token/buy.pdf";
import pdf2 from "../../../Assets/audit.pdf";
function Audit({ dark }) {
  return (
    <div data-aos-duration="400" data-aos="fade-top" className="audit">
      <div
        data-aos="fade-bottom"
        className={`find-top ${dark ? "top-dark" : ""}`}
      >
        <h1 className="big">Whitepaper & Audit</h1>
        <h1 className="small">Whitepaper & Audit</h1>
      </div>
      <div className="audit-top">
        <div
          data-aos-duration="800"
          data-aos-delay="400"
          data-aos="fade-right"
          className="audit-card"
        >
          <img src={card} alt="" />
          <p className={`${dark ? "dark-p" : ""}`}>AUDIT</p>
          <a download="Audit" href={pdf2} className="download">
            <i className="fas fa-download"></i>
          </a>
        </div>
        <div
          data-aos-duration="800"
          data-aos-delay="400"
          data-aos="fade-left"
          className="audit-card"
        >
          <img src={card2} alt="" />
          <p className={`${dark ? "dark-p" : ""}`}>WHITEPAPER</p>
          <a download="How To Buy" href={pdf} className="download">
            <i className="fas fa-download"></i>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-bottom"
        className={`supply-h1 find-top ${dark ? "top-dark" : ""}`}
      >
        <h1 className="big">SUPPLY</h1>
        <h1 className="small">SUPPLY</h1>
      </div>
      <div data-aos-delay="400" data-aos="fade-top" className="audit-bottom">
        <img src={shape} alt="" />
      </div>
    </div>
  );
}

export default Audit;
