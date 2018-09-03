import * as Types from '../ActionTypes';

export const employeeInfoSaveToFirebaseDatabase = 
    (   empDetails
) => {
    return {
        type: Types.EMPLOYEE_INFO_SAVE_DATABASE,
        empDetails
    };
};

export const employeeInfoSaveSuccessCreateAction = (response, UIAction) => ({
    type: Types.EMPLOYEE_INFO_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
    response,
    UIAction
  })
  
  export const employeeInfoSaveErrorCreateAction = (response) => ({
    type: Types.EMPLOYEE_INFO_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
    response
  })