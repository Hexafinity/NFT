import React from "react";
import "./Token_hero.css";
import youtube from "../../../Assets/social/Elements-123.png";
import insta from "../../../Assets/social/Elements-124.png";
import twitter from "../../../Assets/social/Elements-125.png";
import tiktok from "../../../Assets/social/Elements-126.png";
import telegram from "../../../Assets/social/Elements-127.png";
import person from "../../../Assets/Token/Elements-25.png";
import bg1 from "../../../Assets/Token/Elements-53.png";
import bg2 from "../../../Assets/Token/Elements-54.png";
import bg3 from "../../../Assets/Token/Elements-55.png";
import bg1Dark from "../../../Assets/Token/Elements-49.png";
import bg2Dark from "../../../Assets/Token/Elements-50.png";
import bg3Dark from "../../../Assets/Token/Elements-52.png";
import letter from "../../../Assets/a.svg";
function Token_hero({ dark }) {
  function copyToClipboard(e) {
    const copiedText = document.querySelector(".address").innerText;
    navigator.clipboard.writeText(copiedText);
  }
  return (
    <div className="token_hero">
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className="token_hero-left"
      >
        <div className={`find-top ${dark ? "top-dark" : ""}`}>
          <h1 className="big">THIS IS ARCANE</h1>
          <h1 className="small">This Is Arcane</h1>
        </div>

        <p className={`${dark ? "dark-p" : ""}`}>
          Arcane is an NFT focused, community driven crypto currency, with real
          world use.
        </p>
        <div className="left-bg-div desktop-token">
          <div className="bg-box">
            <img src={dark ? bg1Dark : bg1} alt="" />
            <div className="text-div-abs">
              <p className={`${dark ? "dark-p" : ""}`}>9852</p>
              <p className={`${dark ? "dark-p" : ""}`}>Arcane Holders</p>
            </div>
          </div>
          <div className="bg-box">
            <img src={dark ? bg2Dark : bg2} alt="" />
            <div className="text-div-abs">
              <p className={`${dark ? "dark-p" : ""}`}>10%</p>
              <p className={`${dark ? "dark-p" : ""}`}>Total Token Burn</p>
            </div>
          </div>
          <div className="bg-box">
            <img src={dark ? bg3Dark : bg3} alt="" />
            <div className="text-div-abs">
              <p className={`${dark ? "dark-p" : ""}`}>25K+</p>
              <p className={`${dark ? "dark-p" : ""}`}>Telegram Members</p>
            </div>
          </div>
        </div>
        <div className="mobile-token bg-mobile-box">
          <div className="row-1-bg">
            <div className="bg-box-mobile">
              <h1 className={`${dark ? "dark-p" : ""}`}>9852</h1>
              <p className={`${dark ? "dark-p" : ""}`}>Arcane Holders</p>
            </div>
            <div className="bg-box-mobile">
              <h1 className={`${dark ? "dark-p" : ""}`}>10%</h1>
              <p className={`${dark ? "dark-p" : ""}`}>Total Token Burn</p>
            </div>
          </div>
          <div className="row-1-bg">
            <div className="bg-box-mobile">
              <h1 className={`${dark ? "dark-p" : ""}`}>25K+</h1>
              <p className={`${dark ? "dark-p" : ""}`}>Telegram Members</p>
            </div>
            <a
              href="https://pancakeswap.finance/swap/0x477565b356b3973d16e8cd837c6970613f13e24a"
              target="blank"
              className="letter"
              style={{ textDecoration: "none" }}
            >
              <img src={letter} alt="" /> BUY NOW
            </a>
          </div>
        </div>
        <div className="buy-arcane-div">
          <a
            href="https://pancakeswap.finance/swap/0x477565b356b3973d16e8cd837c6970613f13e24a"
            target="blank"
            className="desktop-token letter"
            style={{ textDecoration: "none" }}
          >
            <img src={letter} alt="" /> BUY NOW
          </a>
          <div className="address-div">
            <p>Contract Address</p>
            <span className="address">
              <div onClick={copyToClipboard} className="abosulte-copy">
                <i className="far fa-copy"></i>
                Copy To Clipboard
              </div>
              0x477565b356b3973d16e8cd837c6970613f13e24a
            </span>
          </div>
        </div>
        <div className="token-hero-social">
          <p className={`${dark ? "dark-p" : ""}`}>Our Communities</p>
          <div className="icon-div">
            <a target={"blank"} href="https://t.me/ArcaneTokenBNB">
              <img className="social-icon" src={telegram} alt="" />
            </a>
            <a target={"blank"} href="https://twitter.com/arcanetokenbnb?s=21">
              <img className="social-icon" src={twitter} alt="" />
            </a>
            <a
              target={"blank"}
              href="https://instagram.com/arcanetokenbnb?utm_medium=copy_link"
            >
              <img className="social-icon" src={insta} alt="" />
            </a>
            <a target={"blank"} href="https://tiktok.com/@arcanetokenbnb">
              <img className="social-icon" src={tiktok} alt="" />
            </a>
            <a
              target={"blank"}
              href="https://youtube.com/channel/UCovNe7JAkU6OCucOf0SOQZw"
            >
              <img className="social-icon" src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="token_hero-right"
      >
        <img src={person} alt="" />
      </div>
    </div>
  );
}

export default Token_hero;
