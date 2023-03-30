// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v1-11c8a.firebaseapp.com",
  projectId: "twitter-v1-11c8a",
  storageBucket: "twitter-v1-11c8a.appspot.com",
  messagingSenderId: "631984165325",
  appId: "1:631984165325:web:c77757c4d08cecfa18f484"
};

// Initialize Firebase
//if there's no app 
const app = !getApps().length ? initializeApp(firebaseConfig): getApp()
const db = getFirestore()
const storage = getStorage()
 export {app, db, storage}
