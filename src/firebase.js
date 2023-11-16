import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWOnPdPuS-fMgLMYeBK9S1EALnYGE_98o",
  authDomain: "bug-blog-3512f.firebaseapp.com",
  projectId: "bug-blog-3512f",
  storageBucket: "bug-blog-3512f.appspot.com",
  messagingSenderId: "283841566484",
  appId: "1:283841566484:web:692f94cd532852f6d35401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);