import React from "react";
import apple1 from "../images/apple1.jpeg";
import "./product_details.css";
import { Link, useLocation } from "react-router-dom";
const Product = ({ handleAddProduct }) => {
  const location = useLocation();
  const items = location.state;
  console.log(items);
  return (
    <div className="container product_details">
      <div className="product_content">
        <div className="product_left">
          <img src={items.thumbnail} alt="item-sample" className="" />
          <div className="product_left_btn">
            <button className="back">
              {" "}
              <Link
                to="/main"
                style={{ textDecoration: "none", color: "white" }}
              >
                Back
              </Link>
            </button>
            <button
              className="add_to_cart"
              onClick={() => handleAddProduct(items)}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="product_right">
          <h1>{items.title}</h1>
          <h5>Rating: {items.rating}⭐️</h5>
          <h5>Brand: {items.brand}</h5>
          <h5>Price: {items.price}</h5>
          <br />
          <br />
          <br />
          <br />
          {/* <h2>Price</h2> */}
          <h5>{items.description}</h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
