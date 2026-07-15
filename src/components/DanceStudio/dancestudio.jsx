import React from "react";
import image from "../../assets/about-img.png";
import "./style.css";
import Button from "../Button/Button";

const DanceStudio = () => {
  return (
    <div className="dance_studio">
      <div className="container">
        <h2>About Our dance studio</h2>
        <p>
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search
        </p>
        <img src={image} alt="" />
        <p className="other">
          using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy.
        </p>
        <Button text={"Read More"} />
      </div>
    </div>
  );
};

export default DanceStudio;
