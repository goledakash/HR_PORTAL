import { put, call } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";

import firebase from '../../firebase';
import {signupSaveSuccessCreateAction, signupSaveErrorCreateAction} from '../actions/Auth';

const database = firebase.database();

function insertSignupData(firstName, lastName, email, password, userType) {
    const newItemRef = database.ref('signup').push();
    return newItemRef.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        userType: userType,
    });
}

export function* storeUserSignupData(action) {
    try {
        const response = yield call(insertSignupData, action.firstName, action.lastName, action.email, action.password, action.userType);
        yield put(signupSaveSuccessCreateAction(response));
    } catch (error) {
        // do something with the error, such as dispatching an error action with yield put
        yield put(signupSaveErrorCreateAction(error));
    }
}