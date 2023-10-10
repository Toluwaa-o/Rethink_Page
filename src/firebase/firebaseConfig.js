import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoI2LpaZP4xkXmkvqWVppee5cpDyktzBs",
  authDomain: "rethink-page-ec91c.firebaseapp.com",
  projectId: "rethink-page-ec91c",
  storageBucket: "rethink-page-ec91c.appspot.com",
  messagingSenderId: "750678763949",
  appId: "1:750678763949:web:a8418a3bedffdd6f27d924",
  measurementId: "G-9Z5HTBYPJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
