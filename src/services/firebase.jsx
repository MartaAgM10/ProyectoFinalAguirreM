import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  Firebase configuracion
//const firebaseConfig = {
// apiKey: "AIzaSyCoGUY3L_h2LwBhH6LlkYhBvYptB2dE0-M",
// authDomain: "pablocerrajeroshop.firebaseapp.com",
// projectId: "pablocerrajeroshop",
// storageBucket: "pablocerrajeroshop.firebasestorage.app",
// messagingSenderId: "1001329842948",
// appId: "1:1001329842948:web:8a132f216c3aa71c020e51",
//};
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
// Inicio Firebase
//export const app = initializeApp(firebaseConfig);
export const FirebaseApp = initializeApp(firebaseConfig);

//Exportar la instancia de firestore
export const db = getFirestore(FirebaseApp);
