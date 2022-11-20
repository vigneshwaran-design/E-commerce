import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { IconContext } from "react-icons";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import "/Users/vigneshwarangnanavel/Desktop/e-commerce/e-com/src/navbar/NavbarContent.css";
import { useEffect, useState } from "react";
const NavBar = () => {
  const search = () => {
    console.log("Searching......");
  };
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#">
            <h2 className="shopping">
              ShoppingApp
              <AiOutlineShoppingCart />
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="m-2"
                aria-label="Search"
              />
              <IconContext.Provider value={{ color: "white", size: "31px" }}>
                {" "}
                <ImSearch className="mt-2 search" onClick={search} />
              </IconContext.Provider>
            </Form>
            <p className="cart">
              {" "}
              <TbShoppingCartPlus className="ml-20 search" onClick={search} />
              Cart
            </p>
            <button className="login">
              <Link style={{ textDecoration: "none" }} to="/login">
                Login
              </Link>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
