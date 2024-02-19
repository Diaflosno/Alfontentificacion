// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeSvsTqpCriMq-W-9SGapamlGGkAsPdIM",
  authDomain: "alfontentificacion.firebaseapp.com",
  projectId: "alfontentificacion",
  storageBucket: "alfontentificacion.appspot.com",
  messagingSenderId: "245035157153",
  appId: "1:245035157153:web:4c882ad57c811c896052e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)