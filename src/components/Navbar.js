import React from 'react'
import Header from './inicio/Header'

function Navbar(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  )
}

export default Navbar
