import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers/index';
// import authMiddleware from '../middlewares/authMiddleware';
// import productsMiddleware from '../middlewares/productsMiddleware';

// for devtools extension
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// two middlewares for recipe and atuhentification
// const enhancers = composeEnhancers(applyMiddleware(authMiddleware, productsMiddleware));

// we create the store
const store = createStore(reducer);

export default store;
