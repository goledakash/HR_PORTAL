import { put, call } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";

import firebase from '../../firebase';
import {signupSaveSuccessCreateAction, signupSaveErrorCreateAction} from '../actions/Auth';
import {employeeSaveSuccessCreateAction, employeeSaveErrorCreateAction} from '../actions/Employee';

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

const insertEmployeeRegistrationData= (firstName, lastName) => {
    const newEmployeeRef = database.ref('employee').push();
    return newEmployeeRef.set({
        firstName: firstName,
        lastName: lastName,
    });

}

// To Save Employee Registration Information
export function*  storeEmployeeRegistrationData(action) {
    try{
        const response = yield call(insertEmployeeRegistrationData, action.firstName, action.lastName);
        console.log(response);
        yield put(employeeSaveSuccessCreateAction(response, action));
    } catch (error){
        yield put (employeeSaveErrorCreateAction(error));
    }
}