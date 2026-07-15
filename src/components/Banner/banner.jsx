import React from "react";
import banner from "../../assets/banner-img.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner_section">
      <h2>START DANCE</h2>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
