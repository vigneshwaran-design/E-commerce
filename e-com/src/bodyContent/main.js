import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Link from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./main.css";
import profile from "../images/profile.jpeg";
import NavBar from "../navbar/NavbarContent.js";

const url = "https://dummyjson.com/products";
const Main = () => {
  const [data, setData] = useState();
  const [cart, setCart] = useState(0);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(
        response.data.products.filter(
          (value) => value.category === "smartphones"
        )
      );
      console.log(
        response.data.products.filter(
          (value) => value.category === "smartphones"
        )
      );
    });
  }, []);
  function addtocart() {
    setCart(cart + 1);
    <NavBar count={cart} />;
    console.log(cart);
  }
  return (
    <div className="background">
      <div className="background-sub">
        <Carousel className="carousel">
          {data?.map((e) => (
            <Carousel.Item className="slider">
              <img className="d-block" src={e.images[0]} alt="First slide" />
              <Carousel.Caption>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="part2">
          {data?.map((item) => (
            <Card style={{ width: "18rem" }}>
              <Link to="/product">
                <Card.Img variant="top" src={item.images[0]} />
              </Link>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text style={{ height: "37px" }}>
                  {item.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <p>$.{item.price}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Rating:{item.rating}</p>
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  <Button onClick={addtocart}>Add To Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
