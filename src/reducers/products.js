import {
  SAVE_PRODUCTS,
  SAVE_NEWPRODUCTS,
  SET_FILTERS,
  TOGGLE_FILTER,
  SET_CHECK_BOX_STATES,
  SET_INPUT_VALUE,
  SET_CARD_COUNT,
  SET_BASKET_PRODUCTS,
} from '../actions/products';

export const initialState = {
  isLoaded: false,
  list: [],
  listOfNewProducts: [],
  filterVisible: false,
  checkboxStates: [],
  selectedFilters: [],
  inputFilter: '',
  cardCount: 0,
  basketProducts: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        list: action.products,
        isLoaded: true,
      };

    case SAVE_NEWPRODUCTS:
      return {
        ...state,
        listOfNewProducts: action.newProducts,
        isLoaded: true,
      };

    case TOGGLE_FILTER:
      return {
        ...state,
        filterVisible: !state.filterVisible,
      };

    case SET_FILTERS:
      return {
        ...state,
        selectedFilters: action.payload,
        isLoaded: true,
      };

    case SET_CHECK_BOX_STATES:
      return {
        ...state,
        checkboxStates: action.payload,
      };

    case SET_INPUT_VALUE:
      // console.log('New input value:', action.payload);
      return {
        ...state,
        inputFilter: action.payload,
        isLoaded: true,
      };

    case SET_CARD_COUNT:
      return {
        ...state,
        cardCount: action.payload,
      };

    case SET_BASKET_PRODUCTS:
      return {
        ...state,
        basketProducts: [...state.basketProducts, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
