import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FB_API_KEY,
  authDomain: "eshopee-ffef3.firebaseapp.com",
  projectId: "eshopee-ffef3",
  storageBucket: "eshopee-ffef3.appspot.com",
  messagingSenderId: "900246610696",
  appId: "1:900246610696:web:d7ca7bdcf3e6c0659c42bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
