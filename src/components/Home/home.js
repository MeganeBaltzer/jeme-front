/* eslint-disable max-len */
import {
  Carousel, Image, Row, Col,
}
  from 'react-bootstrap/';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import categoryImages from '../../datas/categoryImages';
import BrandTitle from '../BrandTile/brandTitle';
import './styles.scss';

const Home = () => {
  const newProductsList = useSelector((state) => state.products.listOfNewProducts);
  const navigate = useNavigate();
  const burgerIsVisible = useSelector((state) => state.users.burgerIsVisible);

  const handleCategoryClick = (link) => {
    navigate(link);
  };

  return (
    <div className="home">
      {!burgerIsVisible && (
        <BrandTitle />
      )}
      <div className="news custom-background">
        {burgerIsVisible && (
          <h1
            style={{
              color: 'black', marginTop: '4em', marginBottom: '2em', fontSize: '2.5em', textDecoration: 'overline'
            }}
          >
            <strong>Nos nouveautés</strong>
          </h1>
        )}
        <Carousel
          data-bs-theme="dark"
          className="carrousel"
          style={{ marginTop: burgerIsVisible ? '1.5em' : '0' }}
        >
          {newProductsList.map((item) => (
            <Carousel.Item className={item.name} key={item.id}>
              <a href={`/product/${item.slug}`} target="_blank" rel="noopener noreferrer">
                <img
                  className="carrouselImage anim"
                  src={item.poster}
                  alt={item.name}
                  title={item.name}
                />
              </a>
              {!burgerIsVisible && (
                <Carousel.Caption className="bookTextContainer">
                  <h1
                    className="carrouselText"
                    style={{
                      color: 'black',
                      backgroundColor: 'white',
                      padding: '1em',
                      fontSize: '1.5em',
                      display: 'inline-block',
                      width: '50%',
                      borderRadius: '2em',
                    }}
                  >
                    {item.name.charAt(0).toUpperCase()}{item.name.slice(1)}
                  </h1>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
        </Carousel>

      </div>
      <section
        className="sections"
        style={{ marginTop: '7em', padding: '1em', backgroundColor: '#435747' }}
      >
        <h2
          style={{
            marginTop: '2em', marginBottom: '2em', color: 'white', fontSize: '2.5em', textDecoration: 'overline',
          }}
        >
          <strong>
            Nos catégories
          </strong>
        </h2>
        <Row xs={1} sm={1} md={1} lg={2} xl={3} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5em' }}>
          {categoryImages.map((item) => (
            <Image className="anim6" key={item.name} onClick={() => handleCategoryClick(item.link)} style={{ margin: '2em', width: '20em', borderRadius: '1em' }} src={item.poster} alt={item.name} />
          ))}
        </Row>
      </section>
      <Row
        className="keywordsContainer"
      >
        <Col className="keyword">ECO-RESPONSABLE</Col>
        <Col className="keyword">MATIÈRES QUALITATIVES</Col>
        <Col className="keyword">PRODUIT À LA MAIN</Col>
      </Row>
      {/* <section
        style={{ marginTop: '3em', fontSize: '2em', fontWeight: 'bold' }}
      >
        <p>Tous nos produits sont éco-responsables & faits à la main.</p>
      </section> */}
    </div>
  );
};

export default Home;
