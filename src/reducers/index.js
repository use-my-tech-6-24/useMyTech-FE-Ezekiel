import { combineReducers } from "redux";
import tech from "./tech";
import auth from "./auth";

export default combineReducers({
  tech,
  auth
});
