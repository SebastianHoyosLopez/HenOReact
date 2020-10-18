import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar id="header" collapseOnSelect expand="lg" fixed="top" className="pb-0">
        <Link className="logo" to="/">
          <img src="https://imgur.com/egebpdp.jpg" alt="logo WiFi" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="Nav" >
          <Nav className="main ml-auto">
            <Nav.Link className="selection" href="/Equipo">Equipo</Nav.Link>
            <Nav.Link className="selection" href="/Servicios">Servicios</Nav.Link>
            <Nav.Link className="selection">Marcas</Nav.Link>
            <Nav.Link className="selection">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
