import React from 'react'
import Inicio from './pages/Inicio'
import Team from './pages/Team'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/Equipo" component={Team} />
          </Switch>
        </Navbar>
      </BrowserRouter>
    </div>
  )
}

export default App
