// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-1eac6.firebaseapp.com",
  projectId: "blog-app-1eac6",
  storageBucket: "blog-app-1eac6.appspot.com",
  messagingSenderId: "43024663869",
  appId: "1:43024663869:web:9765dc8299083a40697154",
  measurementId: "G-DD98YCR4YG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
