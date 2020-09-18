import React from 'react'
import CollaboratorL from './collaborators/CollaboratorL'
import CollaboratorH from './collaborators/CollaboratorH'
import CollaboratorV from './collaborators/CollaboratorV'
import CollaboratorLe from './collaborators/CollaboratorLe'


import './styles/Collaborators.css'

function Collaborators() {
  return (
    <div className="container" id="cards">
      <div className="row cards-collaborators">
        <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
          <img
            src="https://i.imgur.com/p0Jy0aR.jpg"
            className="card-img-top mx-3 my-3"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title text-center">Henry Orozco</h5>
            <CollaboratorH />
          </div>
        </div>
        <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
          <img
            src="https://imgur.com/gDoa4Ug.jpg"
            className="card-img-top mx-3 my-3"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title text-center">Luis Fernando M.</h5>
            <CollaboratorL />
          </div>
        </div>
        <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
          <img
            src="https://imgur.com/ydkp4N8.jpg"
            className="card-img-top mx-3 my-3"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title text-center">Victor Orlando</h5>
            <CollaboratorV />
          </div>
        </div>
        <div className="card col-6 col-md-6 col-lg-3 my-1 mt-2">
          <img
            src="https://imgur.com/kaOufsF.jpg"
            className="card-img-top mx-3 my-3"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title text-center">Leidy Vargas Orozco</h5>
            <CollaboratorLe />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collaborators
