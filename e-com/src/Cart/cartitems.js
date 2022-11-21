import React from "react";
import "./cart.css";
import apple from "../images/apple1.jpeg";
const Cartitems = () => {
  return (
    <div className="container cartitems ">
      <div className="content">
        <h3>CART ITEMS</h3>

        <div className="items">
          <div className="items-left">
            <img src={apple} alt="item-sample" className="" />
          </div>
          <div className="items-right1">
            <div className="right1-split">
              <div>
                <h3>Iphone</h3>
                <p>Rs.13.00</p>
              </div>
              <div className="">
                <h3>12.99</h3>
              </div>
            </div>
            <div className="right2">
              <div className="right2-split">
                <h4>Cpu</h4>
                <h4>size</h4>
                <h4>battery</h4>
                <h3 className="adding">
                  <button>+</button>&ensp;
                  <span>0</span>&ensp;
                  <button>-</button>
                </h3>
              </div>

              <div className="remove">
                <button className="btn btn-danger"> Remove</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="items">
          <div className="items-left">
            <img src={apple} alt="item-sample" className="" />
          </div>
          <div className="items-right1">
            <div className="right1-split">
              <div>
                <h3>Iphone</h3>
                <p>Rs.13.00</p>
              </div>
              <div className="">
                <h3>12.99</h3>
              </div>
            </div>
            <div className="right2">
              <div className="right2-split">
                <h4>Cpu</h4>
                <h4>size</h4>
                <h4>battery</h4>
                <h3 className="adding">
                  <button>+</button>&ensp;
                  <span>0</span>&ensp;
                  <button>-</button>
                </h3>
              </div>

              <div className="remove">
                <button className="btn btn-danger"> Remove</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="items">
          <div className="items-left">
            <img src={apple} alt="item-sample" className="" />
          </div>
          <div className="items-right1">
            <div className="right1-split">
              <div>
                <h3>Iphone</h3>
                <p>Rs.13.00</p>
              </div>
              <div className="">
                <h3>12.99</h3>
              </div>
            </div>
            <div className="right2">
              <div className="right2-split">
                <h4>Cpu</h4>
                <h4>size</h4>
                <h4>battery</h4>
                <h3 className="adding">
                  <button>+</button>&ensp;
                  <span>0</span>&ensp;
                  <button>-</button>
                </h3>
              </div>

              <div className="remove">
                <button className="btn btn-danger"> Remove</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Cartitems;
