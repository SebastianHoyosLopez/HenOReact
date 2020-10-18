import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function CollaboratorV() {
  const [modal, setmodal] = useState(false);

  const abrirCerrar = () => {
    setmodal(!modal);
  };

  return (
    <div>
      <div className="text-center">
        <Button
          className="btn btn-primary btn-sx"
          data-toggle="modal"
          data-target="#Luis"
          onClick={() => abrirCerrar()}
        >
          Gerente Ventas
        </Button>
      </div>
      <Modal show={modal} className="modal fade" id="Luis">
        <Modal.Header>
          Leidy Vargas Orozco
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => abrirCerrar()}
          >
            X
          </button>
        </Modal.Header>
        <Modal.Body>
          Tecnóloga en Gestión de Mercados SENA Con 3 años de experiencia
          certificada en el área comercial y 1 año en el área administrativa.
          Eterna aprendiz, escritora por hobbie, estudiando informalmente inglés
          . Mujer, hija, madre, bruja Influencer en formación
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
export default CollaboratorV;
