import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAhgVc8H8LWAujraTp-BTha6VVjAVd9Pr4",
  authDomain: "eshopee-69d43.firebaseapp.com",
  projectId: "eshopee-69d43",
  storageBucket: "eshopee-69d43.appspot.com",
  messagingSenderId: "875504760746",
  appId: "1:875504760746:web:4e6aa41e73b3a196d9ddd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
