
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLXJ_uPuBDOXC2uL3hImeAP1HmAR247VU",
  authDomain: "e-commerce-ballario.firebaseapp.com",
  projectId: "e-commerce-ballario",
  storageBucket: "e-commerce-ballario.appspot.com",
  messagingSenderId: "588383046909",
  appId: "1:588383046909:web:7327910a47cf8033120294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)