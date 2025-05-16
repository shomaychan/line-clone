import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB56dKA319qoU5aUUnAs0UrtpmL6SoQayc",
  authDomain: "lineclone-8ce8c.firebaseapp.com",
  projectId: "lineclone-8ce8c",
  storageBucket: "lineclone-8ce8c.firebasestorage.app",
  messagingSenderId: "984664183639",
  appId: "1:984664183639:web:5a0ef39f8130623c1c2412",
  measurementId: "G-BCTTX2HY6F"
});

const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};