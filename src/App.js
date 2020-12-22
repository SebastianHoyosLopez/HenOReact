import React from "react";
import Inicio from "./pages/Inicio";
import Team from "./pages/Team";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import "./index.css";
import Footer from "./components/inicio/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/Equipo" component={Team} />
        <Route exact path="/Servicios" component={Service} />
        <Route exact path="/HenOReact" component={Inicio} />
        <Route exact path="/" component={Inicio} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
