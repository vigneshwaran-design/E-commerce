import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { IconContext } from "react-icons";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import "/Users/vigneshwarangnanavel/Desktop/e-commerce/e-com/src/navbar/NavbarContent.css";
import { useEffect, useState, useContext } from "react";
import UserContext from "../bodyContent/main.js";
const NavBar = ({ cartItems, searchHandler }) => {
  // const count1 = props.count;
  console.log(cartItems.length);
  const search = () => {
    console.log("Searching......");
  };
  const changeHandler = (event) => {
    searchHandler(event.target.value);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            <h2 className="shopping">
              <Link
                to="/main"
                style={{ textDecoration: "none", color: "white" }}
              >
                ShoppingApp
              </Link>
              <AiOutlineShoppingCart />
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="d-flex  align-items-center justify-content-center">
              <Form className="d-flex align-items-center justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="m-2"
                  aria-label="Search"
                  onChange={changeHandler}
                />
                <IconContext.Provider value={{ color: "white", size: "31px" }}>
                  {" "}
                  <ImSearch className=" search " onClick={search} />
                </IconContext.Provider>
              </Form>
              <p className="cart mt-3 align-items-center justify-content-center">
                {" "}
                <TbShoppingCartPlus className="ml-20 search" onClick={search} />
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span>
                    {" "}
                    Cart {cartItems.length === 0 ? "" : cartItems.length}
                  </span>
                </Link>
              </p>
              <button className="login">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/login"
                >
                  Login
                </Link>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
