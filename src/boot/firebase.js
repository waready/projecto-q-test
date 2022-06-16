// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBIwQ21Qahygfkz7xsuwCDrOYTEIWt5CBU",
//   authDomain: "tesisusers.firebaseapp.com",
//   projectId: "tesisusers",
//   storageBucket: "tesisusers.appspot.com",
//   messagingSenderId: "514906113182",
//   appId: "1:514906113182:web:c680da49b13709aeac278f"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import * as firebase from "firebase/app";

// import "firebase/auth";
// import "firebase/database";

// var firebaseConfig = {
//     apiKey: "AIzaSyBIwQ21Qahygfkz7xsuwCDrOYTEIWt5CBU",
//     authDomain: "tesisusers.firebaseapp.com",
//     projectId: "tesisusers",
//     storageBucket: "tesisusers.appspot.com",
//     messagingSenderId: "514906113182",
//     appId: "1:514906113182:web:c680da49b13709aeac278f"
//   };

// let firebaseApp  = firebase.initializeApp(firebaseConfig);
// let firebaseAuth = firebaseApp.auth();
// let firebaseDb   = firebaseApp.database();

//  export default {firebaseAuth,firebaseDb}

 import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBIwQ21Qahygfkz7xsuwCDrOYTEIWt5CBU",
    authDomain: "tesisusers.firebaseapp.com",
    projectId: "tesisusers",
    storageBucket: "tesisusers.appspot.com",
    messagingSenderId: "514906113182",
    appId: "1:514906113182:web:c680da49b13709aeac278f"
  };
 
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 
//  const firebaseDb = firebaseApp.database();
//  const firebaseAuth =firebaseApp.auth();
 export default firebaseApp;