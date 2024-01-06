import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDLke42YzAYrSmg5mYfp4wHTKk5BHHEXKU",
  authDomain: "clone-2024.firebaseapp.com",
  projectId: "clone-2024",
  storageBucket: "clone-2024.appspot.com",
  messagingSenderId: "853825988675",
  appId: "1:853825988675:web:8d60a3918c20b8c5d6ccf6",
  measurementId: "G-XF2KG1RWX1"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
 
export { db };