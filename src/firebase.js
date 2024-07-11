// Your web app's Firebase configuration

import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore
import "firebase/compat/auth"; // Import Auth

const firebaseConfig = {
    apiKey: "AIzaSyCGR0P7ZEnz4sSjSNWuhIREnUguII6yuAY",
    authDomain: "netflix-clone-139eb.firebaseapp.com",
    projectId: "netflix-clone-139eb",
    storageBucket: "netflix-clone-139eb.appspot.com",
    messagingSenderId: "835755118286",
    appId: "1:835755118286:web:4c050be0217f64d9c64a9f"
  };

  //initializes a Firebase app instance 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // real time database
  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export{auth}; //explicit export
  export default db;