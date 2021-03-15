import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCKRXErjQ8bCVZcDxEWXw8TaT5lK2oW5FE",
  authDomain: "chat-c2016.firebaseapp.com",
  databaseURL: "https://chat-c2016-default-rtdb.firebaseio.com",
  projectId: "chat-c2016",
  storageBucket: "chat-c2016.appspot.com",
  messagingSenderId: "442671502952",
  appId: "1:442671502952:web:8ebfbc520a5b0442208ddd",
  measurementId: "G-SC3162P10D"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshot : true})

  export const auth = firebase.auth;
  export const db = firebase.firestore();

  // export default firebaseConfig
