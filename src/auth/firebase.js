// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKXp334MBvG2MJ641WHMbBs8K18MOLdrc",
  authDomain: "awonke-todo.firebaseapp.com",
  projectId: "awonke-todo",
  storageBucket: "awonke-todo.appspot.com",
  messagingSenderId: "474092826049",
  appId: "1:474092826049:web:aae449ab40e4dae039d340",
  measurementId: "G-0W15L2525K"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);