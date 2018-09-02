import * as Types from '../ActionTypes';

export const employeeInfoSaveToFirebaseDatabase = 
    (   firstName,
        lastName,
        emailId01,
        emailId02,
        phoneNo,
        address1,
        address2,
        city,
        state,
        zipCode

) => {
    return {
        type: Types.EMPLOYEE_INFO_SAVE_DATABASE,
        firstName,
        lastName,
        emailId01,
        emailId02,
        phoneNo,
        address1,
        address2,
        city,
        state,
        zipCode

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