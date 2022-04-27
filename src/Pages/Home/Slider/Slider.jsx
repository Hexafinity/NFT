import React, { useState } from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Owner from "../../../Assets/Group 356.png";
import silver1 from "../../../Assets/Slider/silver (1).png";
import silver2 from "../../../Assets/Slider/silver (2).png";
import silver3 from "../../../Assets/Slider/silver (3).png";
import silver4 from "../../../Assets/Slider/silver (4).png";
import silver5 from "../../../Assets/Slider/silver (5).png";
import legend1 from "../../../Assets/Slider/legend (1).png";
import legend2 from "../../../Assets/Slider/legend (2).png";
import diamond from "../../../Assets/Slider/diamond (1).png";
import diamond2 from "../../../Assets/Slider/diamond (2).png";
import diamond3 from "../../../Assets/Slider/diamond (3).png";
import gold from "../../../Assets/Slider/gold (1).png";
import gold2 from "../../../Assets/Slider/gold (2).png";
import gold3 from "../../../Assets/Slider/gold (3).png";
import gold4 from "../../../Assets/Slider/gold (4).png";
import gold5 from "../../../Assets/Slider/gold (5).png";
import epic from "../../../Assets/Slider/epic (1).png";
import epic2 from "../../../Assets/Slider/epic (2).png";
import star from "../../../Assets/star.svg";
import eye from "../../../Assets/eye.png";
import letter from "../../../Assets/a.svg";
//open slider desktop-------------------------------------------------------
import silverOpen1 from "../../../Assets/Slider/Open slider/SILVER/3.png";
import silverOpen2 from "../../../Assets/Slider/Open slider/SILVER/1.png";
import silverOpen3 from "../../../Assets/Slider/Open slider/SILVER/2.png";
import silverOpen4 from "../../../Assets/Slider/Open slider/SILVER/5.png";
import silverOpen5 from "../../../Assets/Slider/Open slider/SILVER/4.png";
import goldOpen1 from "../../../Assets/Slider/Open slider/GOLD/2.png";
import goldOpen2 from "../../../Assets/Slider/Open slider/GOLD/3.png";
import goldOpen3 from "../../../Assets/Slider/Open slider/GOLD/1.png";
import goldOpen4 from "../../../Assets/Slider/Open slider/GOLD/5.png";
import goldOpen5 from "../../../Assets/Slider/Open slider/GOLD/4.png";
import diamondOpen1 from "../../../Assets/Slider/Open slider/DIAMOND/1.png";
import diamondOpen2 from "../../../Assets/Slider/Open slider/DIAMOND/2.png";
import diamondOpen3 from "../../../Assets/Slider/Open slider/DIAMOND/3.png";
import epicOpen1 from "../../../Assets/Slider/Open slider/EPIC/1.png";
import epicOpen2 from "../../../Assets/Slider/Open slider/EPIC/2.png";
import legendOpen1 from "../../../Assets/Slider/Open slider/LEGENDARY/1.png";
import legendOpen2 from "../../../Assets/Slider/Open slider/LEGENDARY/2.png";
// phone backgrounds ----------------------------------------------
import silverOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/PIZZA-DELIVERY-ARC.png";
import silverOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/ACADEMY-ARC.png";
import silverOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/ARC.png";
import silverOpen4_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/NURSE-ARC.png";
import silverOpen5_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/OFFICER-ARC.png";
import goldOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ASTRONAUT-ARC.png";
import goldOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/BASKET-PLAYER-ARC.png";
import goldOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ELITE-ARC.png";
import goldOpen4_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ARCADE-ARC.png";
import goldOpen5_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/PAJAMA-ARC.png";
import diamondOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/ROYAL-STAR-ARC.png";
import diamondOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/STARSHIP-ARC.png";
import diamondOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/SAKURA-ARC.png";
import epicOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/EPIC/JUSTICE-ARC.png";
import epicOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/EPIC/MASKED-DEVIL-ARC.png";
import legendOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/LEGENDARY/THE-LIGHT-KNIGHT-ARC.png";
import legendOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/LEGENDARY/GOLDEN-ARC.png";
function Slider({ darkMode }) {
  const images = [
    silver3,
    silver2,
    silver1,
    silver4,
    silver5,
    gold,
    gold2,
    gold3,
    gold4,
    gold5,
    diamond,
    diamond2,
    diamond3,
    epic,
    epic2,
    legend1,
    legend2,
  ];
  const data = [
    {
      num: 0,
      img: silverOpen3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      star: [1],
      name: "ARC",
      phonebg: silverOpen3_bgPhone,
    },
    {
      num: 1,
      img: silverOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      star: [1],
      name: "ACADEMY ARC",
      phonebg: silverOpen2_bgPhone,
    },
    {
      num: 2,
      img: silverOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      star: [1],
      name: "PIZZA DELIVERY ARC",
      phonebg: silverOpen1_bgPhone,
    },
    {
      num: 3,
      img: silverOpen4,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      star: [1],
      name: "NURSE ARC",
      phonebg: silverOpen4_bgPhone,
    },
    {
      num: 4,
      img: silverOpen5,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      star: [1],
      name: "OFFICER ARC",
      class: "officer",
      phonebg: silverOpen5_bgPhone,
    },
    {
      num: 5,
      img: goldOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      star: [1, 2],
      name: "ASTRONAUT ARC",
      phonebg: goldOpen1_bgPhone,
    },
    {
      num: 6,
      img: goldOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      star: [1, 2],
      name: "BASKET PLAYER ARC",
      phonebg: goldOpen2_bgPhone,
    },
    {
      num: 7,
      img: goldOpen3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      star: [1, 2],
      name: "ELITE ARC",
      phonebg: goldOpen3_bgPhone,
    },
    {
      num: 8,
      img: goldOpen4,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      star: [1, 2],
      name: "ARCADE ARC",
      phonebg: goldOpen4_bgPhone,
    },
    {
      num: 9,
      img: goldOpen5,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      star: [1, 2],
      name: "PAJAMA ARC",
      phonebg: goldOpen5_bgPhone,
    },
    {
      num: 10,
      img: diamondOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Diamond",
      star: [1, 2, 3],
      phonebg: diamondOpen2_bgPhone,
      name: "STARSHIP ARC",
    },
    {
      num: 11,
      img: diamondOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Diamond",
      star: [1, 2, 3],
      phonebg: diamondOpen1_bgPhone,
      name: "ROYAL STAR ARC",
    },
    {
      num: 12,
      img: diamondOpen3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Diamond",
      star: [1, 2, 3],
      phonebg: diamondOpen3_bgPhone,
      name: "SAKURA ARC",
    },
    {
      num: 13,
      img: epicOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Epic",
      star: [1, 2, 3, 4],
      phonebg: epicOpen1_bgPhone,
      name: "JUSTICE ARC",
    },
    {
      num: 14,
      img: epicOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Epic",
      star: [1, 2, 3, 4],
      phonebg: epicOpen2_bgPhone,
      name: "MASKED DEVIL ARC",
    },
    {
      num: 15,
      img: legendOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Legendary",
      phonebg: legendOpen1_bgPhone,
      star: [1, 2, 3, 4, 5],
      name: "THE LIGHT KNIGHT ARC",
    },
    {
      num: 16,
      img: legendOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Legendary",
      phonebg: legendOpen2_bgPhone,
      star: [1, 2, 3, 4, 5],
      name: "GOLDEN ARC",
    },
  ];
  const [open, setOpen] = useState(false);
  const [view, showEye] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");
  const [dark, setDark] = useState("");
  const [phoneImg, setPhoneImg] = useState("");
  const [starA, setStar] = useState([]);
  const [name, setName] = useState("");
  const [class2, setClass] = useState("");
  const clickHandler = (e) => {
    if (darkMode === true) {
      setDark("dark");
    } else {
      setDark("");
    }
    setOpen(true);
    const dataSet = e.target.dataset.num;
    data.forEach((elem) => {
      if (parseInt(elem.num) === parseInt(dataSet)) {
        setDesc(elem.desc);
        setColor(elem.color);
        setImg(elem.img);
        setStar(elem.star);
        setName(elem.name);
        setPhoneImg(elem.phonebg);
        if (elem.class != null) {
          setClass(elem.class);
        }
      }
    });
  };
  return (
    <div className="slider">
      <div className={`overlay-2 ${open ? "down" : ""}`}></div>
      <div className={`open-box-slider ${open ? `down-box ${dark}` : ""}`}>
        <i
          onClick={() => {
            showEye((prev) => {
              const copy = [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ];

              return copy;
            });
            setOpen(false);
            console.log(view);
          }}
          className="fas fa-times close-box"
        ></i>
        <div className="mobile-img-slider mobile-top">
          <div className=" arc-title">
            <h1 className={`arc-name ${darkMode ? "dark-p" : ""}`}>{name}</h1>
          </div>
          <div className="rarity-div">
            <p className={`rarity-box ${color}`}>{`${color} Arc`}</p>
            <div className="star-div">
              {starA.map((elem, index) => {
                return <img src={star} key={index} alt="" />;
              })}
            </div>
          </div>
        </div>
        <div className="left-slider-box">
          <img
            className={`girl-img desktop-img-slider ${class2}`}
            src={img}
            alt=""
          />
          <img
            className={`girl-img mobile-img-slider ${class2}`}
            src={phoneImg}
            alt=""
          />
        </div>
        <div className="right-slider-box">
          <div className="desktop-img-slider arc-title">
            <h1 className={`arc-name ${darkMode ? "dark-p" : ""}`}>{name}</h1>
          </div>
          <div className="desktop-img-slider rarity-div">
            <p className={`rarity-box ${color}`}>{`${color} Arc`}</p>
            <div className="star-div">
              {starA.map((elem, index) => {
                return <img src={star} key={index} alt="" />;
              })}
            </div>
          </div>
          <div className="bio-div">
            <h1>BIO</h1>
            <p className="desc-bio">{desc}</p>
          </div>
          <div className="owners-div">
            <img src={Owner} alt="" className="owner" />
            <p className="owner-p">
              600 <br /> OWNERS
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down"
        style={{ marginBottom: "6rem" }}
        className={`find-top ${darkMode ? "top-dark" : ""}`}
      >
        <h1 className="big">COLLECT THEM ALL</h1>
        <h1 className="small">COLLECT THEM ALL</h1>
      </div>
      <Splide
        options={{
          interval: 2000,
          autoplay: true,
          rewind: true,
          loop: true,
          perPage: 4,
          height: "auto",
          width: "100%",
          arrows: true,
          focus: "center",
          pagination: false,
          drag: true,
          pauseOnHover: true,
          breakpoints: {
            1000: {
              width: "100%",
              perPage: 2,
            },
            652: {
              width: "100%",
              perPage: 1,
            },
          },
        }}
      >
        {images.map((img, key) => {
          return (
            <SplideSlide key={key}>
              <div
                onClick={() => {
                  showEye((prev) => {
                    const copy = [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                    ];
                    copy[key] = true;
                    return copy;
                  });
                }}
                className="slide-box"
              >
                <div
                  style={{ pointerEvents: "none" }}
                  className="slide-box-top"
                >
                  <img style={{ pointerEvents: "none" }} src={img} alt="" />
                </div>
                <div className={`eye-div ${view[key] ? "open-eye" : ""}`}>
                  <img
                    className={`${view[key] ? "open-eye" : ""}`}
                    data-num={key}
                    onClick={clickHandler}
                    src={eye}
                    alt=""
                  />
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <button data-aos="fade-up">
        <img src={letter} alt="" />
        Buy MysteryBox
      </button>
    </div>
  );
}

export default Slider;
