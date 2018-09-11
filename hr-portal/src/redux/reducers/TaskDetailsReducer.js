import * as Type from "../actions/ActionTypes";
const initialState = {
    isEmployeeRegitered : false,
    error:''
};

const handleTaskDetailsServerResponseSuccess= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isEmployeeRegitered : true} );
    return {
        ...newState
    };
}

const handleTaskDetailsServerResponseError= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isEmployeeRegitered : false, error: 'Error Occurred : ' + action.error} );
    return {
        ...newState
    };
}


export default(state = initialState, action) => {
    switch(action.type){
        
    case Type.TASK_DETAILS_SAVE_DATABASE :
        return { ...state};
    case Type.TASK_DETAILS_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS :
        return handleTaskDetailsServerResponseSuccess(state, action);    
    case Type.TASK_DETAILS_SAVE_DATABASE_SERVER_RESPONSE_ERROR :
        return handleTaskDetailsServerResponseError(state, action);
    default:
        return { ...state };
    }
};
