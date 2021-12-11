import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD6LK2ALiiqMOFDN-gWL7s6wFnsD0-4XHc",
    authDomain: "facebook-clone-17f56.firebaseapp.com",
    projectId: "facebook-clone-17f56",
    storageBucket: "facebook-clone-17f56.appspot.com",
    messagingSenderId: "702090471243",
    appId: "1:702090471243:web:a37088591aaa455f822ace",
    measurementId: "G-D3F8B7JJ4R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;