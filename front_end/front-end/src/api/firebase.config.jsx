// Importing necessary Firebase and axios modules
import { initializeApp } from "firebase/app";  // Importing initializeApp from firebase/app to initialize Firebase
import { getAuth } from "firebase/auth";  // Importing getAuth from firebase/auth to handle authentication
import axios from "axios";  // Importing axios for HTTP requests

// Firebase configuration object
const firebaseConfig = {
  apiKey: "API Key",  // API key for Firebase project
  authDomain: "URL",  // Auth domain for Firebase project
  projectId: "ID",  // Project ID for Firebase project
  storageBucket: "Bucket",  // Storage bucket for Firebase project
  messagingSenderId: "ID",  // Messaging sender ID for Firebase project
  appId: "ID"  // App ID for Firebase project
};

// Initializing Firebase with the configuration object
const app = initializeApp(firebaseConfig);  // Initializing Firebase app
const auth = getAuth();  // Getting Firebase authentication instance

// Creating an axios instance with Firebase authorization
const axiosWithFirebase = axios.create({
  baseURL: "https://your-firebase-project.firebaseio.com",  // Base URL for Firebase project
});

// Setting up an observer on the Auth object to get the user's sign-in state
auth.onAuthStateChanged(async (user) => {
  if (user) {  // Checking if user is signed in
    const token = await user.getIdToken();  // Getting Firebase user token
    axiosWithFirebase.defaults.headers.common['Authorization'] = `Bearer ${token}`;  // Setting axios default authorization header
  } else {  // If user is not signed in
    delete axiosWithFirebase.defaults.headers.common['Authorization'];  // Removing the authorization header
  }
});

// Exporting the auth and axiosWithFirebase instances for use in other parts of the application
export { auth, axiosWithFirebase };
