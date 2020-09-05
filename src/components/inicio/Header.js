import React from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <React.Fragment>
      <nav id="header" className="navbar navbar-expand navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://imgur.com/egebpdp.jpg" alt="icono" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Equipo">
                  Equipo
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-platzi"
                  href="#"
                  data-toggle="modal"
                  data-target="#modalCompra"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header
