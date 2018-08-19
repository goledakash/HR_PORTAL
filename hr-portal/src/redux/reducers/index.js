import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Signup from "./SignupReducer";

export default combineReducers({
  Auth,
  Signup
});
