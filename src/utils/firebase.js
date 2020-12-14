import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC05wCMCtwp9qdD4B6BBcdZfPdlMHutzBk",
    authDomain: "birthday-35bc9.firebaseapp.com",
    databaseURL: "https://birthday-35bc9-default-rtdb.firebaseio.com",
    projectId: "birthday-35bc9",
    storageBucket: "birthday-35bc9.appspot.com",
    messagingSenderId: "1059866825786",
    appId: "1:1059866825786:web:e8d2e7412d5bc4ab8a1103"
  };

export default firebase.initializeApp(firebaseConfig);