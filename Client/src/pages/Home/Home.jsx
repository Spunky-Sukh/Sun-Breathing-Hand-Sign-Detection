import React, { useState } from "react";
import "./Home.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";

const Home = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  const title = ["Total Loss", "Learning Rate", "Average Precision", "Average Recall", "Testing Output"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const currentTitle = title[currentTitleIndex];

  const descriptions = [
    "Total loss, refers to the cumulative measure of the discrepancy between the predicted outputs of this system and the ground truth labels of the objects. It represents the overall error or deviation of the model's predictions from the actual objects present in the real-time video feed captured by the webcam. The total loss is computed by aggregating individual losses for each object detected, considering factors such as object localization, classification accuracy, and bounding box regression. By minimizing the total loss during the training phase, we aim to optimize the model's performance and improve its ability to accurately detect and classify objects in real-time. The total loss serves as a critical metric for assessing the effectiveness of this system and guides us in fine-tuning the model parameters and architecture to achieve better accuracy and precision in object detection.",
    "Learning rate refers to a parameter that controls the size of the steps taken during the training of a machine learning model. It determines how quickly or slowly the model learns from the data. A higher learning rate leads to faster learning but may risk overshooting the optimal solution, while a lower learning rate ensures more cautious updates but can slow down the learning process. Finding the right balance is crucial to achieve efficient and accurate training of the model.",
    "Average Precision (AP) is a performance metric used in object detection and other information retrieval tasks to evaluate the precision-recall trade-off. It measures the quality of the ranked list of predictions by computing the area under the precision-recall curve. AP summarizes how well the model retrieves relevant objects at different levels of recall. A higher AP indicates better performance in terms of precision and recall. It is a useful metric for assessing the accuracy and effectiveness of an object detection system, providing a single numerical value that represents its overall performance",
    "Average Recall (AR) is a performance metric used in object detection and other information retrieval tasks to assess the model's ability to retrieve relevant objects from the dataset. It measures the proportion of relevant objects that are successfully identified by the model. AR is computed by calculating the average recall at different levels of precision. A higher AR indicates a higher percentage of relevant objects being detected by the model. It is a valuable metric for evaluating the completeness and comprehensiveness of an object detection system, providing insights into its ability to capture all relevant objects within a given dataset.",
    "It is the Output of this project and it detect the hand sign whose meaning is 'Thank You' and its accuracy is 100% becaust it is taken from testing set"
  ];
  const [currentDescriptionIndex, setcurrentDescriptionIndex] = useState(0);
  const currentDescription = descriptions[currentDescriptionIndex];



  const handleImageChange = (direction) => {
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setCurrentTitleIndex((prevIndex) => (prevIndex ===0 ? title.length -1 : prevIndex - 1));
      setcurrentDescriptionIndex((prevIndex) => (prevIndex === 0 ? descriptions.length -1 : prevIndex - 1));

    } else if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setCurrentTitleIndex((prevIndex) => (prevIndex === title.length - 1 ? 0 : prevIndex + 1));
      setcurrentDescriptionIndex((prevIndex) => (prevIndex === title.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="home-home">
    <div className="home-container" onClick={(e) => {
      const { clientX } = e;
      const { width } = e.currentTarget.getBoundingClientRect();
      const halfWidth = width / 2;
      if (clientX < halfWidth) {
        handleImageChange("prev");
      } else {
        handleImageChange("next");
      }
    }}>
      <h3 className="home-title">{currentTitle}</h3>
      <div className="home-content">
        <img src={currentImage} alt={`Image ${currentImageIndex + 1}`} className="home-image" />
        <p className="home-description">
          {currentDescription}
        </p>
      </div>
    </div>
    {/* <hr /> */}
    </div>
  );
};

export default Home;
