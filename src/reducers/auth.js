import {
  LOGIN_USER,
  REGISTER_USER,
  SET_CURRENT_USER,
  SIGN_OUT_USER
} from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: false,
  isRegistered: false,
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isSignedIn: true
      };
    case REGISTER_USER:
      return {
        ...state,
        isRegistered: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        isSignedIn: false,
        user: {},
        isRegistered: false
      };

    default:
      return state;
  }
};
