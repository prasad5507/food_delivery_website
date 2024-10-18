import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            quibusdam praesentium quidem consequuntur nisi, veritatis vitae
            quaerat, dolor corrupti similique quo quia laudantium eos dolore
            vero accusantium, impedit delectus doloremque?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <Link
              to="https://www.linkedin.com/in/prasad-samrat-72b2112ab/"
              target="_blank"
            >
              {" "}
              <img src={assets.linkedin_icon} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delevery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-521-7845</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyfright">
        {" "}
        Copyright 2024 © Prasad samrat - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
