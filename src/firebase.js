// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // jika pakai database

const firebaseConfig = {
  apiKey: "AIzaSyDHh6jMFrqx0q7313NhN8agFMtfr7Jg1Kw",
  authDomain: "pasarlokal-d10ea.firebaseapp.com",
  projectId: "pasarlokal-d10ea",
  storageBucket: "pasarlokal-d10ea.firebasestorage.app",
  messagingSenderId: "1072911929092",
  appId: "1:1072911929092:web:4c09a425643b32050cca51",
  measurementId: "G-85JRX144C2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
