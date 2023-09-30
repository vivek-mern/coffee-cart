import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="copyright-area">
        <div className="social-media">
          Get Connected:
          <Link to="#">
            <div className="fa fa-facebook"></div>
          </Link>
          <Link to="#">
            <div className="fa fa-twitter"></div>
          </Link>
          <Link to="#">
            <div className="fa fa-instagram"></div>
          </Link>
          <Link to="#">
            <div className="fa fa-youtube"></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
