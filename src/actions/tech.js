import axios from "axios";

import { GET_TECH_ITEMS } from "./types";

export const getTechItems = () => dispatch => {
  axios
    .get("https://usemytechstuffbe.herokuapp.com/api/items")
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_TECH_ITEMS, payload: res.data });
    })
    .catch(err => console.log(err));
};
