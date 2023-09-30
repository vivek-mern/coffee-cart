import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
const Header = () => {
  const number = useSelector((state) => state.Cart.cartItem);
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="./logo.png" alt="logo" />
          </Link>
        </div>
        <div className="col-md-5 my-auto search">
          <form role="search">
            <div className="input-group">
              <input
                type="search"
                placeholder="Search your product"
                className="form-control p-3"
              />
              <button className="btn bg-white">
                <div className="fa fa-search"></div>
              </button>
            </div>
          </form>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </div>
        <div className="icons">
          <Link to="#">
            <div className="fa fa-heart"></div>
          </Link>
          <Link to="/cart">
            <div className="fas fa-shopping-cart" id="cart-btn">
              <span className="position-absolute translate-middle p-1  rounded-circle cart-number">
                {number.length}
              </span>
            </div>
          </Link>

          <Link
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            className="menu-btn"
          >
            <div className="fa fa-bars"></div>
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                PRODUCT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
