import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration(PERSONAL)
const firebaseConfig = {
    apiKey: "AIzaSyBZ6OdPs3QdqRo4cEfXtJECTCneLTlYI7o",
    authDomain: "chapsnat-13511.firebaseapp.com",
    projectId: "chapsnat-13511",
    storageBucket: "chapsnat-13511.appspot.com",
    messagingSenderId: "374443070049",
    appId: "1:374443070049:web:a2bf9a923b64352dfbd020",
    measurementId: "G-7Y16K50HJJ"
};


// // Your web app's Firebase configuration(Class Wide)
// const firebaseConfig = {
//     apiKey: "AIzaSyC7CQwBSzjC_tlEiMd2Mc8Sh9Fb_Cwc1p8",
//     authDomain: "chapsnat-3f4f7.firebaseapp.com",
//     projectId: "chapsnat-3f4f7",
//     storageBucket: "chapsnat-3f4f7.appspot.com",
//     messagingSenderId: "239440555368",
//     appId: "1:239440555368:web:d7d431a3733e778d273add",
//     measurementId: "G-W4Y70B8JL2",
//   };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;






// import firebase from "@firebase/app";
// import "@firebase/firestore";

// // Your web app's Firebase configuration, which you copy-pasted from Step 6
// var firebaseConfig = {
//     apiKey: "AIzaSyBZ6OdPs3QdqRo4cEfXtJECTCneLTlYI7o",
//     authDomain: "chapsnat-13511.firebaseapp.com",
//     projectId: "chapsnat-13511",
//     storageBucket: "chapsnat-13511.appspot.com",
//     messagingSenderId: "374443070049",
//     appId: "1:374443070049:web:a2bf9a923b64352dfbd020",
//     measurementId: "G-7Y16K50HJJ"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let firestore = firebase.firestore();
// export default firestore;