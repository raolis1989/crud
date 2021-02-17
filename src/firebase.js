import firebase from 'firebase/app';
import  'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7RLryj4qHteK5cCscOu8HPpEnFu3DLaQ",
    authDomain: "crud-8026d.firebaseapp.com",
    projectId: "crud-8026d",
    storageBucket: "crud-8026d.appspot.com",
    messagingSenderId: "231450982756",
    appId: "1:231450982756:web:b29384d37c7a0feaf62271"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);