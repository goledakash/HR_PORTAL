import * as Type from "../actions/ActionTypes";


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
  return {
      ...newState
  };
}

const getTaskByEmpId = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, { taskSel : state.employeeData.find(item => +item.empId === +action.empId) });
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