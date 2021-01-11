import React from "react";
import "./styles/NavbarHome.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavLink } from "react-bootstrap";

function NavbarHome() {
  return (
    <Navbar
      id="header"
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="pb-0"
    >
      <Navbar.Brand>
        <Link className="logo" to="/" exact>
          <img src="https://imgur.com/egebpdp.jpg" alt="logo WiFi" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="Nav">
        <Nav className="main ml-auto">
          <NavLink className="selection" to="/Equipo">
            Equipo
          </NavLink>
          <NavLink className="selection" to="/Servicios">
            Servicios
          </NavLink>
          <NavLink className="selection" to="/marcas">
            Marcas
          </NavLink>
          <NavLink className="selection" to="contacto">
            Contacto
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
