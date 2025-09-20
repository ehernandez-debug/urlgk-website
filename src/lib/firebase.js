
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

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
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// In dev, permitir token debug solo si VITE_APPCHECK_DEBUG === "true"
if (import.meta.env.VITE_APPCHECK_DEBUG === "true") {
  // @ts-ignore
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_KEY),
  isTokenAutoRefreshEnabled: true,
});

export { db };
