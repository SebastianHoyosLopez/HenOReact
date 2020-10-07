import React from 'react';
import Alert from '../components/team/Alert';
import Collaborators from '../components/team/Collaborators';
import './styles/Team.css';

function Team() {
  return (
    <div className="Team">
      <Alert />
      <Collaborators />
    </div>
  )
}

export default Team;
