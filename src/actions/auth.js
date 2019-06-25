import axios from "axios";
import { REGISTER_USER, SET_CURRENT_USER, SIGN_OUT_USER } from "./types";

import { decodeToken } from "../utils/utils";

export const registerUser = payload => dispatch => {
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/auth/register",
      payload
    )
    .then(res => dispatch({ type: REGISTER_USER }))
    .catch(err => console.log(err));
};

export const loginUser = payload => dispatch => {
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/auth/login",
      payload
    )
    .then(res => {
    //   console.log(res.data);
      localStorage.setItem("token", res.data.token);
      const decodedToken = decodeToken(res.data.token);

      //   console.log(decodeToken(res.data.token))
        dispatch({ type: SET_CURRENT_USER, payload: decodedToken });
    })
    .catch(err => console.log(err));
};

export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload
  };
};


export const signOut = () => {
    localStorage.removeItem('token');

    return {
        type: SIGN_OUT_USER
    }

}