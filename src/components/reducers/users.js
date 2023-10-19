/* eslint-disable indent */
import {
  CHANGE_FIELD_REGISTER,
  RESET_FORM,
  CHANGE_FIELD_LOGIN,
} from '../../actions/users';

export const initialState = {
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
