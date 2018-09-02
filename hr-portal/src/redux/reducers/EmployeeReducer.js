import * as Type from "../actions/ActionTypes";
const initialState = {
    isEmployeeRegitered : false,
    error:''
};
/*const initialState = {
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
}*/

const handleEmployeeServerResponseSuccess= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isEmployeeRegitered : true} );
    return {
        ...newState
    };
}

const handleEmployeeServerResponseError= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isEmployeeRegitered : false, error: 'Error Occurred : ' + action.error} );
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
        return handleEmployeeServerResponseError(state, action);
    default:
        return { ...state };
    }
};
