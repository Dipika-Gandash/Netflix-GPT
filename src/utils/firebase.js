// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXznZpELCqjUDdlwuoZ_nwWOcOb1Gi0dE",
  authDomain: "netflix-gpt-cc241.firebaseapp.com",
  projectId: "netflix-gpt-cc241",
  storageBucket: "netflix-gpt-cc241.firebasestorage.app",
  messagingSenderId: "663780618172",
  appId: "1:663780618172:web:08dc6c98194d3aad1ac5b9",
  measurementId: "G-0QJQBFD09B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);