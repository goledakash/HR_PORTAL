import { put, call } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";
import {loginUserSuccess, loginUserFailure} from '../actions/Auth';
import {signupUserSuccess, signupUserFailure} from '../actions/Auth';
import {logoutUserSuccess, logoutUserFailure} from '../actions/Auth';

import firebase from '../../firebase';

export function* fetchLoginUser(action) {

    // try{
    //  const {firstName, lastName, email, password} = action;
    
    // const response = yield call(CallOutsideAPI, firstName, lastName, email, password);
    
    //   yield put({type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, response});
    
    // }catch(error){
    //   yield put({type:Types.SERVER_CALL_FAILED, error: error.message  });
    // }
    
    // const formBody = {};
    // formBody.email = action.email;
    // formBody.password = action.password;
    
    // try{
    //   yield put({type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, formBody});
    // }catch(error){
    // yield put({type:Types.SERVER_CALL_FAILED, error: error.message  });
    // }

    const LoginUserServiceCall  = (email, password) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    try {
      const response = yield call(LoginUserServiceCall, action.email, action.password);
      yield put(loginUserSuccess(response));
    } catch (error) {
      yield put(loginUserFailure(error))
    }

  }

// const signupURL = API.SIGNUP_USER_API;

// function CallOutsideAPI (firstName, lastName, email, password) {

// };

export function* storeUser(action) {
    
      // try{
      //  const {firstName, lastName, email, password} = action;
    
      // const response = yield call(CallOutsideAPI, firstName, lastName, email, password);
    
      //   yield put({type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, response});
    
      // }catch(error){
      //   yield put({type:Types.SERVER_CALL_FAILED, error: error.message  });
      // }
    
    //   const formBody = {};
    //   formBody.firstName = action.firstName;
    //   formBody.lastName = action.lastName;
    //   formBody.email = action.email;
    //   formBody.password = action.password;
    
    // try{
    //   yield put({type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, formBody});
    // }catch(error){
    // yield put({type:Types.SERVER_CALL_FAILED, error: error.message  });
    // }

    const SignupUserServiceCall  = (email, password) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    try {
      const response = yield call(SignupUserServiceCall, action.email, action.password);
      yield put(signupUserSuccess(response));
    } catch (error) {
      yield put(signupUserFailure(error))
    }

    }



    export function* fetchLogoutUser(action){

      // const LogoutUserServiceCall  = (userId) => {
      //   return firebase.auth().signOut(userId);
      // }

      // try {
      //   const response = yield call(LogoutUserServiceCall, action.userId);
      //   const result = yield response.json();
      //   if (result.error) {
      //     yield put({ type: Types.LOGOUT_USER_SERVER_REPONSE_ERROR, error: result.error });
      //   } else {
      //     yield put({ type: Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS, result });
      //   }
      // } catch (error) {
      //   yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
      // }

      const LogoutUserServiceCall  = (userId) => {
        return firebase.auth().signOut(userId);
      }
  
      try {
        const response = yield call(LogoutUserServiceCall, action.userId);
        yield put(logoutUserSuccess(response));
      } catch (error) {
        yield put(logoutUserFailure(error))
      }
    }