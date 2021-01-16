import React from "react";
import "./styles/Main.css";

function Main() {
  return (
    <div id="main">
      <div>
        <div
          id="carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{objectFit:"cover"}}
                className="d-block w-100"
                src="https://imgur.com/ioNzmXW.jpg"
                alt="Presentaci"
              />
            </div>
            <div className="overlay">
              <div className="container">
                <div className="row align-items-center">
                  <div style={{color: "yellow"}} className="col-md-12 text-center texto1">
                    <h1>Wifi Oficial</h1>
                    Somos arte, vida, ideas, magia creatividad:
                    <br />
                    <strong>Somos Wifi Oficial</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
