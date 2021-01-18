import React from "react";
import CollaboratorH from "./CollaboratorH";
import "../../pages/styles/Team.css";

const Profile = (props) => {
  const job = props.job;
  const name = props.name;
  const description = props.description;

  return (
    <div>
      <div className="card mb-3">
        <img src={props.img} alt="foto perfil" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
          <a>
            <CollaboratorH
              job={job}
              nameMember={name}
              description={description}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
