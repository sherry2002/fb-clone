import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgLys1wSEpe0egEkzn5PiJD0RH8TFTkHc",
    authDomain: "fb-clone-a0320.firebaseapp.com",
    databaseURL: "https://fb-clone-a0320.firebaseio.com",
    projectId: "fb-clone-a0320",
    storageBucket: "fb-clone-a0320.appspot.com",
    messagingSenderId: "631631368833",
    appId: "1:631631368833:web:589f886588c84823bab380",
    measurementId: "G-SFX2MD4KH3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;