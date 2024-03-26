import { combineReducers } from 'redux';

import productsReducer from './products';
import usersReducer from './users';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  messages: messagesReducer,

});

export default rootReducer;
