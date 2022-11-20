import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./main.css";

const url = "http://www.mocky.io/v2/5918b9461200001f1040dbeb";
const Main = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.phones);
      console.log(response.data.phones);
    });
  }, []);
  return (
    <div className="background">
      <div className="background-sub">
        <section></section>
        <Carousel className="carousel">
          {data?.map((e) => (
            <Carousel.Item className="slider">
              <img
                className="d-block "
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="part2">
          {data?.map((item) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text style={{ height: "37px" }}>
                  {item.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <p>Rs.{item.price}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Battery:{item.battery}</p>
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  <Button>Add To Cart</Button>
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
