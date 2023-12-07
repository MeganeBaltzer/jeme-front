export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export const FETCH_NEWPRODUCTS = 'FETCH_NEWPRODUCTS';
export const SAVE_NEWPRODUCTS = 'SAVE_NEWPRODUCTS';

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const SET_FILTERS = 'SET_FILTERS';

export const SET_CHECK_BOX_STATES = 'SET_CHECK_BOX_STATES';

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
