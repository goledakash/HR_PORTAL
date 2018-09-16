//import * as auth from './auth';
//import * as firebase from './firebase';
/*import {auth, db} from './firebase';
export {
  auth,
  db
};*/

import firebase from 'firebase';

// Initialize Firebase
  const prodConfig = {
    apiKey: "AIzaSyB-NYnugh9H4e47mS4fAkkDGTMglN_8MCY",
    authDomain: "hr-portal-firebase.firebaseapp.com",
    databaseURL: "https://hr-portal-firebase.firebaseio.com",
    projectId: "hr-portal-firebase",
    storageBucket: "hr-portal-firebase.appspot.com",
    messagingSenderId: "115754548607"
  };

  const devConfig = {
    apiKey: "AIzaSyB-NYnugh9H4e47mS4fAkkDGTMglN_8MCY",
    authDomain: "hr-portal-firebase.firebaseapp.com",
    databaseURL: "https://hr-portal-firebase.firebaseio.com",
    projectId: "hr-portal-firebase",
    storageBucket: "hr-portal-firebase.appspot.com",
    messagingSenderId: "115754548607"
  };
/*const devConfig = {
    apiKey: "AIzaSyAzFE2PUqupVMsH_TIMqQoHTq0IjOVS3Xg",
    authDomain: "hrmanager-8f146.firebaseapp.com",
    databaseURL: "https://hrmanager-8f146.firebaseio.com",
    projectId: "hrmanager-8f146",
    storageBucket: "",
    messagingSenderId: "752182474971"
};*/

firebase.initializeApp(devConfig);
export default firebase;
/*
const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const db = firebase.database();

  export {
    auth,
    db
  };*/
