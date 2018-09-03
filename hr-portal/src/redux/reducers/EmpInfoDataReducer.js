import * as Type from "../actions/ActionTypes";
const initialState = {
    isEmployeeRegitered : false,
    error:''
};

const handleEmployeeInfoServerResponseSuccess= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isEmployeeRegitered : true} );
    return {
        ...newState
    };
}

const handleEmployeeInfoServerResponseError= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isEmployeeRegitered : false, error: 'Error Occurred : ' + action.error} );
    return {
        ...newState
    };
}


export default(state = initialState, action) => {
    switch(action.type){
        
    case Type.EMPLOYEE_INFO_SAVE_DATABASE :
        return { ...state};
    case Type.EMPLOYEE_INFO_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS :
        return handleEmployeeInfoServerResponseSuccess(state, action);    
    case Type.EMPLOYEE_INFO_SAVE_DATABASE_SERVER_RESPONSE_ERROR :
        return handleEmployeeInfoServerResponseError(state, action);
    default:
        return { ...state };
    }
};
