import { SET_ERRORS, RESET_ERRORS } from "./types";

export const setError = payload => {
  return {
    type: SET_ERRORS,
    payload
  };
};

export const resetError = () => {
  return {
    type: RESET_ERRORS
  };
};