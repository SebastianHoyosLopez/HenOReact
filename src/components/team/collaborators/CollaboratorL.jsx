import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function CollaboratorL() {
  const [modal, setmodal] = useState(false)

  const abrirCerrar = () => {
    setmodal(!modal)
  }

  return (
    <div>
        <div className="text-center">
      <Button
        className="btn btn-primary btn-sx"
        data-toggle="modal"
        data-target="#Luis"
        onClick={() => abrirCerrar()}
      > Contáctanos
      </Button>
        </div>
      <Modal show={modal} className="modal fade" id="Luis">
        <Modal.Header>Luis Fernando Montoya</Modal.Header>
        <Modal.Body>
          Ingeniero de Sistemas e Informática especialista en desarrollo web con
          más 10 años de experiencia.
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
export default CollaboratorL
