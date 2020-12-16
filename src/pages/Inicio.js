import React from 'react'
import Main from '../components/inicio/Main'
import Info from '../components/inicio/Info'
import { Navbar } from 'react-bootstrap'

function inicio() {
  return (
    <React.Fragment>
      <Navbar/>
      <Main />
      <Info />
    </React.Fragment>
  )
}

export default inicio
