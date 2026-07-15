import React from "react";
import logo from "../../assets/logo.png";
import Navigation from "../Navigation/navigation";
import "./style.css";

const Header = () => {
  return (
    <div className="header_section">
      <div className="container">
        <div className="top_header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Navigation />
          <div className="other">
            <div className="phone">Call: +1234567890</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
