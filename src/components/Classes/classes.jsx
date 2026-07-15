import React, { useEffect, useState } from "react";
import "./style.css";
import ImageBox from "../ImageBox/imagebox";
import image1 from "../../assets/img-1.png";
import Button from "../Button/Button";

const Classes = () => {
  const imageData = [
    {
      id: 1,
      path: image1,
      title: "Style Dance",
    },
    {
      id: 2,
      path: image1,
      title: "Rock Dance",
    },
    {
      id: 3,
      path: image1,
      title: "Hip Hop Dance",
    },
    {
      id: 4,
      path: image1,
      title: "Style Dance2",
    },
    {
      id: 5,
      path: image1,
      title: "Rock Dance2",
    },
    {
      id: 6,
      path: image1,
      title: "Hip Hop Dance2",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const visibleImages = imageData.slice(currentImage, currentImage + 3);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : imageData.length - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="class_section">
      <div className="container">
        <h2>OUR CLASSES</h2>
        <div className="dance_styles">
          {visibleImages.map((visible) => {
            return <ImageBox image={visible.path} title={visible.title} />;
          })}
        </div>
        <div className="btn_section">
          <Button text="Previous" handleClick={handlePrevious} />
          <Button text="Next" handleClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Classes;
