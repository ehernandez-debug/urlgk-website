
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Configuración de Firebase con valores por defecto para desarrollo
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'mock-api-key-development',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'urologik-dev.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'urologik-dev',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'urologik-dev.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789012',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789012:web:mock',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-MOCK',
};

// Advertir si se están usando valores mock
if (!import.meta.env.VITE_FIREBASE_API_KEY) {
  console.warn(
    "⚠️ Using mock Firebase configuration. Set VITE_FIREBASE_* variables in .env.local for production. See CONFIGURACION_FIREBASE.md for details."
  );
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics (only in browser and if supported)
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log('✅ Google Analytics initialized successfully');
    }
  }).catch((error) => {
    console.warn('⚠️ Analytics not supported:', error);
  });
}

// In dev, permitir token debug solo si VITE_APPCHECK_DEBUG === "true"
if (import.meta.env.VITE_APPCHECK_DEBUG === "true") {
  // @ts-ignore
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(
    import.meta.env.VITE_RECAPTCHA_V3_KEY || ""
  ),
  isTokenAutoRefreshEnabled: true,
});

export { db, analytics };
