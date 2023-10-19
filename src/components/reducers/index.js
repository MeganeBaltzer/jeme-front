import { combineReducers } from 'redux';

import productsReducer from './products';
import userReducer from './users';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  messages: messagesReducer,

});

export default rootReducer;
