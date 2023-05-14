// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD7d2QPs3tXB0e6TXDQ01OWrMMl5KiAVhg",
  authDomain: "discord-clone-udemy-learn.firebaseapp.com",
  projectId: "discord-clone-udemy-learn",
  storageBucket: "discord-clone-udemy-learn.appspot.com",
  messagingSenderId: "499251198024",
  appId: "1:499251198024:web:69c8cf8002121903ddc07d",
  measurementId: "G-7N8B476070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export {db,auth,provider};