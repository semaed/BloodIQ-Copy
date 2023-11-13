import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import LoadingResults from './LoadingResults';
const TestProvider = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUploadFile = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      const response = await axios.post('http://localhost:5001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error al cargar el archivo: ', error);
    }
  };

  const analyzeFile = async () => {
    setIsLoading(true); // Establece isLoading en true al inicio de la función
    try {
      await uploadFile();

      const response = await axios.get('http://localhost:5001/generate-response');
      console.log(response.data);
      setResponse(response.data.response);
  
      setIsLoading(false); // Establece isLoading en false antes de navegar a la página de resultados
      navigate('/Results', { state: { response: response.data.response, file: uploadedFile } });
    } catch (error) {
      console.error('Error al analizar el archivo: ', error);
      setIsLoading(false); // También establece isLoading en false en caso de error
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2E9DDD',
      }}
    >
      <Logo />
      <h1 style={{
        postition: 'absolute',
        top: '',
        left: '451px',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'normal',
        letterSpacing: '2px',
        fontSize: '50px',
        textAlign: 'center',
      }}>Your Hematological 
        <br/>
        Health Advisor!
      </h1>
      <h3 style={{
        postition: 'absolute',
        top: '',
        left: '451px',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'normal',
        letterSpacing: '2px',
        fontSize: '18px',
        textAlign: 'center',
      }}>Interpret your blood tests intelligently and receive
        <br/>
        personalized health recommendations. Upload your blood test
        <br/>
        then click on analyze.
      </h3>
      {isLoading ? (
        <LoadingResults /> 
      ) : (
        <>
          {uploadedFile && (
            <embed
              src={URL.createObjectURL(uploadedFile)}
              type="application/pdf"
              width=""
              height="450px"
              marginbottom="20px"
            />
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
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
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#F05D5D';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#FF3131';
  }}
                
                onClick={() => document.getElementById('fileInput').click()}
              >
                Upload File
              </button>
            </label>
            <label htmlFor="analyzeButton">
              <button
                id="analyzeButton"
                style={{
                  width: '214px',
                  height: '49px',
                  borderRadius: '25px',
                  backgroundColor: '#FF3131',
                  color: '#fff',
                  fontSize: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  transition: 'background-color 0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#F05D5D';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#FF3131';
  }}
                onClick={analyzeFile}
              >
                Analyze
              </button>
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default TestProvider;
