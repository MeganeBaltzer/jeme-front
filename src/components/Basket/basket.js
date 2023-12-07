import { useState } from 'react';
import {
  Container, Row, Col, Button, Image, Card, ListGroup,
} from 'react-bootstrap';
import Img from '../../assets/img/300x330.jpg';

function Accessories() {
  return (
    <Container style={{ marginTop: '14em' }}>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body>
              <Card.Title>Chaussures</Card.Title>
              <Card.Text style={{ marginTop: '1em', marginBottom: '0' }}>
                Taille : TU
              </Card.Text>
              <Card.Text>
                Quantité : 2
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>5 euros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link style={{ textDecoration: 'none', color: 'black' }} href="#">-</Card.Link>
              <Card.Link style={{ textDecoration: 'none', color: 'black' }} href="#">+</Card.Link>
              <Card.Link style={{ color: 'black' }} href="#">Supprimer</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default Accessories;
