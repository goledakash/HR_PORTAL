import * as Type from "../actions/ActionTypes";

//   
const taskObject = {
  comments:[{
    taskMsg:"",
    empMsg:"",
    businessMsg:"",
    createdAt:"",
    loggedInUser:"",
    taskAssignedTo:"",
    taskToBeCmpDueDate:"",
    taskCmpExpDueDate:"",
  }],
  taskInfo:{
  taskCompleted:"",
  taskPrioirty:"1",
  applicationType:"",
  taskCreatedDate:"", 
  isTaskCreated:"",
  isTaskPending:"",
  isTaskCompleted:"",   
  },
  empStatus:{
    curStatusMsg:"",
    curTargetCmpDate:"",
    nextStepMsg:"",  
    expTarCmpDate:"",
    toCmpDate:"",
    expCmpDate:"",
    toSendEmail:[],
    taskPriority:"",
    isHighPriority:"",
    taskStage:""
  },
  business:{
    step1:{
      taskName:"Employee",
      taskActive:"true",
      actionAssignedTo:"Akash",
    },
    step2:{
      taskName:"Recruiter",
      taskActive:"true",
      actionAssignedTo:"Akash",
      projectStartDate:"",
      vendorAgreement: "yes",
      empSignedOfferLetter:"",
      placementDate:"",
      urgentSituation:"",
      applicationType:"type1",
      docsCollectingStartDate:"",
      employerRelationDocuments: "yes",
      vendorLetterStatus: "approved",
      clientLetterStatus: "waiting",
      empVerifiedWrkLocation:"",
      rectrSentPlacDet:"",
      rectrSentVenAgreeSignedCopy:"",
    },
    step3:{
      taskName:"LCA",
      taskActive:"true",
      actionAssignedTo:"Akash",
      dependencies:"",
      empVerWorkLocation:"",
      tmStEmpVerWorkLocation:"",
      tmEdEmpVerWorkLocation:"",
      rolesRespSubmittedByEmp:true,
      tmStRolesRespSubmittedByEmp:"",
      tmEdRolesRespSubmittedByEmp:"",
      rolesRespVerified:true,
      tmStRolesRespVerified:"",
      tmEdRolesRespVerified:"",
      infoUptdToPortalByBiz:true,
      tmStInfoUptdToPortalByBiz:"",
      tmEdInfoUptdToPortalByBiz:"",
      reviewUnCertLCA:false,
      tmStReviewUnCertLCA:"",
      tmEdReviewUnCertLCA:"",
      lcaFiledForCert:"",
      tmStLcaFiledForCert:"",
      tmEdLcaFiledForCert:"",
      appliedDateLCA: "",
      approvedDateLCA: "",
      expectedApprovalDate:"", 
      taskCompletedTotalTime:"",
      taskStartedTotalTime:"",
      lcaSentToEmployee:true    
    },
    step4:{
      taskName:"H1bDocumentsPrep",
      taskActive:"true",
      actionAssignedTo:"Akash",
      dependencies:"",
      recvdVendorLtrFrmEmp:"",  
      tmStRecvdVendorLtrFrmEmp:"",  
      tmEdRecvdVendorLtrFrmEmp:"",        
      recvdClntLtrFrmEmp:"",
      tmStRecvdClntLtrFrmEmp:"",
      tmEdRecvdClntLtrFrmEmp:"",
      otherPendngDocs:"",
      tmStOtherPendngDocs:"",
      tmEdOtherPendngDocs:"",        
      jobTitleIsCorrect:"",
      empHasDependents:"",
      recvdAllH4DocsFrmEmp:"",
      tmStRecvdAllH4DocsFrmEmp:"",
      tmEdRecvdAllH4DocsFrmEmp:"",
      recvdAllH4DepDocsFrmEmp:"",
      tmStRecvdAllH4DepDocsFrmEmp:"",
      tmEdRecvdAllH4DepDocsFrmEmp:"",  
      recvdAllH1bDocsFrmEmp:"",
      tmStRecvdAllH1bDocsFrmEmp:"",
      tmEdRecvdAllH1bDocsFrmEmp:"",        
    },
    step5:{
      taskName:"H1bDocumentsHRReview",
      taskActive:"true",
      actionAssignedTo:"Akash",
      dependencies:"",
      hrRecvdAllDocsAndReviewdFromEmp:"",
      tmStHrRecvdAllDocsAndReviewdFromEmp:"",
      tmEdHrRecvdAllDocsAndReviewdFromEmp:"",
    },
    step6:{
      taskName:"AttorneyReceivedDocs",
      taskActive:"true",
      actionAssignedTo:"Akash",
      dependencies:"",
      attroneyReceivedAllDocsFromBusiness:"",
      tmStAttroneyReceivedAllDocsFromBusiness:"",
      tmEdAttroneyReceivedAllDocsFromBusiness:"",
    },
    step7:{
      taskName:"AttorneyReviewedDocs",
      taskActive:"true",
      actionAssignedTo:"Akash",
      dependencies:"",
      attroneyReviewedAllDocsFromBusiness:"",
      tmStAttroneyReceivedAllDocsFromBusiness:"",
      tmEdAttroneyReceivedAllDocsFromBusiness:"",
    },
    step8:{
      taskName:"AttorneyFilesPetiton",
      taskActive:"true",
      actionAssignedTo:"Akash",
      dependencies:"",
      attroneyFilesPetiton:"",
      tmStAttroneyFilesPetiton:"",
      tmEdAttroneyFilesPetiton:"",
      attroneyUpdatedFedexNumber:"",
      tmStAttroneyUpdatedFedexNumber:"",
      tmEdAttroneyUpdatedFedexNumber:"",
    },
  }
};

const initialState = {
  isEmpDataReceived:false,
  employeeData:[],
  error: '',
  taskSelected:{}
}

const handleEmployeeListServerResponseSuccess = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, { isEmpDataReceived: true, employeeData: Object.assign([], Object.values(action.response)) });
  return {...newState};
}

const handleEmployeeListServerResponseError = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, { isEmpDataReceived: false, employeeData: [], error: 'Error Emp Data Server: ' + action.error});
  return {...newState};
}

const getTaskByEmpId = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, { taskSelected : Object.assign( taskObject, state.employeeData.find((item) => {      
            return item.empDetails.empId.toString() === action.empId.toString()
        }))
    });
  return {...newState};
}

export default (state = initialState, action) => {
    switch(action.type){
      case Type.GET_EMPLOYEE_LIST :
           return { ...state};
      case Type.GET_TASK_BY_EMPID :
           return getTaskByEmpId(state, action);
      case Type.GET_EMPLOYEE_LIST_SUCCESS_RESPONSE :
           return handleEmployeeListServerResponseSuccess(state, action);
      case Type.GET_EMPLOYEE_LIST_ERROR_RESPONSE :
           return handleEmployeeListServerResponseError(state, action);
      default :
            return { ...state};
    }
}