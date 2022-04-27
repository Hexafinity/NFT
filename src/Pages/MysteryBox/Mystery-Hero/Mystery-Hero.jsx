import React from "react";
import "./Mystery-Hero.css";
import bg from "../../../Assets/banners/b6.png";
import bgMobile from "../../../Assets/banners/b6-mobile.png";
import bg2 from "../../../Assets/banners/b8.png";
import bg2Mobile from "../../../Assets/banners/b8-mobile.png";
import bg3 from "../../../Assets/banners/b7.png";
import bg3Mobile from "../../../Assets/banners/b7-mobile.png";
import bg4 from "../../../Assets/banners/b5.png";
import bg4Mobile from "../../../Assets/banners/b5-mobile.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
function MysteryHero() {
  return (
    <div className="mystery-hero">
      <Splide
        options={{
          interval: 3000,
          autoplay: true,
          type: "loop",
          rewind: true,
          loop: true,
          perPage: 1,
          height: "auto",
          width: "100%",
          arrows: false,
          pagination: true,
          drag: true,
        }}
      >
        <SplideSlide>
          <img className="desktop-bg" src={bg} alt="" />
          <img className="mobile-bg" src={bgMobile} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="desktop-bg" src={bg2} alt="" />
          <img className="mobile-bg" src={bg2Mobile} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="desktop-bg" src={bg3} alt="" />
          <img className="mobile-bg" src={bg3Mobile} alt="" />
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x477565b356b3973d16e8cd837c6970613f13e24a"
            target={"blank"}
          >
            <img className="desktop-bg" src={bg4} alt="" />
            <img className="mobile-bg" src={bg4Mobile} alt="" />
          </a>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default MysteryHero;
