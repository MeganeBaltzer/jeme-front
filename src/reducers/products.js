import {
  SAVE_PRODUCTS,
  SAVE_NEWPRODUCTS,
  SET_FILTERS,
  TOGGLE_FILTER,
  SET_CHECK_BOX_STATES,
} from '../actions/products';

export const initialState = {
  isLoaded: false,
  list: [],
  listOfNewProducts: [],
  filterVisible: false,
  checkboxStates: [],
  selectedFilters: [],
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
      };

    case SET_CHECK_BOX_STATES:
      return {
        ...state,
        checkboxStates: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
