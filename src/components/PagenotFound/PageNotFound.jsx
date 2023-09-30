import React from "react";
import { useSelector } from "react-redux";
import "./PageNotFound.css";

const PageNotFound = () => {
  const { total } = useSelector((state) => state.Cart);

  return (
    <>
      {total > 0 ? (
        <div className="p-1 total">
          <h1 className="text-end mt-2 text-light">Total: Rs {total}</h1>
        </div>
      ) : (
        <p className="text-light text-center fs-1 mt-5 ">Product not found</p>
      )}
    </>
  );
};

export default PageNotFound;
