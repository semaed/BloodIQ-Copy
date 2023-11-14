// firebase.config.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "API Key",
  authDomain: "URL",
  projectId: "ID",
  storageBucket: "Bucket",
  messagingSenderId: "ID",
  appId: "ID"
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
