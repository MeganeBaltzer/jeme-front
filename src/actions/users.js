export const CHANGE_FIELD_REGISTER = 'CHANGE_FIELD_REGISTER';
export const CHANGE_FIELD_LOGIN = 'CHANGE_FIELD_LOGIN';
export const REGISTER = 'REGISTER';
export const RESET_FORM = 'RESET_FORM';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

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
