import React from "react";
import "./style.css";

const TestimonialCard = (props) => {
  return (
    <div className="testimonials_card">
      <div className="card_left">
        <img src={props.image} alt="" />
      </div>
      <div className="card_right">
        <h2>{props.name}</h2>
        <span>{props.company}</span>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
