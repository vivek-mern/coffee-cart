import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="heading">
          <span>ABOUT</span> US
        </h1>
        <div className="row">
          <div className="image">
            <img src="../about-image.jpg" alt="aboutimage" />
          </div>
          <div className="content">
            <h3>WHAT MAKES OUR COFFEE SPECIAL?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae voluptas quod reprehenderit est tenetur odit deleniti
              quam itaque facilis, voluptatibus dolores sed totam beatae ipsam,
              nobis quae ab odio doloribus.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae voluptas quod reprehenderit est tenetur odit deleniti
            </p>
            <Link className="btn" to="#">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
