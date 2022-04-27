import React from "react";
import "./Season.css";
import circle from "../../../Assets/Elements-66.png";
import letter from "../../../Assets/Elements-28.png";
function Season({ dark }) {
  return (
    <div data-aos="fade-right" data-aos-delay="1000" className="season">
      <div className={`find-top ${dark ? "top-dark" : ""}`}>
        <h1 className="big">SEASONS</h1>
        <h1 className="small">SEASONS</h1>
      </div>
      <div className="season-bot">
        <div className="left-season">
          <h2>CURRENT SEASON</h2>
          <div className="image-div-season">
            <img src={circle} alt="" />
            <p>1</p>
          </div>
        </div>
        <div className="right-season">
          <div className="season-desc">
            <div className="left-desc">
              <img src={letter} alt="" />
            </div>
            <div className="right-desc">
              <h2>MYSTERY BOX</h2>
              <p className={`${dark ? "dark-p" : ""}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                dolores vero consequuntur optio cupiditate laboriosam fuga,
                voluptatibus magnam. Quisquam, ducimus.
              </p>
            </div>
          </div>
          <div className="season-desc">
            <div className="left-desc">
              <img src={letter} alt="" />
            </div>
            <div className="right-desc">
              <h2>MYSTERY BOX</h2>
              <p className={`${dark ? "dark-p" : ""}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                dolores vero consequuntur optio cupiditate laboriosam fuga,
                voluptatibus magnam. Quisquam, ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Season;
