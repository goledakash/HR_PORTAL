import * as Types from '../ActionTypes';

export const taskDetailsSaveToFirebaseDatabase = 
    (   taskSelected
) => {
    return {
        type: Types.TASK_DETAILS_SAVE_DATABASE,
        taskSelected
    };
};

export const taskDetailsSaveSuccessCreateAction = (response, UIAction) => ({
    type: Types.TASK_DETAILS_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
    response,
    UIAction
  })
  
  export const taskDetailsSaveErrorCreateAction = (response) => ({
    type: Types.TASK_DETAILS_SAVE_DATABASE_SERVER_RESPONSE_ERROR,
    response
  })