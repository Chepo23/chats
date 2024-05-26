import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a2511.firebaseapp.com",
  projectId: "reactchat-a2511",
  storageBucket: "reactchat-a2511.appspot.com",
  messagingSenderId: "612000393027",
  appId: "1:612000393027:web:9e8850d158ccbc065c71f6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()