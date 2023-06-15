import React from "react";
import "./Main.css";
import Home from "../Home/Home";
import Detection from "../Detection/Detection";
import Window from "../Window/WIndow";
import sunBreathingLogo from "./images/sun_breathing_logo.png";

const Main = () => {
  return (
    <>
    <div className="main-container">
      <div className="main-content">
        <h1 className="main-title">
          <span className="main-title-intro">Introducing to</span>
          Sun Breathing
        </h1>
        <p className="main-introduction">
          Sun Breathing is an object Detection System which is built on the <b>SSD MobileNet V2 FPNLite 320x320</b> of TensorFlow Model Zoo. It detects objects in real-time.
        </p>
      </div>
      <div className="main-image">
        <img src={sunBreathingLogo} alt="Sun Breathing Logo" className="logo-image" />
      </div>
    </div>
    <Home />
    <Detection />
    <Window />
    </>
    
  );
};

export default Main;
