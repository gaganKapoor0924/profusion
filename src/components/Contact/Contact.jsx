import React from "react";
import "./style.css";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <Button text="Send Now" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
