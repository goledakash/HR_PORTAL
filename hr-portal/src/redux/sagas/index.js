import { all, takeLatest } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";
import * as Auth from "./AuthSaga";
import * as FireSaga from "./FireSaga";

export default function* rootSaga(params) {
  yield all([takeLatest(Types.LOGIN_USER, Auth.fetchLoginUser)]);
  yield all([takeLatest(Types.SIGNUP_USER, Auth.storeUser)]);
  yield all([takeLatest(Types.SIGNUP_SAVE_DATABASE, FireSaga.storeUserSignupData)]);
  yield all([takeLatest(Types.LOGOUT_USER, Auth.fetchLogoutUser)]);
}
