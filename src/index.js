import { createRoot } from 'react-dom/client';
import App from 'src/components/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/scrollToTop';

const rootReactElement = (
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
