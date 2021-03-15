
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT
} from "../constants/userConstants";

import { auth } from '../config/firebase';


const signin = (email, password) => async (dispatch) => {


  dispatch({ type: USER_SIGNIN_REQUEST });
  auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    let user = userCredential.user;
    console.log(user.displayName)
    Cookie.set('userInfo', JSON.stringify({name: user.displayName, onLine: false}));
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: {name: user.displayName, email: email, password: password, onLine: false}});
    
  }).catch((error) => {
    console.log(error)
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  });
  // try {
  //   await auth().signInWithEmailAndPassword(email, password);
  //   dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  //   Cookie.set('userInfo', JSON.stringify(data));
  // } catch (error) {
  //   dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  // }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  auth().createUserWithEmailAndPassword(email, password) 
    .then((userCredential) => {
      let user = userCredential.user;
      user.updateProfile({
        displayName: name,
      })
        dispatch({ type: USER_REGISTER_SUCCESS, payload: {name: name, email: email, password: password, onLine: false}});
        Cookie.set('userInfo', JSON.stringify({name: name, onLine: false}));
    }).catch((error) => {
      dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    });

    // db.collection('utilisateurs').add({name: name, onLine: false})
    // .then((docRef) => {
    //   dispatch({ type: USER_REGISTER_SUCCESS, payload: {name: name, onLine: false}});
    //   Cookie.set('userInfo', JSON.stringify({name: name, onLine: false}));
    // })
    // .catch((error) => {
    //   dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    // });
  
  }
  


const logout = () => (dispatch) => {

  auth().signOut()
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}
export { signin, register, logout };