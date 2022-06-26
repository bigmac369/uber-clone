// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1UuzbQ7WURalDe9s9FJNWcrzOXekcc5g",
  authDomain: "uber-next-clone-live-64d53.firebaseapp.com",
  projectId: "uber-next-clone-live-64d53",
  storageBucket: "uber-next-clone-live-64d53.appspot.com",
  messagingSenderId: "185187607649",
  appId: "1:185187607649:web:4da383c5d6109186d9f620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
