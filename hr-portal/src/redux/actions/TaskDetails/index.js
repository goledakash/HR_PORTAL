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

  
  export const getTaskDetailsSuccessResponse = (response) => ({
      type:Types.GET_TASK_DETAILS_SUCCESS_RESPONSE,
      response
  })
    
  export const getTaskDetailsFromFirebase = () => ({
      type:Types.GET_TASK_DETAILS
  })
  
  export const getTaskDetailsErrorResponse = (response) => ({
      type:Types.GET_TASK_DETAILS_ERROR_RESPONSE,
      response
  })
  