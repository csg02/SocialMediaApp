// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA07aZXnd--H6az6QDB5husUg3lAJXe5Ko",
  authDomain: "licenta-b5777.firebaseapp.com",
  projectId: "licenta-b5777",
  storageBucket: "licenta-b5777.appspot.com",
  messagingSenderId: "876529756855",
  appId: "1:876529756855:web:7aaf8f65c95a0a8e60bb32"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};