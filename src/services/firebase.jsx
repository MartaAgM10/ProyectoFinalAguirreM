// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoGUY3L_h2LwBhH6LlkYhBvYptB2dE0-M",
  authDomain: "pablocerrajeroshop.firebaseapp.com",
  projectId: "pablocerrajeroshop",
  storageBucket: "pablocerrajeroshop.firebasestorage.app",
  messagingSenderId: "1001329842948",
  appId: "1:1001329842948:web:8a132f216c3aa71c020e51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar la instancia de firestore
export const db = getFirestore(app);
