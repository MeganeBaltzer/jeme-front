import { Routes, Route } from 'react-router-dom';
import Header from '../Header&Footer/Header/header';
import Footer from '../Header&Footer/Footer/footer';
import Home from '../Home/home';
import BabySewing from '../Sections/BabySewing/babysewing';
import Accessories from '../Sections/Accessories/accessories';
import Pouches from '../Sections/Pouches/pouches';
import Bags from '../Sections/Bags/bags';
import Jewerly from '../Sections/Jewelry/jewelry';
import Cooking from '../Sections/Cooking/cooking';
import Promotions from '../Sections/Promotions/promotions';
import Contact from '../Contact/contact';
import Connection from '../Connection/connection';
import Register from '../Connection/register';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/accessories"
            element={<Accessories />}
          />
          <Route
            path="/pouches"
            element={<Pouches />}
          />
          <Route
            path="/bags"
            element={<Bags />}
          />
          <Route
            path="/jewels"
            element={<Jewerly />}
          />
          <Route
            path="/cooking"
            element={<Cooking />}
          />
          <Route
            path="/promos"
            element={<Promotions />}
          />
          <Route
            path="/babySewing"
            element={<BabySewing />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/login"
            element={<Connection />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
