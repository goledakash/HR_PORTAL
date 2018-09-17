import * as Types from "../../actions/ActionTypes";

const initialUserObj = {
  "pending": (window.localStorage.userLoginToken !== undefined ? false : true),
  "logged": (window.localStorage.userLoginToken !== undefined ? true : false),
  "isValidToken": (window.localStorage.userLoginToken !== undefined ? true : false),
  "user":{
           "email": "",
           "displayName": "",
           "registered": true,
           "refreshToken": "",
           "expiresIn": "3600",
           "emailVerified": false,
           "validSince": "1522016916",
           "disabled": false,
           "lastLoginAt": "1522383844000",
           "createdAt": "1522016916000"
        }

};

const handleLoginServerResponseSuccess = (state, action) => {
  let newState = {...state};
  if(action.response !== undefined){
    newState = Object.assign({}, state, {"user" : Object.assign({}, state.user, action.response),"logged" :true,"isValidToken":true })
    window.localStorage.userLoginToken = action.response.refreshToken;
  }
  return {...newState};
}
const handleLoginServerResponseError = (state, action) => {
  let newState = {...state};
  return {...newState};
}
const handleLogoutServerResponseSuccess = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, {"user" : Object.assign({},{}),"logged" :false,"isValidToken":false })
  window.localStorageremoveItem("userLoginToken");
  return {...newState};
}
const handleLogoutServerResponseError = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, {"user" : Object.assign({},{}),"logged" :false,"isValidToken":false })
  window.localStorageremoveItem("userLoginToken");
  return {...newState};
}

export default (state = initialUserObj, action) => {
    switch(action.type){
        case Types.LOGIN_USER :
            return {...state};
        case Types.LOGOUT_USER :
                return {...state};
        case Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS :
                return {...state};
        case Types.LOGIN_USER_SERVER_REPONSE_ERROR :
                return handleLoginServerResponseError(state, action);
        case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS :
                return handleLoginServerResponseSuccess(state, action);
        case Types.SERVER_CALL_FAILED :
                return {...state};
        case Types.LOGOUT_USER_SERVER_REPONSE_ERROR :
                return {...state};
        case Types.VALIDATE_TOKEN :
            return { ...state};
        case Types.IS_USER_LOGGED_IN :
            return { ...state};
        default :
            return state;
    }
}
