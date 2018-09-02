import * as Types from '../ActionTypes';

export const employeeSaveToFirebaseDatabase = 
    ( empId, firstName,
        lastName,
        email,
        phoneNo,
        placementDate,
        vendorAgreement, 
        projectStartDate,
        urgentSituation, 
        signedOfferLetter,
        workLocationOne,
        workLocationTwo,
        clientName,
        vendorName,
        vendorContact,
        applicationType,
        docsCollectingStartDate,
        appliedDateLCA,
        approvedDateLCA,
        vendorLetterStatus,
        clientLetterStatus,
        employerRelationDocuments,
) => {
    return {
        type: Types.EMPLOYEE_SAVE_DATABASE,
        empId,firstName,
        lastName,
        email,
        phoneNo,
        placementDate,
        vendorAgreement, 
        projectStartDate,
        urgentSituation, 
        signedOfferLetter,
        workLocationOne,
        workLocationTwo,
        clientName,
        vendorName,
        vendorContact,
        applicationType,
        docsCollectingStartDate,
        appliedDateLCA,
        approvedDateLCA,
        vendorLetterStatus,
        clientLetterStatus,
        employerRelationDocuments,
    };
};

export const employeeSaveSuccessCreateAction = (response, UIAction) => ({
    type: Types.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
    response,
    UIAction
  });
  
  export const employeeSaveErrorCreateAction = (response) => ({
    type: Types.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
    response
  });
export const getTaskByEmpId =(empId) =>({
    type: Types.GET_TASK_BY_EMPID,
    empId
});

