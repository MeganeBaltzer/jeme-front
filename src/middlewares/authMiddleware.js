/* eslint-disable indent */
import axios from 'axios';

import {

} from '../actions/users';

const API_URL = 'http://localhost:8081/api/';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    default:
      next(action);
  }
};

export default authMiddleware;
