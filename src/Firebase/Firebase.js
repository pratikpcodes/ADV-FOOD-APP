// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4oM77Eez9p6jd4KlxVKg-eIy1jjfnTgg",
  authDomain: "food--app-9f1e3.firebaseapp.com",
  projectId: "food--app-9f1e3",
  storageBucket: "food--app-9f1e3.appspot.com",
  messagingSenderId: "430733808135",
  appId: "1:430733808135:web:53460d7752b69e260690a2",
  measurementId: "G-0MWQ7GQF32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);