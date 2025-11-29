import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  //apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  //projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const FirebaseApp = initializeApp(firebaseConfig);

//Exportar la instancia de firestore
export const db = getFirestore(FirebaseApp);
