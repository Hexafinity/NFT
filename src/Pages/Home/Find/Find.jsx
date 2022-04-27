import React from "react";
import "./Find.css";
import comp from "../../../Assets/Elements-83.png";
import comp2 from "../../../Assets/Elements-84.png";
import comp3 from "../../../Assets/Elements-85.png";
import comp4 from "../../../Assets/Elements-86.png";
import comp5 from "../../../Assets/Elements-87.png";
import comp6 from "../../../Assets/Elements-88.png";
import comp7 from "../../../Assets/Elements-89.png";
function Find({ dark }) {
  return (
    <div className="find">
      <div
        data-aos="fade-down"
        className={`find-top ${dark ? "top-dark" : ""}`}
      >
        <h1 className="big">FIND ARCANE ON</h1>
        <h1 className="small">FIND ARCANE ON</h1>
      </div>
      <div data-aos="fade-up" data-aos-delay="1000" className="find-bottom">
        <a
          href="https://pancakeswap.finance/swap/0x477565b356b3973d16e8cd837c6970613f13e24a"
          target="blank"
        >
          <img src={comp} alt="" className="comp" />
        </a>
        <a
          href="https://fegex.com/trade/bsc/0x451721674411d659952525a697a438885ad741f9"
          target="blank"
        >
          <img src={comp2} alt="" className="comp" />
        </a>
        <a href="https://www.bkex.com/trade/ARCANE_USDT" target="blank">
          <img src={comp3} alt="" className="comp" />
        </a>
        <a
          href="https://coinmarketcap.com/currencies/arcane-token/"
          target="blank"
        >
          <img src={comp4} alt="" className="comp" />
        </a>
        <a
          href="https://www.dextools.io/app/bsc/pair-explorer/0x8fd2ae8a1bd9f7b306b0bd2772d1fe01feae2648"
          target="blank"
        >
          <img src={comp5} alt="" className="comp" />
        </a>
        <a
          href="https://poocoin.app/tokens/0x477565b356b3973d16e8cd837c6970613f13e24a"
          target="blank"
        >
          <img src={comp6} alt="" className="comp" />
        </a>

        <a
          href="https://www.coingecko.com/en/coins/arcane-token"
          target="blank"
        >
          <img src={comp7} alt="" className="comp" />
        </a>
      </div>
    </div>
  );
}

export default Find;
