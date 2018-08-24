import * as Types from '../ActionTypes';

export const logoutUser = (userId) => ({
  type: Types.LOGOUT_USER,
  userId
})

export const loginUser = (userName, password) => ({
  type:Types.LOGIN_USER,
  userName,
  password
})

export const loginUserSuccess = (response) => ({
  type:Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS,
  response
})

export const loginUserFailure = (response) => ({
  type:Types.LOGIN_USER_SERVER_RESPONSE_ERROR,
  response
})

export const signupUserSuccess = (response) => ({
    type:Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS,
    response
  })
  
  export const signupUserFailure = (response) => ({
    type:Types.SIGNUP_USER_SERVER_RESPONSE_ERROR,
    response
  })

export const logoutUserSuccess = (response) => ({
  type:Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS,
  response
})

export const logoutUserFailure = (response) => ({
  type:Types.LOGOUT_USER_SERVER_REPONSE_ERROR,
  response
})

export const validateToken = () => ({
  type:Types.VALIDATE_TOKEN
})

export const isUserLoggedIn = () => ({
  type: Types.IS_USER_LOGGED_IN
})


/*
function* fetchLoginUser(action){
  try {
    const response = yield call(firebase.auth().signInWithEmailAndPassword(action.userName, action.password));
    //yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, response });
    yield put(loginUserSuccess(response));

  } catch (error) {
    //yield put({ type: Types.LOGIN_USER_SERVER_REPONSE_ERROR, error: error});
    yield put(loginUserFailure(error));
  }
}
*/
