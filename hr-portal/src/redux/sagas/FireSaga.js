import { put, call, take } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";

import firebase from '../../firebase';
import { eventChannel } from 'redux-saga';
import {signupSaveSuccessCreateAction, signupSaveErrorCreateAction} from '../actions/Auth';
import {employeeSaveSuccessCreateAction, employeeSaveErrorCreateAction} from '../actions/Employee';
import {employeeInfoSaveSuccessCreateAction, employeeInfoSaveErrorCreateAction} from '../actions/CreateTask';
import {getEmployeeListSuccessResponse} from '../actions/Main';

const database = firebase.database();

const insertSignupData = (firstName, lastName, email, password, userType) => {
    const newSignupRef = database.ref('signup').push();
    return newSignupRef.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        userType: userType,
    });
}

// To Save Signup Information
export function* storeUserSignupData(action) {
    try {
        const response = yield call(insertSignupData, action.firstName, action.lastName, action.email, action.password, action.userType);
        console.log(response);
        yield put(signupSaveSuccessCreateAction(response));
    } catch (error) {
        // do something with the error, such as dispatching an error action with yield put
        yield put(signupSaveErrorCreateAction(error));
    }
}

const insertEmployeeRegistrationData = 
(
    firstName,
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
    const newEmployeeRef = database.ref('employee').push();
    return newEmployeeRef.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
        placementDate: placementDate,
        vendorAgreement: vendorAgreement, 
        projectStartDate: projectStartDate,
        urgentSituation: urgentSituation, 
        signedOfferLetter: signedOfferLetter,
        workLocationOne: workLocationOne,
        workLocationTwo: workLocationTwo,
        clientName: clientName,
        vendorName: vendorName,
        vendorContact: vendorContact,
        applicationType: applicationType,
        docsCollectingStartDate: docsCollectingStartDate,
        appliedDateLCA: appliedDateLCA,
        approvedDateLCA: approvedDateLCA,
        vendorLetterStatus: vendorLetterStatus,
        clientLetterStatus: clientLetterStatus,
        employerRelationDocuments: employerRelationDocuments,
    });

}

// To Save Employee Registration Information
export function*  storeEmployeeRegistrationData(action) {
    try{
        const response = yield call(
            insertEmployeeRegistrationData, 
            action.firstName, 
            action.lastName, 
            action.email, 
            action.phoneNo,
            action.placementDate,    
            action.vendorAgreement,
            action.projectStartDate, 
            action.urgentSituation, 
            action.signedOfferLetter,
            action.workLocationOne,
            action.workLocationTwo,
            action.clientName,
            action.vendorName,
            action.vendorContact,
            action.applicationType,
            action.docsCollectingStartDate,
            action.appliedDateLCA,
            action.approvedDateLCA,
            action.vendorLetterStatus,
            action.clientLetterStatus,
            action.employerRelationDocuments,);
        console.log(response);
        yield put(employeeSaveSuccessCreateAction(response, action));
    } catch (error){
        yield put (employeeSaveErrorCreateAction(error));
    }
}




function createEventChannelToGetData(){
    const listener = eventChannel(
        emit => {
            database.ref('employee')
            .on('value', data => emit(data.val()));
                return () => database.ref('employee').off(listener);
        }
    );
    return listener;
  }
  
  // To retrieve data from /employee location in firebase and display in the tabs in Main component
export  function* getEmployeeList(){
    const getDataChannel = createEventChannelToGetData();
    while(true) {
        const employeeList = yield take(getDataChannel);
        yield put(getEmployeeListSuccessResponse(employeeList));
    }
}




const insertEmployeeInfoRegistrationData = 
(empDetails) => {
    const newEmployeeRef = database.ref('employee').push();
    return newEmployeeRef.set({
        empDetails: empDetails,
    });
}

// To Save Employee Registration Information
export function*  storeEmployeeInfoRegistrationData(action) {
    try{
        const response = yield call(
            insertEmployeeInfoRegistrationData, 
            action.empDetails,);
        console.log(response);
        yield put(employeeInfoSaveSuccessCreateAction(response, action));
    } catch (error){
        yield put (employeeInfoSaveErrorCreateAction(error));
    }
}