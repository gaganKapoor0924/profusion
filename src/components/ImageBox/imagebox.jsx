import React from "react";
import "./style.css";
import Button from "../Button/Button";

const ImageBox = (props) => {
  return (
    <div className="image_box">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <h2>{props.title}</h2>
      <Button text={"Read More"} />
    </div>
  );
};

export default ImageBox;
