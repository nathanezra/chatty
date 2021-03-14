import firebase from 'firebase';

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-analytics.js"></script>


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCKRXErjQ8bCVZcDxEWXw8TaT5lK2oW5FE",
    authDomain: "chat-c2016.firebaseapp.com",
    projectId: "chat-c2016",
    storageBucket: "chat-c2016.appspot.com",
    messagingSenderId: "442671502952",
    appId: "1:442671502952:web:8ebfbc520a5b0442208ddd",
    measurementId: "G-SC3162P10D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth;
  export const db = firebase.database();

