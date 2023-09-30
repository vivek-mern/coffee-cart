import React from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import { toast } from "react-hot-toast";
import coffee from "../../data/data.json";

const Product = () => {
  const dispatch = useDispatch();

  const addCart = (data) => {
    dispatch({
      type: "add",
      payload: data,
    });
    dispatch({
      type: "calculate",
    });
    toast.success("Added to cart");
  };

  return (
    <>
      <h1 className="heading">PRODUCT</h1>
      {coffee.map(({ id, image, title, description, price }) => {
        return (
          <div className="card" key={id}>
            <div className="imgBox">
              <img src={image} alt="coffee" className="coffee" />
            </div>

            <div className="contentBox">
              <h3>{title}</h3>
              <p>{description}</p>
              <h2 className="price">Rs {price}</h2>
              <button
                className="buy"
                onClick={() =>
                  addCart({ id, image, title, description, price, quantity: 1 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
