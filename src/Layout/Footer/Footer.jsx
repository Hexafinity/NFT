import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.svg";
import youtube from "../../Assets/social/Elements-123.png";
import insta from "../../Assets/social/Elements-124.png";
import twitter from "../../Assets/social/Elements-125.png";
import tiktok from "../../Assets/social/Elements-126.png";
import telegram from "../../Assets/social/Elements-127.png";
import pdf from "../../Assets/audit.pdf";
function Footer({ dark }) {

  const foo = '#';
  return (
    <div className={`footer ${dark ? "header-color" : ""}`}>
      <div className="footer-left">
        <img className="footer-logo" src={logo} alt="" />
        <div className="social-div-footer">
          <p>Arcane Token Copyrights 2022®</p>
          <div className="icon-div">
            <a target="_blank" rel="noreferrer" href="https://t.me/ArcaneTokenBNB">
              <img className="social-icon" src={telegram} alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/arcanetokenbnb?s=21">
              <img className="social-icon" src={twitter} alt="" />
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://instagram.com/arcanetokenbnb?utm_medium=copy_link"
            >
              <img className="social-icon" src={insta} alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@arcanetokenbnb">
              <img className="social-icon" src={tiktok} alt="" />
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://youtube.com/channel/UCovNe7JAkU6OCucOf0SOQZw"
            >
              <img className="social-icon" src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right_col1">
          <h2>INFORMATION</h2>
          <a href={foo}>Whitepaper</a>
          <a href={pdf} download="audit">
            Audit
          </a>
          <a href="https://dxsale.app/app/v3/dxlockview?id=0&add=0xa6B98C7f4fE71244AD03B9C83b718023cd16DD25&type=lplock&chain=BSC">
            Liquidity Lock
          </a>
        </div>
        <div className="footer-right_col2">
          <h2>LINKS</h2>
          <a href={foo}  >CoinMarketCap</a>
          <a href={foo} >CoinGecko</a>
          <a href={foo}  >Arcane Track</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
