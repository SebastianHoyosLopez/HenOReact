import React from 'react';
import './styles/Collaborators.css';

function Collaborators() {
  return (
    <div className="container" id="cards">
      <div className="row cards-collaborators">
        <div className="card col-6 col-sm-6 my-3">
          <img
            src="https://i.imgur.com/p0Jy0aR.jpg"
            className="card-img-top px-5"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Henry Orozco</h5>
            <p className="card-text">
              Comunicador e influencer con amplia experiencia en el campo.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-6 col-sm-6 my-3">
          <img
            src="https://imgur.com/P270Ece.jpg"
            className="card-img-top px-5"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Victor Orlando</h5>
            <p className="card-text">
                Un excelente diseñador grafico y lo complementa con su labor de fotografo.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-6 col-sm-6 my-3">
          <img
            src="https://imgur.com/P270Ece.jpg"
            className="card-img-top px-5"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Victor Orlando</h5>
            <p className="card-text">
                Un excelente diseñador grafico y lo complementa con su labor de fotografo.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card col-6 col-sm-6 my-3">
          <img
            src="https://i.imgur.com/p0Jy0aR.jpg"
            className="card-img-top px-5"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Henry Orozco</h5>
            <p className="card-text">
              Comunicador e influencer con amplia experiencia en el campo.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collaborators
