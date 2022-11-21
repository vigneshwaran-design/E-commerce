import { React, useState } from "react";
import "./cart.css";
import apple from "../images/apple1.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Cartitems = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const navigate = useNavigate();
  const alertmsg = () => {
    console.log("alert");
    navigate("/main");
    window.location.reload();
    alert("Your order has been placed successfully!!!");
  };

  return (
    <div className="container cartitems ">
      <div className="content">
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {" "}
          <div>
            <h3>CART ITEMS</h3>
          </div>
          <div className="mr-3">
            {/* <Link to="/main" style={{ textDecoration: "none", color: "white" }}> */}
            <button
              style={{
                borderStyle: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                backgroundColor: "#50C878",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={alertmsg}
              disabled={cartItems.length > 0 ? false : true}
            >
              Checkout
            </button>
            {/* </Link> */}
          </div>
        </div>

        <hr />
        {cartItems.length === 0 && <h3>No items are added</h3>}
        <div className="items">
          {cartItems.map((item) => (
            <>
              <div className="items-left">
                <img src={item.thumbnail} alt="item-sample" className="" />
              </div>
              <div className="items-right1">
                <div className="right1-split">
                  <div>
                    <h3>{item.title}</h3>
                    <p style={{ width: "70%", height: "50px;" }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="">
                    <h4>
                      <span>
                        {" "}
                        ${item.price} * {item.quantity}
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="right2">
                  <div className="right2-split">
                    <h6>{item.rating}⭐️</h6>
                    <h6>{item.stock} in stock</h6>
                    <h6>{item.discountPercentage}% offer</h6>
                    <h3 className="adding">
                      <button onClick={() => handleAddProduct(item)}>+</button>
                      &ensp;
                      <span>{item.quantity}</span>&ensp;
                      <button onClick={() => handleRemoveProduct(item)}>
                        -
                      </button>
                    </h3>
                  </div>

                  <div className="remove">
                    {/* <button className="btn btn-danger"> Remove</button> */}
                    <span className="d-flex align-items-center justify-content-center">
                      Total Price:&ensp;<h3>{item.price * item.quantity}</h3>
                    </span>
                  </div>
                </div>
              </div>
              {/* <hr /> */}
            </>
          ))}
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
