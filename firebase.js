import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
var firebaseConfig = {
    apiKey: "AIzaSyBZ6OdPs3QdqRo4cEfXtJECTCneLTlYI7o",
    authDomain: "chapsnat-13511.firebaseapp.com",
    projectId: "chapsnat-13511",
    storageBucket: "chapsnat-13511.appspot.com",
    messagingSenderId: "374443070049",
    appId: "1:374443070049:web:a2bf9a923b64352dfbd020",
    measurementId: "G-7Y16K50HJJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();
export default firestore;