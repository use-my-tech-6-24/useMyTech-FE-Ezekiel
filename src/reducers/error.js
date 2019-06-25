import { SET_ERRORS, RESET_ERRORS } from "../actions/types";

const INITIAL_STATE = {
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload
      };

    case RESET_ERRORS:
      return {
        ...state,
        error: ""
      };

    default:
      return state;
  }
};