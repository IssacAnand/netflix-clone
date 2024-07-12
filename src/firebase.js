// Your web app's Firebase configuration

import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore
import "firebase/compat/auth"; // Import Auth
// import dotenv from "dotenv";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  //initializes a Firebase app instance 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // real time database
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  console.log(process.env.REACT_APP_FIREBASE_API_KEY)
  console.log('hello')

  export{auth}; //explicit export
  export default db;