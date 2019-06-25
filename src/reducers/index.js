import { combineReducers } from "redux";
import tech from "./tech";
import auth from "./auth";
import error from "./error";
import loading from "./loading";

export default combineReducers({
  tech,
  auth,
  error,
  loading
});
