// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5_FSK688WLQIzPiH5wPr60Gs5JRLTJKU",
  authDomain: "netflixclone-1409.firebaseapp.com",
  projectId: "netflixclone-1409",
  storageBucket: "netflixclone-1409.appspot.com",
  messagingSenderId: "925553052306",
  appId: "1:925553052306:web:b5afbca200763bd44bf44b",
  measurementId: "G-J2BL2759SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)