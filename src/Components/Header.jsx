import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function relog(params) {
    setShow(false);
    window.location = "/";
  }
  return (
    <>
      <Nav
        activeKey="/First"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        style={{
          position: "fixed",
          zIndex: 1000,
          top: 0,
          minWidth: "100%",
          boxShadow: "0px 4px 30px rgba(0,0,0,.5)",
          backgroundColor: "#fff",
        }}
      >
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "Montserrat",
              color: "#f06292",
              caretColor: "#f06292",
              fontSize: "20px",
            }}
            href="/First"
          >
            La Boutique
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav
        activeKey="/First"
        className="justify-content-end"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        style={{
          position: "fixed",
          zIndex: 1000,
          top: 0,
          minWidth: "100%",
          boxShadow: "0px 4px 30px rgba(0,0,0,.5)",
        }}
      >
        <Nav.Item>
          <Nav.Link>
            <img
              style={{ height: "25px" }}
              src="https://icon-library.com/images/pink-phone-icon/pink-phone-icon-11.jpg"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleShow}>
            <img
              style={{ height: "25px" }}
              src="https://library.kissclipart.com/20201008/iie/kissclipart-door-exit-icon-exit-icon-basic-application-icon-957ae6c649c4cc78.png"
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ color: "#fff", backgroundColor: "#f06292" }}>
          <Modal.Title>¿Quieres Salir?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Dándole un toque a este botón sales de la Tienda. Si quieres navegar
          en la Tienda utiliza las opciones de la parte inferior:{" "}
          <div md={12}>
            <div md={6}>
              <img
                style={{ height: "25px" }}
                src="data:image/png;base64,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"
              />
              Carrito Catalogo
              <img
                style={{ height: "25px" }}
                src="https://i.pinimg.com/originals/42/97/83/429783b5e349774bee8bcd4f8f11e14e.png"
              />
              Categorías
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ color: "#f06292" }} variant="link" onClick={relog}>
            SALIR DE LA TIENDA
          </Button>
          <Button
            style={{ color: "#f06292" }}
            variant="link"
            onClick={handleClose}
          >
            VOLVER
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
