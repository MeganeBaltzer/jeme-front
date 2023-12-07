/* eslint-disable indent */
import axios from 'axios';

import {
  FETCH_PRODUCTS,
  saveProducts,
  FETCH_NEWPRODUCTS,
  saveNewProducts,

} from '../actions/products';

const API_URL = 'http://localhost:8081/api/';

const productsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios.get(`${API_URL}productsList`)
        .then((response) => {
          store.dispatch(saveProducts(response.data));
          // console.log(response.data);
        })
        .catch(() => {
        });

        break;

        case FETCH_NEWPRODUCTS:
      axios.get(`${API_URL}newProductsList`)
        .then((response) => {
          store.dispatch(saveNewProducts(response.data));
          // console.log(response.data);
        })
        .catch(() => {
        });

        break;

    default:
      next(action);
  }
};

export default productsMiddleware;
