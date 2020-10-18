import React from "react";
import "../components/Service/styles/Service.css";
import { Container, Card, CardDeck, Image } from "react-bootstrap";

function service() {
  return (
    <Container className="mt-5">
      <CardDeck className="text-center">
        <Card>
          <Image
            className="cards"
            roundedCircle
            src="https://imgur.com/XLTuaw0.jpg"
          />
          <Card.Body>
            <Card.Title>Verificación</Card.Title>
            <Card.Text>
              Ofrecemos un acompañamiento con tus cuentas virtuales.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Podrias obtener un descuento</small>
          </Card.Footer>
        </Card>
        <Card>
          <Image  className="cards" roundedCircle src="https://imgur.com/JmDBTe4.jpg" />
          <Card.Body>
            <Card.Title>Crecimiento</Card.Title>
            <Card.Text>
              Te ayudamos a que tus redes sociales tengan un avance
              significativo para tu negocio o proyecto.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Image className="cards" roundedCircle src="https://imgur.com/dZygwIm.jpg" />
          <Card.Body>
            <Card.Title>Engagement</Card.Title>
            <Card.Text>
              Te asesoramos para un mejor manejo con tus contáctos y seguidores de tus redes.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default service;
