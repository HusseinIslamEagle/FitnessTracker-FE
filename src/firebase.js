import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCGEJFpt_gSAR0zNkKuJk-ynIH3AIRJmFk",
  authDomain: "belghamdi-fitnesstracker.firebaseapp.com",
  projectId: "belghamdi-fitnesstracker",
  storageBucket: "belghamdi-fitnesstracker.firebasestorage.app",
  messagingSenderId: "415381837360",
  appId: "1:415381837360:web:0f0ea71fc924a6d9a83ff5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

