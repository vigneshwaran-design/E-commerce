import React from "react";
import { useState, useEffect, createContext } from "react";
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
export const UserContext = createContext(null);
const url = "https://dummyjson.com/products";
const Main = ({ handleAddProduct, active, filterValue }) => {
  const [data, setData] = useState();
  const [disabled, setdisabled] = useState();
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
  // function addtocart() {
  //   setCart(cart + 1);
  //   console.log(cart);
  // }
  return (
    <div className="background">
      <div className="background-sub">
        <Carousel className="carousel">
          {data?.map((e) => (
            <Carousel.Item className="slider">
              <img className="d-block" src={e.thumbnail} alt="First slide" />
              <Carousel.Caption
                style={{ color: "black", fontWeight: "bolder" }}
              >
                <h1>{e.title}</h1>
                <p>{e.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="part2">
          {data
            ?.filter((items) => items.title.includes(filterValue))
            .map((item, index) => (
              <Card style={{ width: "18rem" }}>
                <Link to="/product" state={item}>
                  <Card.Img
                    style={{ height: "220px" }}
                    variant="top"
                    src={item.thumbnail}
                  />
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
                    <Button
                      disabled={disabled}
                      onClick={() => handleAddProduct(item)}

                      // onClick={() => setdisabled(true)}
                    >
                      Add To Cart
                      {/* {active ? "Addtocart" : "Added"} */}
                    </Button>
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
