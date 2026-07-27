import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUnnbrK9z8DZthagkPnZnNLKxpobKdljA",
  authDomain: "konventiv-coming-soon.firebaseapp.com",
  projectId: "konventiv-coming-soon",
  storageBucket: "konventiv-coming-soon.firebasestorage.app",
  messagingSenderId: "614163195708",
  appId: "1:614163195708:web:b8df579d2a8a83743b2039",
  measurementId: "G-QZE54Z95BV",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
