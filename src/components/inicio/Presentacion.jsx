import React from "react";

const Presentacion = (props) => {
  return (
    <div className="mt-5">
      <div>
        <div className="card">
          <img
            style={{height: "300px", objectFit: "cover",}}
            src={props.presentacion.img}
            className="card-img-top"
            alt="foto"
          />
        </div>
        <h2>{props.presentacion.title}</h2>
        <p>{props.presentacion.description}</p>
        <p>
          <a className="btn btn-primary" href="#" role="button">
            View details &raquo;
          </a>
        </p>
      </div>
    </div>
  );
};

export default Presentacion;
