import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function CollaboratorH() {
  const [modal, setmodal] = useState(false)

  const abrirCerrar = () => {
    setmodal(!modal)
  }

  return (
    <div>
      <div className="text-center">
      <Button
        className="btn btn-primary buttonn btn-sx"
        data-toggle="modal"
        data-target="#Luis"
        onClick={() => abrirCerrar()}
      >
        CEO
      </Button>
      </div>
      <Modal show={modal} className="modal fade" id="Luis">
        <Modal.Header>Henry Orozco</Modal.Header>
        <Modal.Body>
          Periodista y creador digital. Viajero, melómano y lector. Un dibujante
          de voces humanas.
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={() => abrirCerrar()}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default CollaboratorH
