/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import {
  Carousel, Image, Row,
}
  from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Photo2 from '../../assets/img/500x350.jpg';
import BrandTitle from '../BrandTile/brandTitle';

function Home() {
  const [burgerIsVisible, setBurgerIsVisible] = useState(false);
  const newProductsList = useSelector((state) => state.products.listOfNewProducts);
  console.log(newProductsList);

  useEffect(() => {
    // Fonction de rappel pour mettre à jour l'état en fonction de la taille de l'écran
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setBurgerIsVisible(screenWidth < 990);
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
      {!burgerIsVisible && (
        <BrandTitle />
      )}
      <div className="news">
        {burgerIsVisible && (
          <h1 style={{ color: 'black', fontSize: '1.5em', marginTop: '12em' }}>Nos nouveautés</h1>
        )}
        <Carousel
          data-bs-theme="dark"
          className="carrousel"
          style={{ marginTop: burgerIsVisible ? '1.5em' : '0' }}
        >
          {newProductsList && newProductsList.length > 0 ? (
            newProductsList.map((item) => (
              <Carousel.Item className={item.name} key={item.id}>
                <a href="fausseurl" target="_blank" rel="noopener noreferrer">
                  <img
                    className="carrouselImage anim"
                    src={item.poster}
                    alt={item.name}
                    title={item.name}
                    style={{ maxWidth: '50%' }}
                  />
                </a>
                {!burgerIsVisible && (
                  <Carousel.Caption className="bookTextContainer">
                    <h1
                      className="carrouselText"
                      style={{
                        fontFamily: 'Handlee',
                        color: 'black',
                        backgroundColor: 'white',
                        padding: '0.3em',
                        fontSize: '2.5em',
                      }}
                    >
                      {item.name}
                    </h1>
                  </Carousel.Caption>
                )}
              </Carousel.Item>
            ))
          ) : (
            <p>Aucun nouveau produit disponible.</p>
          )}
        </Carousel>
      </div>
      <section
        className="sections"
        style={{ marginTop: '5em' }}
      >
        <h2 style={{ marginTop: '3em' }}>Nos catégories</h2>
        <Row xs={1} sm={1} md={1} lg={2} xl={3} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5em' }}>
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
          <Image className="anim" style={{ margin: '2em', width: '28em' }} src={Photo2} roundedCircle />
        </Row>
        <NavLink style={{ color: '#c79f23' }}>Voir toutes les catégories confondues</NavLink>
      </section>
    </div>
  );
}

export default Home;
