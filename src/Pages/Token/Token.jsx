import React from "react";
import "./Token.css";
import TokenHero from "./Token_hero/Token_hero.jsx";
import Audit from "./Audit/Audit.jsx";
import Tokenomics from "./Tokenomics/Tokenomics.jsx";
import Buy from "./Buy/Buy.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";
import QR from "../Home/QR/QR.jsx";
//assets

function Token({ dark }) {
  return (
    <div className="token">
      <TokenHero dark={dark} />
      <Audit dark={dark} />
      <Tokenomics dark={dark} />
      <Roadmap dark={dark} />
      <Buy dark={dark} />
      <QR dark={dark} />
    </div>
  );
}

export default Token;
