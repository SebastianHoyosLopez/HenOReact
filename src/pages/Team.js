import React from 'react';
import CardWelcome from '../components/team/CardWelcome';
import Collaborators from '../components/team/Collaborators';
import './styles/Team.css';

function Team() {
  return (
    <div className="Team">
      <CardWelcome />
      <Collaborators />
    </div>
  )
}

export default Team;
