// main.jsx (o el nombre de tu archivo principal)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiamos la importación aquí
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routers/routes';

// Importa Firebase y sus módulos necesarios con exportaciones por nombre
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Configuración de Firebase (utiliza tus propias credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyCdkrQIjyr12ETbAvM9HsYcCyFqSzHxJiU",
  authDomain: "bloodiq-da1ea.firebaseapp.com",
  projectId: "bloodiq-da1ea",
  storageBucket: "bloodiq-da1ea.appspot.com",
  messagingSenderId: "773607312101",
  appId: "1:773607312101:web:30ae564355d79765b2220c"
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root')); // Cambiamos la creación del nodo raíz aquí

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
