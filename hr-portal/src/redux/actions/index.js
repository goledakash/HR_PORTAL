import * as Type from "./ActionTypes";

export const loginUser = (email, password) => {
  return {
    type: Type.LOGIN_USER,
    email,
    password
  };
};

export const signupUser = (firstName, lastName, email, password, userType) => {
  return {
    type: Type.SIGNUP_USER,
    firstName,
    lastName,
    email,
    password,
    userType
  };
};

export const logoutUser = (userId) => {
  return {
    type: Type.LOGOUT_USER,
    userId
  };
};