import React from 'react'
import './styles/Main.css'

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
                className="d-block w-100"
                src="https://imgur.com/hZzmlvi.jpg"
                alt="Presentaci"
              />
            </div>
            <div className="overlay">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12 text-center texto1">
                    <h1>Wifi 3.0 Oficial</h1>
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
  )
}

export default Main
