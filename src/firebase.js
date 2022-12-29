// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnG90XuQtjxBQOKQuHbRdGWAtV7zVR3Vc",
  authDomain: "keep-clone-5f83a.firebaseapp.com",
  projectId: "keep-clone-5f83a",
  storageBucket: "keep-clone-5f83a.appspot.com",
  messagingSenderId: "805513027777",
  appId: "1:805513027777:web:ff11ce00ec937a83b27440"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const storage = getStorage()