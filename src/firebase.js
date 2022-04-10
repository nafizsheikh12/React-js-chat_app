// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwW89Pi8xaLQn8jF98MwKHIMyJFamKM3k",
  authDomain: "measerger-c7435.firebaseapp.com",
  projectId: "measerger-c7435",
  storageBucket: "measerger-c7435.appspot.com",
  messagingSenderId: "47119924068",
  appId: "1:47119924068:web:5441b60140e917ad5c1871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase

///var db = app.firestore();
      
export default getFirestore();