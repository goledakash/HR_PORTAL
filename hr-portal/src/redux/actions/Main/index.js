import * as Types from '../ActionTypes';



export const getEmployeeListSuccessResponse = (response) => ({
    type:Types.GET_EMPLOYEE_LIST_SUCCESS_RESPONSE,
    response
})
  
export const getEmployeeListFromFirebase = () => ({
    type:Types.GET_EMPLOYEE_LIST
})

export const getEmployeeListErrorResponse = (response) => ({
    type:Types.GET_EMPLOYEE_LIST_ERROR_RESPONSE,
    response
})

