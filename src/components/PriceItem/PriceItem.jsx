import React from "react";
import "./style.css";
import Button from "../Button/Button";

const PriceItem = (props) => {
  return (
    <div className="price">
      <h2>{props.title}</h2>
      <div className="items">
        <h3>
          {props.price}
          <span>/{props.month}</span>
        </h3>
        <p>{props.content}</p>
      </div>
      <Button text="JOIN NOW" />
    </div>
  );
};

export default PriceItem;
