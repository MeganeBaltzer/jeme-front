/* eslint-disable indent */
import {
  SET_BURGER_IS_VISIBLE,
  CHANGE_FIELD_REGISTER,
  RESET_FORM,
  CHANGE_FIELD_LOGIN,
  SET_TOGGLE_IS_OPEN
} from '../actions/users';

export const initialState = {
  burgerIsVisible: false,
  toggleIsOpen: false,
  email: '',
  password: '',
  confirmpassword: '',
  firstname: '',
  lastname: '',
  role: '',
  isMatchPassword: true,
  isValidateContactForm: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BURGER_IS_VISIBLE:
      return {
        ...state,
        burgerIsVisible: action.payload,
      };
      case SET_TOGGLE_IS_OPEN:
      return {
        ...state,
        toggleIsOpen: action.payload,
      };
    case CHANGE_FIELD_REGISTER:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case RESET_FORM:
      return {
        ...state,
        email: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: '',
      };
      case CHANGE_FIELD_LOGIN:
        return {
          ...state,
          [action.identifier]: action.newValue,
        };
    default:
      return state;
  }
};

export default reducer;
