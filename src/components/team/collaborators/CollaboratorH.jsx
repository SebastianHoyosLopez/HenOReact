import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function CollaboratorH(props) {
  const [modal, setmodal] = useState(false);

  const abrirCerrar = () => {
    setmodal(!modal);
  };

  return (
    <div>
      <div className="text-center">
        <Button
          className="btn btn-primary buttonn btn-sx"
          data-toggle="modal"
          data-target="#Luis"
          onClick={() => abrirCerrar()}
        >
          {props.job}
        </Button>
      </div>
      <Modal show={modal} className="modal fade" id="Luis">
        <Modal.Header>
          {props.nameMember}
          <button type="button" className="close" aria-label="Close" onClick={() => abrirCerrar()}>X</button>
        </Modal.Header>
        <Modal.Body>
          {props.description}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={() => abrirCerrar()}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CollaboratorH;
