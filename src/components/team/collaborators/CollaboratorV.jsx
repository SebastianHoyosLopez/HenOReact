import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function CollaboratorV() {
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
        >
          Contáctanos
        </Button>
      </div>
      <Modal show={modal} className="modal fade" id="Luis">
        <Modal.Header>Victor Orlando</Modal.Header>
        <Modal.Body>
          Diseñador Gráfico y Productor Audiovisual independiente, nacido en la
          ciudad de Medellín. 12 años de experiencia en el campo de la
          publicidad
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
export default CollaboratorV
