/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import {
  Nav, Navbar, Form, Button,
} from 'react-bootstrap';
import { Tooltip } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const activeLink = ' mx-4 text-yellow text-decoration-none pb-1 ';
  const normalLink = ' mx-4 text-black text-decoration-none pb-1 transition-normal';
  const displayNoneSearch = 'd-none';

  // Create state variable to track the open/closed state of the Navbar toggle
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [burgerIsVisible, setBurgerIsVisible] = useState(false);

  // Create a function to toggle the Navbar
  const toggleNavbar = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  // Add an event listener to handle the Navbar toggle closing
  const handleToggleClose = () => {
    setIsToggleOpen(false);
  };

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
    <header>
      <Navbar
        expand="lg"
        style={{
          position: 'fixed', top: '0', width: '100%', zIndex: '1000', display: 'block',
        }}
        bg="white"
        variant="dark"
        aria-label="header"
        expanded={isToggleOpen}
        onToggle={toggleNavbar}
      >
        <title
          to="/"
          style={{
            textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: '3em',
          }}
          onClick={handleToggleClose}
          className={`mb-2 ${!burgerIsVisible && !isToggleOpen ? displayNoneSearch : 'ms-auto'}`}
        >
          <h1
            style={{
              color: '#c79f23', fontSize: '0.9em', fontFamily: 'Pacifico', textDecorationLine: 'overline', marginBottom: '2em',
            }}
          >
            JEME
          </h1>
        </title>
        <div
          className="toggleForm"
          style={{
            display: 'flex', alignItems: 'center', marginLeft: '2em', marginRight: '2em',
          }}
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{
              backgroundColor: '#435747', padding: '0.2em', margin: '1em', marginBottom: '0',
            }}
          />
          <Form.Control
            type="text"
            placeholder="Rechercher"
            className={`mb-2 ${!burgerIsVisible && !isToggleOpen ? displayNoneSearch : 'ms-auto'}`}
            style={{ margin: '2em', width: '40em' }}
          />
        </div>
        <Navbar.Collapse
          className="justify-content-between"
          style={{ marginRight: '2em' }}
        >
          <Nav
            className="left-nav align-items-center"
            style={{ margin: '2%' }}
          >
            {!isToggleOpen && (
              <Navbar.Brand
                aria-label="logo Jeme"
              >
                <NavLink
                  to="/"
                  aria-label="logo Jeme"
                  style={{ textDecoration: 'none' }}
                  onClick={handleToggleClose}
                >
                  <h1
                    style={{
                      color: '#c79f23', fontSize: '0.9em', fontFamily: 'Pacifico', textDecorationLine: 'overline',
                    }}
                  >
                    JEME
                  </h1>
                </NavLink>
              </Navbar.Brand>
            )}
            <NavLink
              to="/"
              aria-label="lien vers l'accueil"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Accueil
              </h1>
            </NavLink>
            <NavLink
              to="/babySewing"
              aria-label="lien vers les coutures bébé"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
              style={{ textAlign: 'center' }}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Coutures bébé
              </h1>
            </NavLink>
            <NavLink
              to="/accessories"
              aria-label="lien vers les accessoires"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Accessoires
              </h1>
            </NavLink>
            <NavLink
              to="/pouches"
              aria-label="lien vers les pochettes"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Pochettes
              </h1>
            </NavLink>
            <NavLink
              to="/bags"
              aria-label="lien vers les sacs"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Sacs
              </h1>
            </NavLink>
            <NavLink
              to="/jewels"
              aria-label="lien vers les bijoux"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Bijoux
              </h1>
            </NavLink>
            <NavLink
              to="/cooking"
              aria-label="lien vers la rubrique cuisine"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Cuisine
              </h1>
            </NavLink>
            <NavLink
              to="/promos"
              aria-label="lien vers les bijoux"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Nos promos
              </h1>
            </NavLink>
          </Nav>
          <Nav className="right-nav align-items-center ms-auto">
            <Form.Control
              type="text"
              placeholder="Rechercher"
              className={`mb-2 ${burgerIsVisible ? displayNoneSearch : 'ms-auto'}`}
            />
            {/* <NavLink
              to="/babySewing"
              aria-label="lien vers les coutures bébé"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
              style={{ textAlign: 'center' }}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Mon panier
              </h1>
            </NavLink> */}
            <NavLink
              to="/contact"
              aria-label="lien vers les bijoux"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose}
            >
              <h1
                style={{ fontSize: '0.9em', marginRight: '1em' }}
              >
                Contact
              </h1>
            </NavLink>
            <>
              <Button
                to="/login"
                as={Link}
                variant="dark"
                size="sm"
                className="anim fs-6 mb-2 btn m-1 text-white"
                style={{ backgroundColor: '#c79f23' }}
                aria-label="bouton pour se connecter"
              >
                Connexion
              </Button>
              <Button
                className="anim fs-6 mb-2 btn m-1 text-white"
                style={{ backgroundColor: '#435747' }}
                to="/register"
                as={Link}
                variant="dark "
                size="sm"
                aria-label="bouton pour s'inscrire"
              >
                S'inscrire
              </Button>
            </>
            {/* <>
              <Tooltip
                title="Cliquez pour modifier le profil"
              >

                <Nav.Link
                  to="/profil"
                  as={Link}
                  className="fs-6 mx-lg-4 bg-navyblue"
                  aria-label={`Profil de ${currentUser.firstname} ${currentUser.lastname}`}
                >
                  {`Bienvenue ${currentUser.firstname} ${currentUser.lastname}`}
                </Nav.Link>

              </Tooltip>
              <Button
                className="fs- btn m-1"
                variant="darksalmon"
                size="sm"
                onClick={handleLogout}
                aria-label="bouton pour se déconnecter"
              >
                Se déconnecter
              </Button>
            </> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
