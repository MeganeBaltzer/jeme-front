/* eslint-disable max-len */
import {
  Form, Container, NavLink, Button, Row, Col,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import instagramIcon from '../../../assets/img/instagram.svg';
import './styles.scss';

function Footer() {
  const instagramUrl = 'https://www.instagram.com/jeme_creations/';
  const [burgerIsVisible, setBurgerIsVisible] = useState(false);

  useEffect(() => {
    // Fonction de rappel pour mettre à jour l'état en fonction de la taille de l'écran
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setBurgerIsVisible(screenWidth < 990); // Par exemple, considérons que la largeur de l'écran inférieure à 768px est "mobile"
    };

    // Ajoute un écouteur d'événements pour détecter les changements de taille d'écran
    window.addEventListener('resize', handleResize);

    // Appelle la fonction de rappel une fois au montage pour définir l'état initial
    handleResize();

    // Nettoie l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="footer-wrapper">
      <Card className="text-center">
        <Card.Header className="text-white bg-waterGreen">Livraison gratuite sous 24h dès 100€ d'achat en France métropolitaine</Card.Header>
        <Card.Body className="bg-waterGreenLight p-3">
          <Card.Title>Vous avez des questions concernant un produit ou une de vos commandes ?</Card.Title>
          <Card.Text>
            N'hésitez pas à nous contacter via notre fiche de contact. Nous nous engageons à vousu répondre dans les 48h.
          </Card.Text>
          <Button className="anim" variant="waterGreen">Nous contacter</Button>
        </Card.Body>
        <Container>
          <Row
            style={{ marginTop: '4em' }}
          >
            <Col>
              <NavLink to={null} style={{ paddingBottom: '1em' }}><strong>FAQ</strong></NavLink>
              <NavLink className="animation" style={{ paddingBottom: '1em' }}>Faire un retour ?</NavLink>
              <NavLink className="animation">Suivre ma commande</NavLink>
            </Col>
            <Col>
              <NavLink to={null} style={{ paddingBottom: '1em' }}><strong>A propos</strong></NavLink>
              <NavLink className="animation" style={{ paddingBottom: '1em' }}>Qui sommes-nous ?</NavLink>
              <NavLink className="animation" style={{ paddingBottom: '1em' }}>Nos engagements</NavLink>
              <NavLink className="animation" style={{ paddingBottom: '1em' }}>Confidentialité des données</NavLink>
              <NavLink className="animation">CGV</NavLink>
            </Col>
            <Col style={{ marginTop: burgerIsVisible ? '2em' : '0' }}>
              <NavLink to={null} style={{ paddingBottom: '1em' }}><strong>Recevez nos newsletters</strong></NavLink>
              <Form.Control
                type="text"
                placeholder="Votre adresse mail"
                style={{ width: '10em', display: 'math' }}
              />
              <Button className="animation" as="input" type="button" value="Je m'inscris" />
            </Col>
            <Col style={{ marginTop: burgerIsVisible ? '2em' : '0' }}>
              <NavLink to={null} style={{ paddingBottom: '1em' }}><strong>Notre Instagram</strong></NavLink>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={instagramIcon}
                  className="anim2"
                  alt="Instagram"
                  style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                />
              </a>
            </Col>
          </Row>
        </Container>
        <div style={{ borderTop: '0.2px solid #d6f0d9', marginBottom: '2em', marginTop: '2em' }} />
        <span
          style={{
            marginBottom: '1em', color: '#c79f23', fontSize: '1em', fontFamily: 'Pacifico',
          }}
        >
          JEME Créations
        </span>
      </Card>
    </div>
  );
}

export default Footer;
