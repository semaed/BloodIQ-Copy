// firebase.config.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyCdkrQIjyr12ETbAvM9HsYcCyFqSzHxJiU",
  authDomain: "bloodiq-da1ea.firebaseapp.com",
  projectId: "bloodiq-da1ea",
  storageBucket: "bloodiq-da1ea.appspot.com",
  messagingSenderId: "773607312101",
  appId: "1:773607312101:web:30ae564355d79765b2220c"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Configura Axios con el token de autenticación de Firebase
const axiosWithFirebase = axios.create({
  baseURL: "https://your-firebase-project.firebaseio.com", // Ajusta la URL según tu proyecto
});

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const token = await user.getIdToken();
    axiosWithFirebase.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosWithFirebase.defaults.headers.common['Authorization'];
  }
});

export { auth, axiosWithFirebase };
