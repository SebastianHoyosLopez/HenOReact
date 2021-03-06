import React from "react";
import "./styles/NavbarHome.css";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

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
          <NavLink className="btn mr-2 selection" to="/Equipo">
            Equipo
          </NavLink>
          <NavLink className="btn mr-2 selection" to="/Servicios">
            Servicios
          </NavLink>
          <NavLink className="btn mr-2 selection" to="/marcas">
            Marcas
          </NavLink>
          <NavLink className="btn mr-2 selection" to="contacto">
            Contacto
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
