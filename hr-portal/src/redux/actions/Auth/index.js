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


export const loginUserSuccess = (response, UIAction) => ({
  type:Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS,
  response,
  UIAction
})

export const loginUserFailure = (response) => ({
  type:Types.LOGIN_USER_SERVER_RESPONSE_ERROR,
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

export const signupUserSuccess = (response, UIAction) => ({
  type:Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS,
  response,
  UIAction
});

export const signupUserFailure = (response) => ({
  type:Types.SIGNUP_USER_SERVER_RESPONSE_ERROR,
  response
});

export const signupSaveToFirebaseDatabase = (firstName, lastName, email, password, userType) => {
  return {
    type: Types.SIGNUP_SAVE_DATABASE,
    firstName,
    lastName,
    email,
    password,
    userType
  };
};

export const signupSaveSuccessCreateAction = (response) => ({
  type: Types.SIGNUP_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
  response
});

export const signupSaveErrorCreateAction = (response) => ({
  type: Types.SIGNUP_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
  response
});