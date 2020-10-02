import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYWzHOoTRGxo_HsfR7hxogVzrjt__Tzkw",
    authDomain: "crwn-db-e970e.firebaseapp.com",
    databaseURL: "https://crwn-db-e970e.firebaseio.com",
    projectId: "crwn-db-e970e",
    storageBucket: "crwn-db-e970e.appspot.com",
    messagingSenderId: "457220305745",
    appId: "1:457220305745:web:3968f63b2d7116c77a9970",
    measurementId: "G-V2B3DGTZMS"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
