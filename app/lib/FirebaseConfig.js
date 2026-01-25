// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA-xZBKJm1xaF1Vb3IR4T6h8rOYbdeQMI",
  authDomain: "ck444-f18c4.firebaseapp.com",
  projectId: "ck444-f18c4",
  storageBucket: "ck444-f18c4.firebasestorage.app",
  messagingSenderId: "372390601371",
  appId: "1:372390601371:web:7744f78bb741632a129c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;