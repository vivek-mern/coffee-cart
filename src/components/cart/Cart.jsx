import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import PageNotFound from "../PagenotFound/PageNotFound";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch({
      type: "remove",
      payload: { id },
    });
    dispatch({
      type: "calculate",
    });
    toast.success("Removed to Cart");
  };

  const incrementquantity = (id) => {
    dispatch({
      type: "add",
      payload: { id },
    });
    dispatch({
      type: "calculate",
    });
  };

  const decrementquantity = (id) => {
    dispatch({
      type: "decrement",
      payload: { id },
    });
    dispatch({
      type: "calculate",
    });
  };

  return (
    <>
      {cartItem.map(({ id, image, title, description, quantity, price }) => {
        return (
          <div className="py-3 py-md-5" key={id}>
            <div className="container">
              <div className="row">
                <div className="col-md-5 mt-3">
                  <div className="">
                    <img src={image} className="w-100" alt="Img" />
                  </div>
                </div>
                <div className="col-md-7 mt-3">
                  <div className="product-view">
                    <h4 className="product-name">{title}</h4>
                    <hr />

                    <div>
                      <span className="selling-price">Rs {price}</span>
                      <span className="original-price">Rs 599</span>
                    </div>
                    <div className="mt-2">
                      <div className="input-group ">
                        <span
                          className="btn btn1"
                          onClick={() => decrementquantity(id)}
                        >
                          <i className="fa fa-minus "></i>
                        </span>
                        <input
                          type="text"
                          value={quantity}
                          readOnly
                          className="input-quantity"
                        />
                        <span
                          className="btn btn1"
                          onClick={() => incrementquantity(id)}
                        >
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <a className="btn btn1" onClick={() => removeCart(id)}>
                        <i className="fa fa-shopping-cart"></i> Remove To Cart
                      </a>
                    </div>
                    <div className="mt-3 text-light">
                      <h5 className="mb-0">Small Description</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <PageNotFound />
    </>
  );
};

export default Cart;
