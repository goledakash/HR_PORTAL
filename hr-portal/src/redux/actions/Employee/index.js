import * as Types from '../ActionTypes';

export const employeeSaveToFirebaseDatabase = 
    (firstName, 
    lastName, 
    email, 
    phoneNo, 
    vendorAgreement, 
    urgentSituation, 
    signedOfferLetter,
    workLocationOne,
    workLocationTwo,
    clientName,
    vendorName,
    vendorContact,
    applicationType,
    vendorLetterStatus,
    clientLetterStatus,
    employerRelationDocuments,
) => {
    return {
        type: Types.EMPLOYEE_SAVE_DATABASE,
        firstName,
        lastName,
        email,
        phoneNo,
        vendorAgreement, 
        urgentSituation, 
        signedOfferLetter,
        workLocationOne,
        workLocationTwo,
        clientName,
        vendorName,
        vendorContact,
        applicationType,
        vendorLetterStatus,
        clientLetterStatus,
        employerRelationDocuments,
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