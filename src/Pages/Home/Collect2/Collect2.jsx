import React, { useState } from "react";
import "./Collect2.css";
import shape from "../../../Assets/circle/Elements-16.png";
import img from "../../../Assets/circle/Elements-02.png";
import img2 from "../../../Assets/circle/Elements-03.png";
import img3 from "../../../Assets/circle/Elements-04.png";
import img4 from "../../../Assets/circle/Elements-05.png";
import img5 from "../../../Assets/circle/Elements-06.png";
import img6 from "../../../Assets/circle/Elements-07.png";
import img7 from "../../../Assets/circle/Elements-08.png";
import letter from "../../../Assets/a.svg";


function Collect2({ dark }) {
  const data = [
    {
      identifier: "wallet",
      name: "Wallet",
      img: img6,
      desc: `The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`,
    },
    {
      identifier: "meta",
      name: "Metaverse",
      img: img3,
      desc: `The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`,
    },
    {
      identifier: "store",
      name: "Store",
      img: img,
      desc: `The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`,
    },
    {
      identifier: "box",
      name: "Mystery Box",
      img: img5,
      desc: `The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`,
    },
    {
      identifier: "mobile",
      name: "Mobile",
      img: img4,
      desc: `The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`,
    },
    {
      identifier: "cards",
      name: "Cards",
      img: img2,
      desc: `The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`,
    },
    {
      identifier: "sword",
      name: "Sword",
      img: img7,
      desc: `The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`,
    },
  ];
  const [imgstate, setImg] = useState(img6);
  const [name, setName] = useState("Wallet");
  const [desc, setDesc] =
    useState(`The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.`);
  const clickHandler = (e) => {
    const dataSet = e.target.dataset.text;
    document.querySelectorAll(".fading").forEach((elem) => {
      elem.classList.remove("fading");
    });
    setTimeout(() => {
      document.querySelectorAll(".right-box").forEach((elem) => {
        elem.classList.add("fading");
      });
    }, 500);
    setTimeout(() => {
      data.forEach((item) => {
        if (item.identifier === dataSet) {
          setImg(item.img);
          setName(item.name);
          setDesc(item.desc);
        }
      });
    }, 300);
  };
  return (
    <div className="collect2">
      <div data-aos="fade-right" className="collect2_left">
        <img src={shape} alt="" />
        <div onClick={clickHandler} data-text="wallet" className="collect-box">
          <img src={img6} alt="" />
          <p>WALLET</p>
        </div>
        <div onClick={clickHandler} data-text="meta" className="collect-box">
          <img src={img3} alt="" />
          <p>METAVERSE</p>
        </div>
        <div onClick={clickHandler} data-text="store" className="collect-box">
          <img src={img} alt="" />
          <p>STORE</p>
        </div>
        <div onClick={clickHandler} data-text="box" className="collect-box">
          <img src={img5} alt="" />
          <p>MYSTERY BOX</p>
        </div>
        <div onClick={clickHandler} data-text="mobile" className="collect-box">
          <img src={img4} alt="" />
          <p>MOBILE</p>
        </div>
        <div onClick={clickHandler} data-text="cards" className="collect-box">
          <img src={img2} alt="" />
          <p>CARDS</p>
        </div>
        <div onClick={clickHandler} data-text="sword" className="collect-box">
          <img src={img7} alt="" />
          <p>SWORD</p>
        </div>
      </div>
      <div className="collect2_right">
        <div data-aos="fade-left" className="right_top-collect">
          <div
            data-aos="fade-down"
            className={`find-top ${dark ? "top-dark" : ""}`}
          >
            <h1 className="big">ARCANE STATION</h1>
            <h1 className="small">ARCANE STATION</h1>
          </div>
          <p className={`${dark ? "dark-p" : ""}`}>
            Arcane station will feture both live projects, and future projects.
            To have an idea of what Arcane team is working on.
          </p>
        </div>
        <div className="right-box fading">
          <div className="box-top">
            <img src={imgstate} alt="" />
            <p>{name}</p>
          </div>
          <p>{desc}</p>
          <button>
            <img src={letter} alt="" /> BUY NOW
          </button>
        </div>
      </div>
      <div className="right-box mobile-box fading">
        <div className="box-top">
          <img src={imgstate} alt="" />
          <p>{name}</p>
        </div>
        <p>{desc}</p>
        <button>
          <img src={letter} alt="" /> COMING SOON
        </button>
      </div>
    </div>
  );
}

export default Collect2;
