import React from 'react';
import Main from '../components/inicio/Main';
import Footer from '../components/inicio/Footer';
import Info from '../components/inicio/Info';

function inicio() {
  return (
    <React.Fragment>
      <Main />
      <Info />
      <Footer />
    </React.Fragment>
  )
}

export default inicio;