
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfTaGFTRNYU4-_LepmtIrZTkoSS5-qqwQ",
  authDomain: "react-netflix-clone-5ecb6.firebaseapp.com",
  projectId: "react-netflix-clone-5ecb6",
  storageBucket: "react-netflix-clone-5ecb6.appspot.com",
  messagingSenderId: "907281214907",
  appId: "1:907281214907:web:cb048152f0130b5ee2a89e",
  measurementId: "G-FG4FG589KV"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)