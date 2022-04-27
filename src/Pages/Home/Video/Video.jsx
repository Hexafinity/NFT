import React, { useState } from "react";
import "./Video.css";
import vidImg from "../../../Assets/Thumbnail.png";
import play from "../../../Assets/play.png";
function Video() {
  const [open, setOpen] = useState(false);
  return (
    <div data-aos="zoom-in" data-aos-delay="1000" className="video">
      <img className="vid" src={vidImg} alt="" />
      <img onClick={() => setOpen(true)} src={play} alt="" className="play" />
      <div className={`watching ${open ? "open-vid" : ""}`}>
        <div className={`overlay-3 ${open ? "open-vid" : ""}`}></div>
        <i onClick={() => setOpen(false)} className="far fa-times"></i>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/wcvER4WfMlg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
