import React from 'react';  // Importing React for using JSX
import ReactDOM from 'react-dom/client';  // Importing ReactDOM from react-dom/client for rendering
import { BrowserRouter } from 'react-router-dom';  // Importing BrowserRouter for handling routing
import { AuthProvider } from './context/AuthContext';  // Importing AuthProvider for authentication context
import AppRoutes from './routers/routes';  // Importing AppRoutes for routing configuration

// Import Firebase and its necessary modules using named imports
import { initializeApp } from 'firebase/app';  // Importing initializeApp to initialize Firebase
import { getAuth } from 'firebase/auth';  // Importing getAuth for authentication

import { pdfjs } from 'react-pdf';  // Importing pdfjs from react-pdf for PDF handling

// Setting the PDF worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Firebase configuration (use your own credentials)
const firebaseConfig = {
  apiKey: "API Key",
  authDomain: "URL",
  projectId: "ID",
  storageBucket: "Bucket",
  messagingSenderId: "Sender ID",
  appId: "API ID"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);  // Initializing Firebase with the config
const auth = getAuth(firebaseApp);  // Getting the auth instance from Firebase

// Creating the root element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application
root.render(
  <React.StrictMode>  {/* Wrapping the application in StrictMode for catching potential problems */}
    <BrowserRouter>  {/* Wrapping the application in BrowserRouter for routing */}
      <AuthProvider>  {/* Providing the authentication context */}
        <AppRoutes />  {/* Rendering the AppRoutes component */}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
