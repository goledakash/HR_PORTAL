import * as Type from "../actions/ActionTypes";

const initialState = {
  email: "",
  password: "",
  userObject: "",
  isUserLoggedIn: false
};


const handleLoginServerResponseSuccess = (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {
      isUserLoggedIn: true,
      userObject: action.response,
      email: action.response.email,
      password: action.response.password
    });
    return {
      ...newState
    };
  };

const  handleLogoutServerResponseSuccess = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, {
    isUserLoggedIn: false,
    userObject: action.response,
  });
  return {
    ...newState
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGIN_USER:
      return { ...state };
    case Type.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
      return handleLoginServerResponseSuccess(state, action);
    case Type.LOGIN_USER_SERVER_RESPONSE_ERROR:
      return { ...state };
    case Type.LOGOUT_USER :
      return {...state};
    case Type.LOGOUT_USER_SERVER_RESPONSE_SUCCESS :
      return handleLogoutServerResponseSuccess(state, action);
    case Type.LOGOUT_USER_SERVER_REPONSE_ERROR :
      return {...state};
    default:
      return { ...state };
  }
};
