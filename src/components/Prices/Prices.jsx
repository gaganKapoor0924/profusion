import React from "react";
import "./style.css";
import PriceItem from "../PriceItem/PriceItem";

const Prices = () => {
  return (
    <div className="our_price">
      <div className="container">
        {" "}
        <h2>OUR PRICE</h2>
        <div className="price_section">
          <PriceItem
            title="FIRST PRICE"
            price="$500"
            month="one month"
            content="Passages of Lorem Ipsum available, but the majority have suffered alteration"
          />
          <PriceItem
            title="SECOND PRICE"
            price="$1000"
            month="one month"
            content="Passages of Lorem Ipsum available, but the majority have suffered alteration"
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
