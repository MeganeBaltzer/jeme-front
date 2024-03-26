export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const FETCH_NEWPRODUCTS = 'FETCH_NEWPRODUCTS';
export const SAVE_NEWPRODUCTS = 'SAVE_NEWPRODUCTS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_CHECK_BOX_STATES = 'SET_CHECK_BOX_STATES';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SET_CARD_COUNT = 'SET_CARD_COUNT';
export const SET_BASKET_PRODUCTS = 'SET_BASKET_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const saveProducts = (list) => ({
  type: SAVE_PRODUCTS,
  products: list,
});

export const fetchNewProducts = () => ({
  type: FETCH_NEWPRODUCTS,
});

export const saveNewProducts = (list) => ({
  type: SAVE_NEWPRODUCTS,
  newProducts: list,
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const setCheckboxStates = (newChecked) => ({
  type: SET_CHECK_BOX_STATES,
  payload: newChecked,
});

export const setInputValue = (newValue) => ({
  type: SET_INPUT_VALUE,
  payload: newValue,
});

export const setCardCount = (newValue) => ({
  type: 'SET_CARD_COUNT',
  payload: newValue,
});

export const setBasketProducts = (product) => ({
  type: 'SET_BASKET_PRODUCTS',
  payload: product,
});
