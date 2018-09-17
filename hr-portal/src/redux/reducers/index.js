import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Signup from "./SignupReducer";
import Fire from "./FireReducer";
import Employee from "./EmployeeReducer";
import EmpInfoData from "./EmpInfoDataReducer";
import EmpData from "./EmpDataReducer";
import TaskDetails from "./TaskDetailsReducer";
import TaskRed from "./TaskDataReducer";

export default combineReducers({
  Auth,
  Signup,
  Fire,
  Employee,
  EmpData,
  EmpInfoData,
  TaskDetails,
  TaskRed
});
