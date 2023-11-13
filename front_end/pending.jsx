import React, { useRef, useState } from 'react';
import axios from 'axios';

const TestProvider = () => {
  const videoRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleTakePicture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing the camera: ', error);
    }
  };

  const handleUploadFile = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error al cargar el archivo: ', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#2E9DDD', backgroundSize: 'cover', backgroundImage: 'url(/backround_2.png)', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button
          style={{
            width: '214px',
            height: '49px',
            borderRadius: '25px',
            backgroundColor: '#FF3131',
            color: '#fff',
            fontSize: '24px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onClick={handleTakePicture}
        >
          Take a Picture
        </button>
        <input
          type="file"
          accept=".jpg, .pdf"
          style={{ display: 'none' }}
          onChange={handleUploadFile}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <button
            style={{
              width: '214px',
              height: '49px',
              borderRadius: '25px',
              backgroundColor: '#FF3131',
              color: '#fff',
              fontSize: '24px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            Upload File
          </button>
        </label>
      </div>
      {uploadedFile && (
        <div>
          <p>File uploaded: {uploadedFile.name}</p>
          <button onClick={uploadFile}>Subir Archivo</button>
        </div>
      )}
      <video ref={videoRef} autoPlay style={{ display: 'none' }} />
    </div>
  );
};

export default TestProvider;









import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdkrQIjyr12ETbAvM9HsYcCyFqSzHxJiU",
  authDomain: "bloodiq-da1ea.firebaseapp.com",
  projectId: "bloodiq-da1ea",
  storageBucket: "bloodiq-da1ea.appspot.com",
  messagingSenderId: "773607312101",
  appId: "1:773607312101:web:30ae564355d79765b2220c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
