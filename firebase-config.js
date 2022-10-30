// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import{getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,signOut} from "firebase/auth"
import 'firebase/compat/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEiy28J4Owi0WBhhXdgawY5BIT__i7VOI",
  authDomain: "bonsaiapp-7e92c.firebaseapp.com",
  databaseURL: "https://bonsaiapp-7e92c-default-rtdb.firebaseio.com",
  projectId: "bonsaiapp-7e92c",
  storageBucket: "bonsaiapp-7e92c.appspot.com",
  messagingSenderId: "434865345887",
  appId: "1:434865345887:web:1e7e0531adc72ac29212ea"
};

  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, firebase, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile, signOut };