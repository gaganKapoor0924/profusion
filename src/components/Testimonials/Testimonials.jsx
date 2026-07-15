import React from "react";
import "./style.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import image from "../../assets/client-img.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>

        <div className="testimonials_sec">
          <TestimonialCard
            image={image}
            name="Aakash"
            company={"Airtel"}
            content="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu
"
          />
          <TestimonialCard
            image={image}
            name="Gagan"
            company={"google"}
            content="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu
"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
