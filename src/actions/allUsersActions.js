import {
    USERS_READ_REQUEST, USERS_READ_SUCCESS,
    USERS_READ_FAIL
  } from "../constants/allUsersConstants";
  
import { auth } from '../config/firebase';

const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://chat-c2016.firebaseio.com",
  });

const getAllUsers = () => async (dispatch) => {

    
    let userNames = []
    dispatch({ type: USERS_READ_REQUEST})

    admin.auth()
    .listUsers(1000, 0)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log('user', userRecord.toJSON());
      });
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });

}

export { getAllUsers };