// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQV0-1woJWNgkVC1NyIOCMA_CjJFQdJ_U",
  authDomain: "car-doctor-a3e65.firebaseapp.com",
  projectId: "car-doctor-a3e65",
  storageBucket: "car-doctor-a3e65.appspot.com",
  messagingSenderId: "855445739905",
  appId: "1:855445739905:web:affdc36362a0780bb33080",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
