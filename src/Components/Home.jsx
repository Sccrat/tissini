import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselComponent } from "./CarouselComponent";
import { Col, Row, Container } from "react-bootstrap";
// import { Modal } from "./Components/Modal";

export function Home({ dato, urls }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <img
        style={{ height: 400, paddingTop: "48px" }}
        src="https://mitienda.moda/img/productos-de-entrega-inmediata.9ad72bec.jpg"
      />
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/jeans-prominent.jpg"
              />
            </Col>
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/fajas-prominent.jpg"
              />
            </Col>
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/blusas-prominent.jpg"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/zapatos-prominent.jpg"
              />
            </Col>
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/ropa-interior-prominent.jpg"
              />
            </Col>
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/seamless-prominent.jpg"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/zapatos-prominent.jpg"
              />
            </Col>
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/concord-ozzy-prominent.jpg"
              />
            </Col>
            <Col md="auto">
              <img
                style={{ height: "170px" }}
                src="https://v3.tissini.app/img/categories/multivendor/tapabocas-prominent.jpg"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <Row>
        {!dato
          ? "Cargando..."
          : dato.map((datos) => {
              return (
                <Col md={12}>
                  <img
                    style={{ height: 352 }}
                    src={"https://v3.tissini.app/" + datos.image}
                  />
                  <CarouselComponent productos={datos.products} />
                </Col>
              );
            })}
      </Row>
      <img
        style={{ height: 400 }}
        src="https://v3.tissini.app/img/categories/multivendor/product-lines.png"
      />
      {urls.map((u) => {
        return <img style={{ height: 400 }} src={u.src} />;
      })}
    </Container>
  );
}
