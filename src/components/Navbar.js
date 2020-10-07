import React from "react";
import Header from "./inicio/Header";
import Footer from "./inicio/Footer";

function Navbar(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Navbar;
