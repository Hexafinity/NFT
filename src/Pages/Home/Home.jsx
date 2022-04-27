import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero.jsx";
import Video from "./Video/Video.jsx";
import Collect from "./Collect/Collect.jsx";
import Collect2 from "./Collect2/Collect2.jsx";
import QR from "./QR/QR.jsx";
import Find from "./Find/Find.jsx";
import Slider from "./Slider/Slider.jsx";
import Status from "./Status/Status.jsx";
import Season from "./Seasons/Season.jsx";
function Home({ dark }) {
  return (
    <div className="home">
      <Hero dark={dark} />
      <Video />
      <div className={`${dark ? "bg" : ""} shape-wrapper`}>
        <Collect dark={dark} />
        <Collect2 dark={dark} />
        <div className={`${dark ? "bg" : ""} bg-triangle-2`}>
          <Season dark={dark} />
          <Slider darkMode={dark} />
          <Status dark={dark} />
        </div>
        <div className={`${dark ? "bg" : ""} bg-triangle`}>
          <Find dark={dark} />
          <QR dark={dark} />
        </div>
      </div>
    </div>
  );
}

export default Home;
