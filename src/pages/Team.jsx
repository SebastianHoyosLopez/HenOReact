import React from "react";
import Alert from "../components/team/Alert.jsx";
import "./styles/Team.css";
import CollaboratorH from "../components/team/CollaboratorH";

function Team() {
  const groupOfMembers = {
    henry: {
      name: "Henry Orozco",
      description:
        "Periodista y creador digital. Viajero, melómano y lector. Un dibujante de voces humanas.",
      img: "https://i.imgur.com/p0Jy0aR.jpg",
      job: "CEO",
    },
    luis: {
      name: "Luis Fernando Montoya",
      description:
        "Ingeniero de Sistemas e Informática especialista en desarrollo web con más 10 años de experiencia.",
      img: "https://imgur.com/gDoa4Ug.jpg",
      job: "Cerebro Digital",
    },
    victor: {
      name: "Victor Orlando",
      description:
        "Diseñador Gráfico y Productor Audiovisual independiente, nacido en la ciudad de Medellín. 12 años de experiencia en el campo de la publicidad",
      img: "https://imgur.com/ydkp4N8.jpg",
      job: "Artes Visuales",
    },
    leidy: {
      name: "Leidy Vargas Orozco",
      description:
        "Tecnóloga en Gestión de Mercados SENA Con 3 años de experiencia certificada en el área comercial y 1 año en el área administrativa. Eterna aprendiz, escritora por hobbie, estudiando informalmente inglés. Mujer, hija, madre, bruja Influencer en formación",
      img: "https://imgur.com/kaOufsF.jpg",
      job: "Gerente Ventas",
    },
  };

  const henryName = groupOfMembers.henry.name;
  const henryDescription = groupOfMembers.henry.description;
  const henryImg = groupOfMembers.henry.img;
  const henryJob = groupOfMembers.henry.job;

  const luisName = groupOfMembers.luis.name;
  const luisDescription = groupOfMembers.luis.description;
  const luisImg = groupOfMembers.luis.img;
  const luisJob = groupOfMembers.luis.job;

  const victorName = groupOfMembers.victor.name;
  const victorDescription = groupOfMembers.victor.description;
  const victorImg = groupOfMembers.victor.img;
  const victorJob = groupOfMembers.victor.job;

  const leidyName = groupOfMembers.leidy.name;
  const leidyDescription = groupOfMembers.leidy.description;
  const leidyImg = groupOfMembers.leidy.img;
  const leidyJob = groupOfMembers.leidy.job;

  return (
    <div className="Team">
      <Alert />
      <div className="container" id="cards">
        <div className="row cards-collaborators">
          <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
            <img src={henryImg} className="card-img-top mx-3 my-3" alt="foto" />
            <div className="card-body">
              <h5 className="card-title text-center">{henryName}</h5>
              <CollaboratorH
                nameMember={henryName}
                description={henryDescription}
                job={henryJob}
              />
            </div>
          </div>
          <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
            <img src={luisImg} className="card-img-top mx-3 my-3" alt="foto" />
            <div className="card-body">
              <h5 className="card-title text-center">{luisName}</h5>
              <CollaboratorH
                nameMember={luisName}
                description={luisDescription}
                job={luisJob}
              />
            </div>
          </div>
          <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
            <img
              src={victorImg}
              className="card-img-top mx-3 my-3"
              alt="foto"
            />
            <div className="card-body">
              <h5 className="card-title text-center">{victorName}</h5>
              <CollaboratorH
                nameMember={victorName}
                description={victorDescription}
                job={victorJob}
              />
            </div>
          </div>
          <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
            <img src={leidyImg} className="card-img-top mx-3 my-3" alt="foto" />
            <div className="card-body">
              <h5 className="card-title text-center">{leidyName}</h5>
              <CollaboratorH
                nameMember={leidyName}
                description={leidyDescription}
                job={leidyJob}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
