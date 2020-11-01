import firebase from "firebase";
require("dotenv").config()

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "react-todo-db-8b772.firebaseapp.com",
  databaseURL: "https://react-todo-db-8b772.firebaseio.com",
  projectId: "react-todo-db-8b772",
  storageBucket: "react-todo-db-8b772.appspot.com",
  messagingSenderId: "190828689795",
  appId: "1:190828689795:web:e923a30f3ddb77d1315eb6"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;