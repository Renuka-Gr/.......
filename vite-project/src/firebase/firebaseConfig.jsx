// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHS_-U7v7HKg2hHQI47TSNhlKpYFJdIyo",
  authDomain: "ecommerce-3a070.firebaseapp.com",
  projectId: "ecommerce-3a070",
  storageBucket: "ecommerce-3a070.appspot.com",
  messagingSenderId: "764342363932",
  appId: "1:764342363932:web:e768f6c1f4286d090cfcd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);

export { fireDB, auth };
export default app;