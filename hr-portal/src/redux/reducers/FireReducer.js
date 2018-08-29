import * as Type from "../actions/ActionTypes";


const initialState = {
    signupSaveList:[],
  }


export default (state = initialState, action) => {
    switch(action.type){
        case Type.SIGNUP_SAVE_DATABASE :
            return { ...state};
        case Type.SIGNUP_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS :
            return { ...state};    
        case Type.SIGNUP_SAVE_DATABASE_SERVER_RESPONSE_ERROR :
            return { ...state};
        default:
            return { ...state };
    }
}