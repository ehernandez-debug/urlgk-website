
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx8UDpl64OxeES6aV48Pa2i4joEj_NidI",
  authDomain: "urologik-mainwebsite.firebaseapp.com",
  projectId: "urologik-mainwebsite",
  storageBucket: "urologik-mainwebsite.appspot.com",
  messagingSenderId: "932618280198",
  appId: "1:932618280198:web:efce2396ad579eca85d287",
  measurementId: "G-1NGCXDWW0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
