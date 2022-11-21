import React from "react";
import apple1 from "../images/apple1.jpeg";
import "./product_details.css";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="container product_details">
      <div className="product_content">
        <div className="product_left">
          <img src={apple1} alt="item-sample" className="" />
          <div className="product_left_btn">
            <button className="back">
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Back
              </Link>
            </button>
            <button className="add_to_cart">Add to cart</button>
          </div>
        </div>
        <div className="product_right">
          <h1>Product Name</h1>
          <h3>Display</h3>
          <h3>Battery</h3>
          <h4>Memory</h4>
          <br />
          <br />
          <br />
          <br />
          <h2>Price</h2>
          <h5>Description</h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
