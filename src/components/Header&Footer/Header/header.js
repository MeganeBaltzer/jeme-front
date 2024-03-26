/* eslint-disable max-len */
import { useEffect } from 'react';
import {
  Nav, Navbar, Button, ButtonGroup, Dropdown,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBurgerIsVisible, setToggleIsOpen } from '../../../actions/users';
import { setCardCount } from '../../../actions/products';
import './styles.scss';

function Header() {
  const activeLink = ' mx-4 text-yellow text-decoration-none pb-1 ';
  const normalLink = ' mx-4 text-black text-decoration-none pb-1 transition-normal';
  const dispatch = useDispatch();
  const toggleIsOpen = useSelector((state) => state.users.toggleIsOpen);
  const burgerIsVisible = useSelector((state) => state.users.burgerIsVisible);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Mettre à jour burgerIsVisible en fonction de la largeur de l'écran
      dispatch(setBurgerIsVisible(screenWidth < 992));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  // Create a function to toggle the Navbar
  const toggleNavbar = () => {
    dispatch(setToggleIsOpen(!toggleIsOpen));
  };

  // Add an event listener to handle the Navbar toggle closing
  const handleToggleClose = () => {
    dispatch(setToggleIsOpen(false));
  };

  const resetCount = () => {
    dispatch(setCardCount(0));
  };

  return (
    <header>
      <Navbar
        className="custom-navbar"
        expand="lg"
        style={{
          position: 'fixed', top: '0', width: '100%', zIndex: '1000', display: 'block',
        }}
        bg="white"
        variant="dark"
        aria-label="header"
        expanded={toggleIsOpen}
        onToggle={toggleNavbar}
      >
        <div
          className="toggleForm"
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '2em',
          }}
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{
              backgroundColor: '#435747', padding: '0.2em', margin: '1em', marginBottom: '0',
            }}
          />
          {burgerIsVisible && (
            <Navbar.Brand
              aria-label="logo Jeme"
              style={{ marginTop: '2.1em', marginRight: '2.5em' }}
            >
              <NavLink
                to="/"
                aria-label="logo Jeme"
                style={{ textDecoration: 'none' }}
                onClick={handleToggleClose && resetCount}
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
        </div>
        <Navbar.Collapse
          className="justify-content-between"
          style={{ marginRight: '2em' }}
        >
          <Nav
            className="left-nav align-items-center"
            style={{ margin: '2%' }}
          >
            {!burgerIsVisible && (
              <Navbar.Brand
                aria-label="logo Jeme"
              >
                <NavLink
                  to="/"
                  aria-label="logo Jeme"
                  style={{ textDecoration: 'none' }}
                  onClick={handleToggleClose && resetCount}
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
              onClick={handleToggleClose && resetCount}
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
              onClick={handleToggleClose && resetCount}
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
              onClick={handleToggleClose && resetCount}
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
              onClick={handleToggleClose && resetCount}
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
              onClick={handleToggleClose && resetCount}
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
              onClick={handleToggleClose && resetCount}
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
              onClick={handleToggleClose && resetCount}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Cuisine
              </h1>
            </NavLink>
            <NavLink
              to="/promos"
              aria-label="lien vers les promos"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={handleToggleClose && resetCount}
            >
              <h1
                style={{ fontSize: '0.9em' }}
              >
                Nos promos
              </h1>
            </NavLink>
            <Dropdown as={ButtonGroup} style={{ marginTop: '-1%' }}>
              <Button
                style={{
                  fontSize: '0.9em', backgroundColor: '#435747', borderRadius: '0.5em', color: 'white',
                }}
                variant="success"
              >
                Profil
              </Button>

              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item>
                  <NavLink to="/login" style={{ fontSize: '0.9em', textDecoration: 'none', color: 'black' }} onClick={handleToggleClose && resetCount}>Connexion</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/register" style={{ fontSize: '0.9em', textDecoration: 'none', color: 'black' }} onClick={handleToggleClose && resetCount}>Inscription</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="http://localhost:8081/login" target="_blank" style={{ fontSize: '0.9em', textDecoration: 'none', color: 'black' }} onClick={handleToggleClose && resetCount}>Back-office</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/" style={{ fontSize: '0.9em', textDecoration: 'none', color: 'black' }} onClick={handleToggleClose && resetCount}>Mon compte</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/basket" style={{ fontSize: '0.9em', textDecoration: 'none', color: 'black' }} onClick={handleToggleClose && resetCount}>Mon panier</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/login" style={{ fontSize: '0.9em', textDecoration: 'none', color: 'black' }} onClick={handleToggleClose && resetCount}>Déconnexion</NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
