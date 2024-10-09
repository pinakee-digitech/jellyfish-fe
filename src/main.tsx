import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxgwanRb0okPvcWSrFYDk2nkNzpzlR2b8",
  authDomain: "jellyfish-3d2b9.firebaseapp.com",
  projectId: "jellyfish-3d2b9",
  storageBucket: "jellyfish-3d2b9.appspot.com",
  messagingSenderId: "877348233003",
  appId: "1:877348233003:web:20c5d71ed1792addba2f6e",
  measurementId: "G-F4R5YGXW4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
