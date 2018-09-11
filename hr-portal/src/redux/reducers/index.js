import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Signup from "./SignupReducer";
import Fire from "./FireReducer";
import Employee from "./EmployeeReducer";
import EmpData from "./EmpDataReducer";
import TaskDetails from "./TaskDetailsReducer";

export default combineReducers({
  Auth,
  Signup,
  Fire,
  Employee,
  EmpData,
  TaskDetails
});
