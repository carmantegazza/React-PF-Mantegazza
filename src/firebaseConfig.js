// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWeTqmPPLWB9H2GOP0TPHjUmzXebjLj2Y",
  authDomain: "react-carmantegazza.firebaseapp.com",
  projectId: "react-carmantegazza",
  storageBucket: "react-carmantegazza.appspot.com",
  messagingSenderId: "856895511617",
  appId: "1:856895511617:web:c1c56eb7ac612828e5fac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)