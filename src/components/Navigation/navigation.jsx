import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navItems">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/testimonials"}>Client</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
