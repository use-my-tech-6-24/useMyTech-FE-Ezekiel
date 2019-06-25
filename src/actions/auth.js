import axios from "axios";
import { toast } from "react-toastify";
import { REGISTER_USER, SET_CURRENT_USER, SIGN_OUT_USER } from "./types";

import { setError, resetError } from "./error";
import { decodeToken } from "../utils/utils";

export const registerUser = payload => dispatch => {
  axios
    .post("https://usemytechstuffbe.herokuapp.com/api/auth/register", payload)
    .then(() => {
      dispatch(resetError());
      dispatch({ type: REGISTER_USER });
    })
    .catch(() => {
      dispatch(setError("Kindly provide valid details for registration"));
      dispatch(resetError());
    });
};

export const loginUser = payload => dispatch => {
  axios
    .post("https://usemytechstuffbe.herokuapp.com/api/auth/login", payload)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      const decodedToken = decodeToken(res.data.token);

      dispatch(resetError());
      dispatch({ type: SET_CURRENT_USER, payload: decodedToken });
    })
    .catch(() => {
      dispatch(setError("Invalid Login Credentials"));
      dispatch(resetError());
    });
};

export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload
  };
};

export const signOut = () => {
  localStorage.removeItem("token");
  toast.success("Signed Out Successfully");

  return {
    type: SIGN_OUT_USER
  };
};
