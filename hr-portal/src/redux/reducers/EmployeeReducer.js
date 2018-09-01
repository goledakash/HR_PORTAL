import * as Type from "../actions/ActionTypes";

const initialState = {
    firstName: "",
    lastName: "",
    email: "", 
    phoneNo: "",  
    placementDate: "",       
    vendorAgreement: "", 
    projectStartDate: "",
    urgentSituation: "", 
    signedOfferLetter: "",
    workLocationOne: "",
    workLocationTwo: "",
    clientName: "",
    vendorName: "",
    vendorContact: "",
    applicationType: "",
    docsCollectingStartDate: "",
    appliedDateLCA: "",
    approvedDateLCA: "",
    vendorLetterStatus: "",
    clientLetterStatus: "",
    employerRelationDocuments: "",
}

const handleEmployeeServerResponseSuccess= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {
        firstName: action.UIAction.firstName,
        lastName: action.UIAction.lastName,
        email: action.UIAction.email,
        phoneNo: action.UIAction.phoneNo,
        placementDate: action.UIAction.placementDate,
        vendorAgreement: action.UIAction.vendorAgreement, 
        projectStartDate: action.UIAction.projectStartDate,
        urgentSituation: action.UIAction.urgentSituation, 
        signedOfferLetter: action.UIAction.signedOfferLetter,
        workLocationOne: action.UIAction.workLocationOne,
        workLocationTwo: action.UIAction.workLocationTwo,
        clientName: action.UIAction.clientName,
        vendorName: action.UIAction.vendorName,
        vendorContact: action.UIAction.vendorContact,
        applicationType: action.UIAction.applicationType,
        docsCollectingStartDate: action.UIAction.docsCollectingStartDate,
        appliedDateLCA: action.UIAction.appliedDateLCA,
        approvedDateLCA: action.UIAction.approvedDateLCA,
        vendorLetterStatus: action.UIAction.vendorLetterStatus,
        clientLetterStatus: action.UIAction.clientLetterStatus,
        employerRelationDocuments: action.UIAction.employerRelationDocuments,
    });
    return {
        ...newState
    };
}

export default(state = initialState, action) => {
    switch(action.type){
        
    case Type.EMPLOYEE_SAVE_DATABASE :
        return { ...state};
    case Type.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS :
        return handleEmployeeServerResponseSuccess(state, action);    
    case Type.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_ERROR :
        return { ...state};
    default:
        return { ...state };
    }
};