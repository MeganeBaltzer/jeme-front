import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

function MainPage({ title, poster, description }) {
  return (
    <div className="mainPage">
      <Col className="titleAndDescription">
        <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{title}</p>
        <span style={{ fontSize: '1em' }}>{description}</span>
      </Col>
      <Col>
        <Image src={poster} fluid />
      </Col>
    </div>
  );
}

MainPage.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainPage;
