
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT
} from "../constants/userConstants";

import { auth } from '../config/firebase';
import { db } from '../config/firebase'


const signin = (email, password) => async (dispatch, {getFirebase, getFirestore}) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    let data = await auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  // const firestore = getFirestore()
  console.log('hey1')
  db.collection('utilisateurs').add({name: name, onLine: false})
  .then((docRef) => {
    dispatch({ type: USER_REGISTER_SUCCESS, payload: {name: name, onLine: false}});
    Cookie.set('userInfo', JSON.stringify({name: name, onLine: false}));
  })
  .catch((error) => {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  });


  // let data = await auth().createUserWithEmailAndPassword(email, password);

}

const logout = () => (dispatch, {getFirebase, getFirestore}) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}
export { signin, register, logout };