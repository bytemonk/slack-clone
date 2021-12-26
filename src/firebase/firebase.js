
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBS0ikbj5DSWK75sEN_skKihFs32ImLqPE",
    authDomain: "slack-clone-cfca9.firebaseapp.com",
    projectId: "slack-clone-cfca9",
    storageBucket: "slack-clone-cfca9.appspot.com",
    messagingSenderId: "799071049829",
    appId: "1:799071049829:web:5ec1e1b60fa2caecb14e8c"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
