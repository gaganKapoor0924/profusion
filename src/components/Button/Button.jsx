import React from "react";
import "./style.css";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

export default Button;
