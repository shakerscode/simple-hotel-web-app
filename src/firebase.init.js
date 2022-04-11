// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzwAVPGo1ztjF710SBY299pVb7vOMSHsI",
  authDomain: "buy-me-websites-system-build.firebaseapp.com",
  projectId: "buy-me-websites-system-build",
  storageBucket: "buy-me-websites-system-build.appspot.com",
  messagingSenderId: "736825092530",
  appId: "1:736825092530:web:4639121803b009eba65cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;