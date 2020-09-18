import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Info.css'

function Info() {
  return (
    <div>
      <div className="title">
        <h2 className="my-5">Te Podemos Guiar</h2>
      </div>
      <div className="card-group">
        <div className="card">
          <img
            src="https://imgur.com/uCe8aKb.jpg"
            className="card-img-top"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgur.com/egebpdp.jpg"
            className="card-img-top"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgur.com/U55bgcS.jpg"
            className="card-img-top"
            alt="foto"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
