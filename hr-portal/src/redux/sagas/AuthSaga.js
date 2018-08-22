import { put } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";


export function* fetchLoginUser(action) {

    // try{
    //  const {firstName, lastName, email, password} = action;
    
    // const response = yield call(CallOutsideAPI, firstName, lastName, email, password);
    
    //   yield put({type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, response});
    
    // }catch(error){
    //   yield put({type:Types.SERVER_CALL_FAILED, error: error.message  });
    // }
    
    const formBody = {};
    formBody.email = action.email;
    formBody.password = action.password;
    
    try{
      yield put({type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, formBody});
    }catch(error){
    yield put({type:Types.SERVER_CALL_FAILED, error: error.message  });
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
    
      const formBody = {};
      formBody.firstName = action.firstName;
      formBody.lastName = action.lastName;
      formBody.email = action.email;
      formBody.password = action.password;
    
    try{
      yield put({type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, formBody});
    }catch(error){
    yield put({type:Types.SERVER_CALL_FAILED, error: error.message  });
    }
    
    }