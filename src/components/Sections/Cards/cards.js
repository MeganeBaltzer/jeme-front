/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import {
  Row,
} from 'react-bootstrap';
import CardType from './cardType';

const Cards = () => (
  <section aria-label="Tous les produits" style={{ marginTop: '1em' }}>
    <Row xs={1} sm={2} md={1} lg={2} xl={3} className="g-6">
      <CardType />
      <CardType />
      <CardType />
      <CardType />
      <CardType />
      <CardType />
      <CardType />
      <CardType />
      <CardType />
      <CardType />
    </Row>
  </section>
);

export default Cards;
