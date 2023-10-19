import { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import Photo3 from '../../../assets/img/1280x850.jpg';

function CardType() {
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
      <Container style={{ marginTop: '2em', width: '80%' }}>
        <Link to="/" className="text-decoration-none text-waterGreen" aria-label="Lien vers la fiche produit">
          <img style={{ marginBottom: '1em' }} title="Voir la fiche produit" src={Photo3} className="img-fluid anim" alt="lunettes" />
        </Link>
        <div className="addToBasket" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="baskets">
            <button type="button" style={{ border: 'none', backgroundColor: 'white' }}>
              <BsFillCartDashFill style={{ width: '2em' }} onClick={decreaseCount} />
            </button>
            <span>{cartCount}</span>
            <button type="button" style={{ border: 'none', backgroundColor: 'white' }}>
              <BsFillCartPlusFill style={{ width: '2em' }} onClick={increaseCount} />
            </button>
          </div>
          <button type="submit" style={{ border: 'none', backgroundColor: 'white' }}>
            <FcCheckmark style={{ marginLeft: '1em' }} title="Ajouter les produits dans mon panier" />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.8em' }}>
          <span
            className="animation"
            onClick={resetCount}
          >Réinitialiser
          </span>
          <span className="animation" style={{ textDecoration: 'underline' }}>Voir mon panier</span>
        </div>
      </Container>
    </Col>
  );
}

export default CardType;

{/* <Col>
      <Container style={{ marginTop: '5em', width: '80%' }}>
        <Card className="p-0 box position-relative">
          <Card.Header
            className="text-center text-black bg-navyblue"
            style={{
              fontSize: '1em', width: 'auto', height: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
          >
            Bavoir pression bleu
          </Card.Header>
          <Link to="/" className="text-decoration-none text-navyblue" aria-label="card title">
            <Card.Img
              style={{ width: '100%', height: '11em' }}
              variant="top"
              src={Photo3}
              alt="Card Title"
            />
            <Card.Body>
              <Card.Text
                className="text-center text-navyblue"
                aria-label="Bouton prix"
                style={{
                  fontSize: 'small',
                  animation: 'none',
                  color: 'black',
                }}
              >
                10€
              </Card.Text>
            </Card.Body>
          </Link>
          <Card.Footer
            style={{
              display: 'flex', justifyContent: 'space-between', padding: '1.5em', color: '#c79f23',
            }}
          >
            <BsFillCartDashFill style={{ width: '2em' }} onClick={decreaseCount} />
            <span>{cartCount}</span>
            <BsFillCartPlusFill style={{ width: '2em' }} onClick={increaseCount} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="animation"
                onClick={resetCount}
              >Réinitialiser
              </span>
              <span className="animation" style={{ textDecoration: 'underline' }}>Voir mon panier</span>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </Col> */}
