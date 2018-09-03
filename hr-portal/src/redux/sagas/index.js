import { all, takeLatest } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";
import * as Auth from "./AuthSaga";
import * as FireSaga from "./FireSaga";

export default function* rootSaga(params) {
  yield all([takeLatest(Types.LOGIN_USER, Auth.fetchLoginUser)]);
  yield all([takeLatest(Types.SIGNUP_USER, Auth.storeUser)]);
  yield all([takeLatest(Types.SIGNUP_SAVE_DATABASE, FireSaga.storeUserSignupData)]);
  yield all([takeLatest(Types.EMPLOYEE_SAVE_DATABASE, FireSaga.storeEmployeeRegistrationData)]);
  yield all([takeLatest(Types.GET_EMPLOYEE_LIST, FireSaga.getEmployeeList)]);
  yield all([takeLatest(Types.EMPLOYEE_INFO_SAVE_DATABASE, FireSaga.storeEmployeeInfoRegistrationData)]);
  yield all([takeLatest(Types.LOGOUT_USER, Auth.fetchLogoutUser)]);
}
