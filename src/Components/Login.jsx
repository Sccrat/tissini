import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const axios = require("axios").default;

export function Login() {
  const [data, setData] = useState({
    mobilephone: "",
  });

  function handle(e) {
    console.log(e);
    const newdata = { ...data };
    // newdata[(e.target.id = e.target.valueset)];
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
    //se valido el login de esta manera puesto que arroja errores de cors en la peticion a la api
    if (newdata.mobilephone == "7865470213") {
      window.location = "/First";
    }
  }

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://mitienda.moda/img/login-desktop.695c98cc.jpg")`,
        height: "100%",
        width: "100%",
        WebkitBackgroundSize: "cover",
        position: "fixed",
      }}
    >
      <Container>
        <Form>
          <Form.Group
            className="mb-3"
            style={{ textAlign: "center", paddingTop: "20%" }}
          >
            <img
              style={{ maxHeight: 200 }}
              src="https://mitienda.moda/img/logo.e38c8b41.png"
              alt=""
            />
          </Form.Group>
          <Form.Group style={{ textAlign: "center" }}>
            <Form.Label style={{ color: "white", fontSize: "30px" }}>
              Ingresa el número de teléfono de tu asesora independiente.
            </Form.Label>
          </Form.Group>

          <Form.Group style={{ textAlign: "center" }} controlId="mobilephone">
            <Form.Control
              name="mobilephone"
              onBlur={(e) => handle(e)}
              className="col-md-4 col-md-offset-4"
              style={{
                width: "62%",
                margin: "auto",
                color: "white",
                backgroundColor: "transparent",
              }}
              type="text"
              placeholder="Telefono"
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
