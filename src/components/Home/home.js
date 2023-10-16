/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import {
  Carousel, Image, Row, Col,
}
  from 'react-bootstrap/';
import Photo from '../../assets/img/1280x850.jpg';
import Photo2 from '../../assets/img/500x350.jpg';
import BrandTitle from '../BrandTile/brandTitle';

function Home() {
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
    <div className="home">
      <BrandTitle />
      <div className="news">
        {!burgerIsVisible && (
          <Carousel data-bs-theme="dark" className="carousel">
            <Carousel.Item className="item1" key="1">
              <a href="fausseurl" target="_blank" rel="noopener noreferrer">
                <img
                  className="carrouselImage anim"
                  src={Photo}
                  alt="lunettes de soleil"
                  title="Découvrir cette nouveauté"
                  style={{ maxWidth: '50%' }}
                />
              </a>
              <Carousel.Caption className="bookTextContainer">
                <h1 className="carrouselText" style={{ fontFamily: 'Handlee', color: 'black', backgroundColor: 'white', padding: '0.3em', fontSize: '2.5em' }}>
                  Nos nouveautés
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item1" key="1">
              <a href="cv-meganebaltzer.surge.sh" target="_blank" rel="noopener noreferrer">
                <img
                  className="carrouselImage anim"
                  src={Photo}
                  alt="lunettes de soleil"
                  title="Découvrir cette nouveauté"
                  style={{ maxWidth: '50%' }}
                />
              </a>
              <Carousel.Caption className="bookTextContainer">
                <h1
                  className="carrouselText"
                  style={{
                    fontFamily: 'Handlee', color: '#c79f23', backgroundColor: 'white', padding: '0.3em', fontSize: '2.5em'
                  }}
                >
                  Nos nouveautés
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )}
        {burgerIsVisible && (
          <><Image className="anim" src={Photo} fluid /><h1 style={{ color: '#c79f23', fontSize: '1.5em', marginTop: '1em' }}>Nos nouveautés</h1></>
        )}
      </div>
      <section
        className="sections"
        style={{ marginTop: '5em' }}
      >
        <h2 style={{ marginTop: '3em', marginBottom: '1em' }}>Nos catégories</h2>
        <Row xs={1} sm={1} md={1} lg={2} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
        </Row>
      </section>
    </div>
  );
}

export default Home;
