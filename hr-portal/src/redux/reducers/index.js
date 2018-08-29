import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Signup from "./SignupReducer";
import Fire from "./FireReducer";

export default combineReducers({
  Auth,
  Signup,
  Fire
});
