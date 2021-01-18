import React from "react";
import Main from "../components/inicio/Main";
import Presentacion from "../components/inicio/Presentacion.jsx";

function inicio() {
  const presentacion = {
    ceo: {
      title: "CEO",
      description:
        "Henry Orozco, comunicador social con amplia trayectoria en el manejo de las comunicaciones y un talento muy apropiado para    el mundo actual y los influencer, escritor y apasionado por la música, es nuestro CEO que nos trae una propuesta innovadora en los medios virtuales.",
      img: "https://imgur.com/U55bgcS.jpg",
    },
    servicios: {
      title: "Estudios de tu marca",
      description:
        "Los estudios de marca permiten conocer los valores asociados por el consumidor a una marca y su peso en la construcción de la imagen de marca actual. Con ellos, se pueden establecer sus factores de atracción y lo que hace que esa marca sea diferente a otras.",
      img: "https://imgur.com/L4Ohmog.jpg",
    },
    marketing : {
      title: "Marketing",
      description: "Cada vez toman más fuerza los influencers a la hora de planificar una estrategia de marketing digital: ¿Son esenciales? ¿Cómo debemos trabajar con ellos?, Te asesoramos.",
      img: "https://imgur.com/egebpdp.jpg",
    }
  };

  const presentacionCeo = presentacion.ceo;
  const servicios = presentacion.servicios;
  const marketing = presentacion.marketing;

  return (
    <>
      <Main />
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-4">
            <Presentacion presentacion={marketing} />
          </div>
          <div className="col-lg-4">
            <Presentacion presentacion={presentacionCeo} />
          </div>
          <div className="col-lg-4">
            <Presentacion presentacion={servicios} />
          </div>
        </div>
      </div>
    </>
  );
}

export default inicio;
