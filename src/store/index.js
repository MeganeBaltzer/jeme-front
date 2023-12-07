/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers/index';
import productsMiddleware from '../middlewares/authMiddleware';
import authMiddleware from '../middlewares/productsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(productsMiddleware, authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
