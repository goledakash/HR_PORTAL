import * as Type from "../actions/ActionTypes";
const initialState = {
    isTaskDtsSubmitted : false,
    error:''
};

const handleTaskDetailsServerResponseSuccess= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isTaskDtsSubmitted : true} );
    return {
        ...newState
    };
}

const handleTaskDetailsServerResponseError= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isTaskDtsSubmitted : false, error: 'Error Occurred : ' + action.error} );
    return {
        ...newState
    };
}


export default(state = initialState, action) => {
    switch(action.type){
        
    case Type.TASK_DETAILS_SAVE_DATABASE :
        return Object.assign({}, state, {isTaskDtsSubmitted : false, error: ' ' });
    case Type.TASK_DETAILS_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS :
        return handleTaskDetailsServerResponseSuccess(state, action);    
    case Type.TASK_DETAILS_SAVE_DATABASE_SERVER_RESPONSE_ERROR :
        return handleTaskDetailsServerResponseError(state, action);
    default:
        return { ...state };
    }
};
