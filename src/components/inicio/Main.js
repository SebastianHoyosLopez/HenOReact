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
                style={{objectFit:"contain", height:"400px"}}
                className="d-block w-100"
                src="https://imgur.com/egebpdp.jpg"
                alt="Presentaci"
              />
            </div>|
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
