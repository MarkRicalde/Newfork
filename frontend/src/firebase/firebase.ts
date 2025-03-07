import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALaix1X0xNumBENlHhhAHWS1vfBNXe7u8",
    authDomain: "newfork-99336.firebaseapp.com",
    projectId: "newfork-99336",
    storageBucket: "newfork-99336.firebasestorage.app",
    messagingSenderId: "850502279009",
    appId: "1:850502279009:web:fb28b9f90ba6b514a52f20",
    measurementId: "G-0X0PDH089L"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Authentication functions
const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
};

export { auth, signInWithGoogle, logout };
