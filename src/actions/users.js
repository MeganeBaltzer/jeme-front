export const CHANGE_FIELD_REGISTER = 'CHANGE_FIELD_REGISTER';
export const CHANGE_FIELD_LOGIN = 'CHANGE_FIELD_LOGIN';
export const REGISTER = 'REGISTER';
export const RESET_FORM = 'RESET_FORM';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const SET_BURGER_IS_VISIBLE = 'SET_BURGER_IS_VISIBLE';
export const SET_TOGGLE_IS_OPEN = 'SET_TOGGLE_IS_OPEN';

export const register = () => ({
  type: REGISTER,
});

export const changeFieldRegister = (newValue, key) => ({
  type: CHANGE_FIELD_REGISTER,
  newValue: newValue,
  identifier: key,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const changeFieldLogin = (newValue, key) => ({
  type: CHANGE_FIELD_LOGIN,
  newValue: newValue,
  identifier: key,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const setBurgerIsVisible = (bool) => ({
  type: SET_BURGER_IS_VISIBLE,
  payload: bool,
});

export const setToggleIsOpen = (bool) => ({
  type: SET_TOGGLE_IS_OPEN,
  payload: bool,
});
