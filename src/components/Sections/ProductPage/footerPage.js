import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

function FooterPage({ material, price }) {
  return (
    <div className="footerPage">
      <Row className="rowFooterPage">
        <Col>{material}</Col>
        <Col>{price} €</Col>
      </Row>
    </div>
  );
}

FooterPage.propTypes = {
  material: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default FooterPage;
