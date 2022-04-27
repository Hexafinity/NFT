import React, { useState } from "react";
import { Player, ControlBar ,Shortcut} from 'video-react';
import Button from 'reactstrap-button-loader';
import 'video-react/dist/video-react.css';
import axios from 'axios';

import { useWeb3React } from "@web3-react/core";
import "./MysteryIndex.css";
import box from "../../../Assets/mystrey.png";
import currency from "../../../Assets/currency.png";
import letterA from "../../../Assets/Token/Elements-59.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connectNFTContract } from '../../../Helper/hooks';
import { chain_info } from '../../../Helper/chain';
//import Owner from "../../../Assets/Group 356.png";
//import star from "../../../Assets/star.svg";
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
// import diamondOpen1 from "../../../Assets/Slider/Open slider/DIAMOND/1.png";
// import diamondOpen2 from "../../../Assets/Slider/Open slider/DIAMOND/2.png";
// import diamondOpen3 from "../../../Assets/Slider/Open slider/DIAMOND/3.png";
import epicOpen1 from "../../../Assets/Slider/Open slider/EPIC/1.png";
import epicOpen2 from "../../../Assets/Slider/Open slider/EPIC/2.png";
import legendOpen1 from "../../../Assets/Slider/Open slider/LEGENDARY/1.png";
import legendOpen2 from "../../../Assets/Slider/Open slider/LEGENDARY/2.png";
// phone backgrounds ----------------------------------------------
import silverOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/ACADEMY-ARC.png";
import silverOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/ARC.png";
import silverOpen4_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/NURSE-ARC.png";
import silverOpen5_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/OFFICER-ARC.png";
import silverOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/PIZZA-DELIVERY-ARC.png";
import goldOpen4_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ARCADE-ARC.png";
import goldOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ASTRONAUT-ARC.png";
import goldOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/BASKET-PLAYER-ARC.png";
import goldOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ELITE-ARC.png";
import goldOpen5_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/PAJAMA-ARC.png";
import legendOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/LEGENDARY/GOLDEN-ARC.png";
import legendOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/LEGENDARY/THE-LIGHT-KNIGHT-ARC.png";
// import diamondOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/ROYAL-STAR-ARC.png";
// import diamondOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/STARSHIP-ARC.png";
// import diamondOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/SAKURA-ARC.png";
import epicOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/EPIC/JUSTICE-ARC.png";
import epicOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/EPIC/MASKED-DEVIL-ARC.png";
//import butt from '../../../Assets/Slider/1--Before.png';

import video1 from '../../../Assets/Slider/Videos/video1.mp4';
import video2 from '../../../Assets/Slider/Videos/video2.mp4';
import video3 from '../../../Assets/Slider/Videos/video3.mp4';
import video4 from '../../../Assets/Slider/Videos/video4.mp4';
import video5 from '../../../Assets/Slider/Videos/video5.mp4';
import video6 from '../../../Assets/Slider/Videos/video6.mp4';
import video7 from '../../../Assets/Slider/Videos/video7.mp4';
import video8 from '../../../Assets/Slider/Videos/video8.mp4';
import video9 from '../../../Assets/Slider/Videos/video9.mp4';
import video10 from '../../../Assets/Slider/Videos/video10.mp4';
import video11 from '../../../Assets/Slider/Videos/video11.mp4';
import video12 from '../../../Assets/Slider/Videos/video12.mp4';
import video13 from '../../../Assets/Slider/Videos/video13.mp4';
import video14 from '../../../Assets/Slider/Videos/video14.mp4';



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
    video: video1
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
    video: video2
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
    video: video3
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
    video: video4
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
    video: video5
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
    video: video6
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
    video: video7
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
    video: video8
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
    video: video9
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
    video: video10
  },
  // {
  //   num: 10,
  //   img: diamondOpen2,
  //   desc: ` Mae has always been a good kitty, getting straight A's, while even
  //         running her highschool bookclub on the side. She always pushes
  //           herself to do the best she can in everything that she does. She
  //           may have not decided what to do outside of highschool yet, but she
  //           does know that she'll achieve whatever she puts her mind to, no
  //           matter what!"`,
  //   color: "Diamond",
  //   star: [1, 2, 3],
  //   phonebg: diamondOpen2_bgPhone,
  //   name: "STARSHIP ARC",
  // },
  // {
  //   num: 11,
  //   img: diamondOpen1,
  //   desc: ` Mae has always been a good kitty, getting straight A's, while even
  //         running her highschool bookclub on the side. She always pushes
  //           herself to do the best she can in everything that she does. She
  //           may have not decided what to do outside of highschool yet, but she
  //           does know that she'll achieve whatever she puts her mind to, no
  //           matter what!"`,
  //   color: "Diamond",
  //   star: [1, 2, 3],
  //   phonebg: diamondOpen1_bgPhone,
  //   name: "ROYAL STAR ARC",
  // },
  // {
  //   num: 12,
  //   img: diamondOpen3,
  //   desc: ` Mae has always been a good kitty, getting straight A's, while even
  //         running her highschool bookclub on the side. She always pushes
  //           herself to do the best she can in everything that she does. She
  //           may have not decided what to do outside of highschool yet, but she
  //           does know that she'll achieve whatever she puts her mind to, no
  //           matter what!"`,
  //   color: "Diamond",
  //   star: [1, 2, 3],
  //   phonebg: diamondOpen3_bgPhone,
  //   name: "SAKURA ARC",
  // },
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
    video: video11
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
    video: video12
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
    video: video13
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
    video: video14
  },
];

var qs = require('qs');

const api_url = "https://arctoken.net/nft/";

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

function MysteryIndex({ dark }) {
  const context = useWeb3React();
  const { library, account, chainId } = context;
  const [open, setOpen] = useState(false);
  const [videoopen, setVideoopen] = useState(false)
 // const [name, setName] = useState("GOLDEN ARC");
  //const [class2, setClass] = useState("officer");
  //const [starA, setStar] = useState([1, 2]);
  const [value, setValue] = useState(1);
  //const [phoneImg, setPhoneImg] = useState(goldOpen1_bgPhone);
 // const [img, setImg] = useState(silverOpen1);
 // const [color, setColor] = useState("Legendary");
  //const [desc, setDesc] = useState(``);
  const [nftmintdata, setNftmintdata] = useState([]);
  const [nfttotalcount, setNfttotalcount] = useState(0);
  const [nftopencount, setNftopencount] = useState(0);
  const [video, setVideo] = useState('');
  const [btnloading, setBtnloading] = useState(false);
  //const [ownercount, setOwnercount] = useState(0);
  //const [totalownercount, setTotalownercount] = useState([]);


  const increment = (e) => {
    if (value < 10 && value >= 1) {
      setValue((prev) => {
        return prev + 1;
      });
    }
  };

  const decrement = (e) => {
    if (value <= 10 && value > 1) {
      setValue((prev) => {
        return prev - 1;
      });
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue((prev) => {
      prev += val;
    });
    if (val > 10) {
      setValue(10);
    } else if (val < 1) {
      setValue(1);
    }
  };

  const handleNextModalButton = (e) => {
    e.preventDefault();
    try {
      if (nfttotalcount > nftopencount) {

        setVideo(nftmintdata[nftopencount]['video']);
        setVideoopen(true)
        setTimeout(() => {
          setVideoopen(true)
         // setDesc(nftmintdata[nftopencount]['desc']);
         // setColor(nftmintdata[nftopencount]['color']);
         // setImg(nftmintdata[nftopencount]['img']);
         // setStar(nftmintdata[nftopencount]['star']);
         // setName(nftmintdata[nftopencount]['name']);
         // setPhoneImg(nftmintdata[nftopencount]['phonebg']);
         // setOwnercount(totalownercount[nftopencount]);
        //  if (nftmintdata[nftopencount]['class'] != null) {
         //   setClass(nftmintdata[nftopencount]['class']);
         // }
          setNftopencount((prevNftopencount) => prevNftopencount + 1)
          setOpen(true);
        },6000 );

      }
      else {
        setOpen(false);
        setVideoopen(false)
        toast.success('Success ! Your NFT Add In My Item ');
      }
    }
    catch (err) {
      toast.error(err.meassge);
      setOpen(false);
      setVideoopen(false)
    }
  }


  const handleBuy = async (e) => {
    e.preventDefault();

    try {
      if (account) {
        setBtnloading(true);
        let provider = library.getSigner();
        let nft_contract = await connectNFTContract(chain_info[chainId]['nft_address'], provider);
        let price = await nft_contract.price();
        let total_price = parseFloat(price) * parseFloat(value)
        const tx = await nft_contract.mint(value, 0, { "value": total_price });
        toast.success("Successfully Transaction! Don'\t Close Website !");

        toast.success('Waiting for confirmation...', { autoClose: 15000 });
        const receipt = await tx.wait();

        if (receipt && typeof receipt.status !== 'undefined') {
          if (receipt.status === 1) {
            receipt.count = value;

            let saveTx = await axios.post(`${api_url}api-mint-insert`, qs.stringify(receipt), headers);
            if (saveTx.data !== 'undefined') {
              if (saveTx.data.error === 'OK') {
                toast.success('Last Transaction is successfully!');
                if (typeof saveTx.data.nft_data !== 'undefined' && typeof saveTx.data.total_insert !== 'undefined') {
                  let response = saveTx.data.nft_data;
                  let count = saveTx.data.total_insert;
                  let nftMint = [];
                  let owner_data = [];
                  await Promise.all(response.map(async (row) => {
                    nftMint.push(data[row['airdrop_id'] - 1]);
                    owner_data.push(row['owner_count']);
                  }));

                 // setTotalownercount(owner_data);
                  setNftmintdata(nftMint);
                  setNfttotalcount(count);

                  if (count > nftopencount) {

                    setVideo(nftMint[nftopencount]['video']);
                    setVideoopen(true)
                    setTimeout(() => {
                      setVideoopen(true)
                     // setDesc(nftMint[nftopencount]['desc']);
                     // setColor(nftMint[nftopencount]['color']);
                     // setImg(nftMint[nftopencount]['img']);
                     // setStar(nftMint[nftopencount]['star']);
                     // setName(nftMint[nftopencount]['name']);
                      //setPhoneImg(nftMint[nftopencount]['phonebg']);
                     // setOwnercount(owner_data[nftopencount]);
                    //  if (nftMint[nftopencount]['class'] != null) {
                     //   setClass(nftMint[nftopencount]['class']);
                     // }
                      setNftopencount((prevNftopencount) => prevNftopencount + 1);
                      setBtnloading(false);
                      setOpen(true);
                   }, 6000)

                  }
                  else {
                    setOpen(false);
                    setBtnloading(false);
                  }

                }
                else {
                  toast.error('something went wrong!');
                  setBtnloading(false);
                }
              }
              else {
                toast.error(saveTx.data.error);
                setBtnloading(false);
              }
            }
            else {
              toast.error('something went wrong!');
              setBtnloading(false);
            }
          }
          else if (receipt.status === 0) {
            toast.error('Oops ! Last Transaction is failed');
            setBtnloading(false);
          }
          else {
            toast.error('No Transaction Data Found!');
            setBtnloading(false);
          }
        }
        else {
          toast.error('something went wrong!')
          setBtnloading(false);
        }
      }
      else {
        toast.error('Please Connect Wallet!');
        setBtnloading(false);
      }
    }
    catch (err) {
      toast.error(err.meassge);
      setBtnloading(false);
    }

  }


  return (
    <>
      <ToastContainer />
      <div className="mystery-index">
        <img src={letterA} alt="" className="letter-abs" />
        <div className="left-mystery-index">
          <img src={box} alt="" />
        </div>
        <div className="right-mystery-index">
          <h1 className={`${dark ? "white" : ""}`}>COMMON MYSTERY BOX</h1>
          <h1 className={`sup ${dark ? "white" : ""}`}>
            10.00 BUSD <sup>per box</sup> <span className="grey">-$10 USD</span>
          </h1>
          <div className="mid-index">
            <div className="quantity-index num1">
              <p className={`${dark ? "white" : ""}`}>Quantity</p>
              <div className="input-div-index">
                <input
                  maxLength="2"
                  value={value}
                  min="1"
                  max="10"
                  type="tel"
                  onChange={handleChange}
                  className="input-quan"
                />
                <p onClick={increment} className="increment">
                  {"<"}
                </p>
                <p onClick={decrement} className="decrement">
                  {">"}
                </p>
              </div>
            </div>
            <div className="quantity-index">
              <p className={`${dark ? "white" : ""}`}>Buy with</p>
              <img src={currency} alt="" className="currency" />
              <Button loading={btnloading} className="index-btn" onClick={(e) => handleBuy(e)}>Buy with BUSD</Button>
            </div>
          </div>
          <div className="bottom-right-index">
            <h1 className={`${dark ? "white" : ""}`}>
              WHAT RARITIES INSIDE/DROP RATE
            </h1>
            <div className="index-rarity-div">
              <p className="index-rarity silver-rarity">Silver Arcane</p>
              <p className="index-rarity gold-rarity">Gold Arcane</p>
              <p className="index-rarity epic-rarity">Epic Arcane</p>
              <p className="index-rarity diamond-rarity">Diamond Arcane</p>
              <p className="index-rarity challenger-rarity">Challenger Arcane</p>
            </div>
          </div>
        </div>
        {videoopen &&
          <>
       {/* <div className={`overlay-2-2 ${videoopen ? "down" : ""} `}></div>  */}     
            <div className={`open-box-slider3 ${videoopen ? `down-box ${dark}` : ""}`}>

              <Player playsInline fluid={false} width={738} 
                autoPlay
                src={video}
              >


                <ControlBar autoHide={false} disableDefaultControls={true}>
                {open &&
          <>
         
    
                  <button className="connect-wallet desktop-connect" onClick={(e) => { handleNextModalButton(e); setOpen(false); }}>Open Next</button>
                  <button className="connect-wallet mobile-connect" onClick={(e) => { handleNextModalButton(e); setOpen(false); }}>Open Next</button>
        
          </>
        }
                </ControlBar>
                <Shortcut clickable={false} />
              </Player>
            </div>
          </>
        }




        {/* <Modal show={open} size="ms"
                          <PlayToggle />

          aria-labelledby="contained-modal-title-vcenter"
          centered style={{ "color": "#000" }}>
          <Modal.Body> */}
        {/* <div className={`overlay-2-2 ${open ? "down" : ""} `}></div> 
        {open &&
          <>
           <div className={`open-box-slider2 ${open ? `down-box ${dark}` : ""}`}>
              <div className="mobile-img-slider mobile-top">

               
              
              </div>
              <div className="left-slider-box">
  
              <div className="right-slider-box">
               
                </div>
              
                 
                  <button className="connect-wallet desktop-connect" onClick={(e) => { handleNextModalButton(e); setOpen(false); }}>Open Next</button>
                  <button className="connect-wallet mobile-connect" onClick={(e) => { handleNextModalButton(e); setOpen(false); }}>Open Next</button>

              </div>

        </div>
            <div
              style={{ marginBottom: "6rem" }}
              className={`find-top ${dark ? "top-dark" : ""}`}
            >
              <h1 className="big">COLLECT THEM</h1>
              <h1 className="small">ARCANE NFTS IN THIS BOX</h1>
            </div>
          </>
        }*/}
        {/* </Modal.Body>
        </Modal> */}





      </div>
    </>
  );
}

export default MysteryIndex;
