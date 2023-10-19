import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'src/components/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/scrollToTop';
import store from './components/store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
