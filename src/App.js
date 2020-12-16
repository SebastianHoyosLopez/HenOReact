import React from "react";
import Inicio from "./pages/Inicio";
import Team from "./pages/Team";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/Equipo" component={Team} />
        <Route exact path="/Servicios" component={Service} />
        <Route exact path="/" component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
