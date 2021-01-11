import React from "react";
import Inicio from "./pages/Inicio.jsx";
import Team from "./pages/Team.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./pages/Service";
import "./index.css";
import Footer from "./pages/Footer.jsx";
import NavbarHome from "./pages/NavbarHome.jsx";

function App() {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route path="/Equipo">
          <Team />
        </Route>
        <Route path="/Servicios">
          <Service />
        </Route>
        <Route path="/HenOReact">
          <Inicio />
        </Route>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/marcas">
          <h1>Marcas</h1>
        </Route>
        <Route path="/contacto">
          <h1>Contacto</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
