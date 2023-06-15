import React from "react";
import "./Window.css";
import { useNavigate } from "react-router-dom";

const Window = () => {
    const navigate = useNavigate()
  const handleGetStarted = () => {
    navigate("/sunbreathing");
  };

  return (
    <div className="window-container">
      <div className="centered-div">
        <h2 className="window-title">Make Detection</h2>
        <p className="window-introduction"><b>Sun Breathing</b> is a Machine Learning and Deep Learning Model which is created on <b>SSD MobileNet V2 FPNLite 320x320</b> Model of TensorFlow Model Zoo. It detect objects in real time through Web Camera. The technology used to create this system is Python, Machine Learning, Deep Learning, Nodejs, Express and React. <br />Here is the live example of Sun Breathing, Click below button to start the Sun Breathing</p>
        <button className="get-started-button" onClick={handleGetStarted}>
        GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Window;
