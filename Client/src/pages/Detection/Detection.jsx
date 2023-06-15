import React, { useState } from "react";
import "./Detection.css";
import LiveLong from "./images/LiveLong.jpg";
import ThumbsDown from "./images/ThumbsDown.jpg";
import ThumbsUp from "./images/ThumbsUp.jpg";
import ThankYou from "./images/ThankYou.jpg";
import Owner from "./images/Person.jpg";

const Detection = () => {
  const [selectedButton, setSelectedButton] = useState("ThumbsUp"); // Set the initial selected button

  const images = {
    LiveLong: LiveLong,
    ThumbsUp: ThumbsUp,
    ThumbsDown: ThumbsDown,
    ThankYou: ThankYou,
    Owner: Owner
  };
  const detection = {
    ThumbsUp: "It detect UP detection of Thumb, Place your hand in front of the screen and see the magic. ;)",
    ThumbsDown: "It is the oposite of Above one, It detect the Down detection of Thumb.",
    LiveLong: "In sign laguage this means Live Long, It is a greeting to those who we love.",
    ThankYou: "By placing both the hands in front of mouth is the way of saying Thank You to someone.",
    Owner: "The one last thing I added in this is my own face detection, It detect my feace."
  }
  const [theDetection, setTheDetection] = useState("ThumbsUp")
  const currentDetection = detection[theDetection]

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setTheDetection(buttonName)
    setTimeout(() => {
      const button = document.querySelector(".detection-button.selected");
      if (button) {
        button.classList.add("clicked");
        setTimeout(() => {
          button.classList.remove("clicked");
        }, 500);
      }
    }, 0);
  };

  return (
    <>
    <div className="detection-container">
      <div className="detection-buttons">
        <button
          className={`detection-button ${selectedButton === "ThumbsUp" ? "selected" : ""}`}
          onClick={() => handleButtonClick("ThumbsUp")}
        >
          Thumbs Up
        </button>
        <button
          className={`detection-button ${selectedButton === "ThumbsDown" ? "selected" : ""}`}
          onClick={() => handleButtonClick("ThumbsDown")}
        >
          Thumbs Down
        </button>
        <button
          className={`detection-button ${selectedButton === "LiveLong" ? "selected" : ""}`}
          onClick={() => handleButtonClick("LiveLong")}
        >
          Live Long
        </button>
        <button
          className={`detection-button ${selectedButton === "ThankYou" ? "selected" : ""}`}
          onClick={() => handleButtonClick("ThankYou")}
        >
          Thank You
        </button>
        <button
          className={`detection-button ${selectedButton === "Owner" ? "selected" : ""}`}
          onClick={() => handleButtonClick("Owner")}
        >
          Owner
        </button>
      </div>
      <div className="detection-content">
        {selectedButton && (
          <>
            <img src={images[selectedButton]} alt={selectedButton} className="detection-image" />
            <div className="detection-description">
              <h3 className="image-heading">{selectedButton}</h3>
              <p className="image-heading">{currentDetection}</p>
            </div>
          </>
        )}
      </div>
    </div>
    <hr />
    </>
  );
};

export default Detection;
