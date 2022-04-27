import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Token from "./Pages/Token/Token.jsx";
import MysteryBox from "./Pages/MysteryBox/MysteryBox.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";

import {getLibrary} from './Helper/NetworkButton';


function App() {
  const [dark, setDark] = useState(false);
  const [click, setClick] = useState(1);

  const darkMode = (value) => {
    return setDark(value);
  };
  const clickHandler = (value) => {
    setClick((prev) => {
      return (prev += value);
    });
  };
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      AOS.refreshHard();
      AOS.refresh();
    }, 500);
  }, [click]);
  return (
    <div className="App">
      <Router>
        <Web3ReactProvider getLibrary={getLibrary}>
         
          <Header click={clickHandler} darkSet={darkMode} />
          <Routes>
            <Route exact path="/" element={<Home dark={dark} />}></Route>
            <Route path="/Token" element={<Token dark={dark} />}></Route>
            <Route
              path="/MysteryBox"
              element={<MysteryBox dark={dark} />}
            ></Route>
          </Routes>
        </Web3ReactProvider>
      </Router>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
