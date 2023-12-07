import { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { FcCheckmark } from 'react-icons/fc';

function CardType({ description, poster, price }) {
  const [cartCount, setCartCount] = useState(0);

  const decreaseCount = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const increaseCount = () => {
    setCartCount(cartCount + 1);
  };

  const resetCount = () => {
    setCartCount(0);
  };

  return (
    <Col>
      <Container style={{ width: '80%', marginBottom: '3em' }}>
        <h1 style={{ fontSize: '1em', marginBottom: '1em', fontWeight: 'bold' }}>{description.toUpperCase()}</h1>
        <Link to="/" className="text-decoration-none text-waterGreen" aria-label="Lien vers la fiche produit">
          <img style={{ marginBottom: '1em' }} title="Voir la fiche produit" src={poster} className="img-fluid" alt={description} />
        </Link>
        <div style={{ fontSize: '0.8em', marginTop: '0.2em', marginBottom: '1.5em', fontWeight: 'bold' }}>{price}€</div>
        <div className="addToBasket" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="baskets">
            <button type="button" style={{ border: 'none', backgroundColor: 'white' }}>
              <BsFillCartDashFill style={{ width: '2em' }} onClick={decreaseCount} />
            </button>
            <span>{cartCount}</span>
            <button type="button" style={{ border: 'none', backgroundColor: 'white' }}>
              <BsFillCartPlusFill style={{ width: '2em' }} onClick={increaseCount} />
            </button>
            <button type="submit" style={{ border: 'none', backgroundColor: 'white' }}>
              <FcCheckmark style={{ marginLeft: '1em' }} title="Ajouter le produit dans mon panier" />
            </button>
          </div>
          <span
            className="animation"
            style={{ marginTop: '1em' }}
            onClick={resetCount}
          >Réinitialiser
          </span>
        </div>
      </Container>
    </Col>
  );
}

CardType.propTypes = {
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
};

export default CardType;
