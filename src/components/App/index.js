import { Routes, Route } from 'react-router-dom';
import Header from '../Header&Footer/Header/header';
import Footer from '../Header&Footer/Footer/footer';
import Home from '../Home/home';
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
