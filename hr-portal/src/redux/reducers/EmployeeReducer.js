import * as Type from "../actions/ActionTypes";

const initialState = {
    firstName: "",
    lastName: "",
}

const handleEmployeeServerResponseSuccess= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {
        firstName: action.UIAction.firstName,
        lastName: action.UIAction.lastName,
    });
    return {
        ...newState
    };
}

export default(state = initialState, action) => {
    switch(action.type){
        
    case Type.EMPLOYEE_SAVE_DATABASE :
        return { ...state};
    case Type.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS :
        return handleEmployeeServerResponseSuccess(state, action);    
    case Type.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_ERROR :
        return { ...state};
    default:
        return { ...state };
    }
};