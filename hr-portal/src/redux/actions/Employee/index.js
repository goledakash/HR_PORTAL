import * as Types from '../ActionTypes';

export const employeeSaveToFirebaseDatabase = (firstName, lastName) => {
    return {
        type: Types.EMPLOYEE_SAVE_DATABASE,
        firstName,
        lastName,
    };
};

export const employeeSaveSuccessCreateAction = (response, UIAction) => ({
    type: Types.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
    response,
    UIAction
  })
  
  export const employeeSaveErrorCreateAction = (response) => ({
    type: Types.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
    response
  })