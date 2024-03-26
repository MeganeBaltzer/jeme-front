/* eslint-disable max-len */
// import { useEffect } from 'react';
import {
  Container, Row, Col, Button, Card, ListGroup,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
// import { setBasketProducts } from '../../actions/products';

function Basket() {
  // const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.products.basketProducts);
  console.log(basketProducts);

  const total = basketProducts.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);

  return (
    <Container style={{ marginTop: '14em' }}>
      <Row>
        {basketProducts.length === 0 ? (
          <Col>
            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Votre panier est vide</p>
          </Col>
        ) : (
          <>
            <Col>
              {basketProducts.map((basketProduct) => (
                <Card key={basketProduct.id} style={{ width: '18rem', marginBottom: '2em' }}>
                  <Card.Img variant="top" src={basketProduct.poster} />
                  <Card.Body>
                    <Card.Title>{basketProduct.description}</Card.Title>
                    <Card.Text>{basketProduct.price} €</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Quantité : {basketProduct.quantity}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link style={{ textDecoration: 'none', color: 'black' }} href="#">
                      -
                    </Card.Link>
                    <Card.Link style={{ textDecoration: 'none', color: 'black' }} href="#">
                      +
                    </Card.Link>
                    <Card.Link style={{ color: 'black' }} href="#">
                      Supprimer
                    </Card.Link>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col>
              <Card>
                <Card.Header
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      marginTop: '1em',
                      color: '#435747',
                      fontWeight: 'bold',
                    }}
                  >
                    TOTAL
                  </p>
                  <span style={{ color: '#435747', fontWeight: 'bold' }}>{total} €</span>
                </Card.Header>
                <Card.Body>
                  <Button
                    variant="primary"
                    style={{
                      fontSize: 'inherit',
                      backgroundColor: '#435747',
                      borderRadius: '0.5em',
                      color: 'white',
                      margin: '2em',
                    }}
                  >
                    Valider mon panier
                  </Button>
                  <Card.Text style={{ fontStyle: 'italic' }}>Paiement 100% sécurisé</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Basket;
