import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
var _ = require("lodash");

export function CarouselComponent({ productos }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        {_.chunk(productos, 4).map((products) => (
          <Carousel.Item>
            <Container>
              <Row>
                {products.map((prod) => (
                  <Col md={6}>
                    <img
                      style={{ height: 200 }}
                      key={prod.id}
                      src={"https://v3.tissini.app/" + prod.image.url}
                    />
                    <Col md={{ span: 3, offset: 5 }}>
                      <Row style={{ fontFamily: "Montserrat" }}>
                        <strong>{prod.name}</strong>
                      </Row>
                      <Row
                        style={{ color: "#f06292", fontFamily: "Montserrat" }}
                      >
                        <span style={{ textAlign: "center" }}>
                          <strong>{"Textiles"}</strong>
                        </span>
                      </Row>
                      <Row
                        style={{ color: "#f06292", fontFamily: "Montserrat" }}
                      >
                        <span style={{ textAlign: "center" }}>
                          <strong>{"$" + prod.price}</strong>
                        </span>
                      </Row>
                    </Col>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
