import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Header.css"

function Header() {
    return (
        <div>
            <nav id="header" className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://imgur.com/egebpdp.jpg" alt="icono"/>
                    
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Equipo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Branding</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-platzi" href="#" data-toggle="modal" data-target="#modalCompra">Contáctanos</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
    }

export default Header;

