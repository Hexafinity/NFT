import React, { useState, useEffect } from "react";
import logo from "../../Assets/logo.svg";
import dark from "../../Assets/dark.png";
import light from "../../Assets/light1.png";
// import wallet from "../../Assets/wallet.png";
import hamburger from "../../Assets/social/Elements-129.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import NetworkButton from "../../Helper/NetworkButton";



function Header({ darkSet, click, loadWeb3Modal }) {
  const [darkMode, setDark] = useState(false);
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [darkHead, setDarkHead] = useState(false);

  

  const foo = '#';
  const darker = (e) => {
    setDarkHead((prev) => {
      return !prev;
    });
    document.querySelector("body").classList.toggle("dark");
    setDark((prev) => !prev);
    darkSet(!darkHead);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <>
      <header
        className={`d-flex align-items-center ${show ? "scroll" : ""}  ${darkHead ? "header-color" : ""
          }`}
      >
        <div className="left-header">
          <div className="logo_area">
            <Link to="/">
              <img src={logo} alt="img" />
            </Link>
          </div>
        </div>
        <div className="center-header">
          <ul
            className={`menu ${active ? `current ${darkHead ? "dark" : ""}` : ""
              }`}
          >
            <li onClick={darker} className={`switch ${darkMode ? "active" : ""}`}>
              <img src={light} alt="" />
              <img src={dark} alt="" />
            </li>
            <li
              onClick={() => {
                setActive((prev) => !prev);
              }}
              className="cross"
            >

              <i className="far fa-times"></i>
            </li>

            <li
              onClick={() => {
                setActive((prev) => !prev);
                click(1);
              }}
              className="bottom-border"
            >
              <Link to="/">HOME</Link>
            </li>
            <li
              onClick={() => {
                setActive((prev) => !prev);
                click(1);
              }}
              className="bottom-border"
            >
              <Link to="/Token">THE TOKEN</Link>
            </li>
            <li
              onClick={() => {
                setActive((prev) => !prev);
              }}
              className="bottom-border soon"
            >
              <a target="_blank" rel="noreferrer" href="https://arctoken.net/nft/profile" >PROFILE</a>
            </li>

            <li
              onClick={() => {
                setActive((prev) => !prev);
              }}
              className="bottom-border"
            >
              <Link to="/MysteryBox">MYSTERYBOX</Link>
            </li>
            <li
              onClick={() => {
                setActive((prev) => !prev);
              }}
              className="bottom-border soon"
            >
              <a target="_blank" rel="noreferrer" href="https://arctoken.net/nft/home" >MARKET PLACE</a>
            </li>
            <li
              onClick={() => {
                setActive((prev) => !prev);
              }}
              className="bottom-border soon"
            >
              <a target="_blank" rel="noreferrer" href="https://arctoken.net/nft/my-items" >MY ITEMS</a>
            </li>
            <li
              onClick={() => {
                setActive((prev) => !prev);
              }}
              className="bottom-border soon"
            >
              <a target="_blank" rel="noreferrer" href="https://arctoken.net/nft/profile" >PROFILE SETTING</a>
            </li>

            <li className="bottom">
              <div className="top-bottom">
                <div className="social-div-footer mobile-menu">
                  <div className="icon-div">
                    <a target="_blank" rel="noreferrer" href="https://t.me/ArcaneTokenBNB">
                      <i className="fab fa-telegram-plane"></i>
                    </a>
                    <a
                      target="_blank" rel="noreferrer"
                      href="https://twitter.com/arcanetokenbnb?s=21"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      target="_blank" rel="noreferrer"
                      href="https:instagram.com/arcanetokenbnb?utm_medium=copy_link"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      target="_blank" rel="noreferrer"
                      href="https://www.tiktok.com/@arcanetokenbnb"
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: " 2.5rem" }}
                        icon={faTiktok}
                      />
                    </a>
                    <a
                      target="_blank" rel="noreferrer"
                      href="https://youtube.com/channel/UCovNe7JAkU6OCucOf0SOQZw"
                    >
                      {" "}
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bottom-bottom">
                <div className="header_arcane_box">
                  <a href={foo} >1$ = 0.012829 Arcane </a>
                </div>
                <div
                  onClick={darker}
                  className={`switch switch-mobile ${darkMode ? "active" : ""}`}
                >
                  <img src={light} alt="" />
                  <img src={dark} alt="" />
                </div>
              </div>
            </li>
          </ul>

          <div className="header_connect">
            <NetworkButton />

          </div>
        </div>
        {/* <!-- menu toggler --> */}
        <div className="right-head">
          {/* <NetworkButton/> */}

          <img
            className="hamburger mobile-connect"
            onClick={() => {
              setActive((prev) => !prev);
            }}
            src={hamburger}
            alt=""
          />
        </div>

        {/* <!-- overlay --> */}
        <div className={`overlay ${active ? "current" : ""}`}></div>
      </header>
      
    </>
  );
}

export default Header;
