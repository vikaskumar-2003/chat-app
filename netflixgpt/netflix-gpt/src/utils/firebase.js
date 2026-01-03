// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0LJQlBnDZzCESW0OPxjdi68q-XRfyp-M",
  authDomain: "netflix-gpt-e3e39.firebaseapp.com",
  projectId: "netflix-gpt-e3e39",
  storageBucket: "netflix-gpt-e3e39.firebasestorage.app",
  messagingSenderId: "1085518821546",
  appId: "1:1085518821546:web:78f43a33ae60b715b7b8d3",
  measurementId: "G-4GVHBM8K9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()