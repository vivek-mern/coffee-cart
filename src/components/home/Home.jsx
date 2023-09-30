import React from "react";
import { Link } from "react-router-dom";
import About from "../about/About";
import Product from "../product/Product";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content">
          <h3>fresh coffee in the morning</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis modi
            assumenda commodi optio quo? Alias error neque deserunt odio!
            Assumenda aperiam possimus ratione vero quas pariatur? Enim adipisci
            accusamus debitis Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta totam, odio,
          </p>
          <Link to="#" className="btn button">
            Get Yours now
          </Link>
        </div>
      </div>
      <About />
      <Product />
    </>
  );
};

export default Home;
