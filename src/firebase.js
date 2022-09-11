import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFaF20WGTAE5dKiYf2bNhIq2WuDf8RmcM",
    authDomain: "react-emart-a5392.firebaseapp.com",
    projectId: "react-emart-a5392",
    storageBucket: "react-emart-a5392.appspot.com",
    messagingSenderId: "162447726809",
    appId: "1:162447726809:web:1ac2223bd31cf84a1606c8"
  };

  // Use this to initialize the firebase App

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  
  // Use for db
  const db = firebaseapp.firestore()
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider } 