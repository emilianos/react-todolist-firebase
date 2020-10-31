import firebase from "firebase";

const config = {
  apiKey: "your api key",
  authDomain: "your-domain.firebaseapp.com",
  databaseURL: "https://your-domain.firebaseio.com",
  projectId: "your-domain",
  storageBucket: "your-domain.appspot.com",
  messagingSenderId: "00000000",
  appId: "000000000000000000"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
