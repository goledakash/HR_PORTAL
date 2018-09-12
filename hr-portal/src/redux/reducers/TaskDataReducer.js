import * as Type from "../actions/ActionTypes";

const initialState = {
    isTaskDetailsDataReceived:false,
    taskDetailsData:[],
    error: '',
 //   taskSelected:{}
  }
  
  const handleTaskDetailsListServerResponseSuccess = (state, action) => {
    let newState = {...state};
    newState = Object.assign({}, state, { isTaskDetailsDataReceived: true, taskDetailsData: Object.assign([], Object.values(action.response)) });
    return {...newState};
  }
  
  const handleTaskDetailsServerResponseError = (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, { isTaskDetailsDataReceived: false, taskDetailsData: [], error: 'Error Emp Data Server: ' + action.error});
    return {...newState};
  }
  
//   const getTaskByEmpId = (state, action) => {
//     let newState = {};
//     newState = Object.assign({}, state, { taskSelected : Object.assign( taskObject, state.employeeData.find((item) => {      
//               return item.empDetails.empId.toString() === action.empId.toString()
//           }))
//       });
//     return {...newState};
//   }
  
  export default (state = initialState, action) => {
      switch(action.type){
        case Type.GET_TASK_DETAILS :
             return { ...state};
        // case Type.GET_TASK_BY_EMPID :
        //      return getTaskByEmpId(state, action);
        case Type.GET_TASK_DETAILS_SUCCESS_RESPONSE :
             return handleTaskDetailsListServerResponseSuccess(state, action);
        case Type.GET_TASK_DETAILS_ERROR_RESPONSE :
             return handleTaskDetailsServerResponseError(state, action);
        default :
              return { ...state};
      }
  }