import React, { useState } from 'react';  // Importing React and useState hook
import axios from 'axios';  // Importing axios for making HTTP requests
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook for programmatic navigation
import Logo from '../components/Logo';  // Importing Logo component
import LoadingResults from './LoadingResults';  // Importing LoadingResults component

// Define the TestProvider functional component
const TestProvider = () => {
  const [uploadedFile, setUploadedFile] = useState(null);  // State to store the uploaded file
  const [response, setResponse] = useState("");  // State to store the response from the server
  const [isLoading, setIsLoading] = useState(false);  // State to track loading status
  const navigate = useNavigate();  // Using useNavigate for navigation

  // Function to handle file upload event
  const handleUploadFile = (event) => {
    const file = event.target.files[0];  // Getting the uploaded file
    setUploadedFile(file);  // Setting the uploaded file state
  };

  // Function to upload the file to the server
  const uploadFile = async () => {
    try {
      const formData = new FormData();  // Creating new FormData object
      formData.append('file', uploadedFile);  // Appending the file to FormData

      // Sending POST request to upload the file
      const response = await axios.post('http://localhost:5001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);  // Logging the response
    } catch (error) {
      console.error('Error al cargar el archivo: ', error);  // Logging error if upload fails
    }
  };

  // Function to analyze the uploaded file
  const analyzeFile = async () => {
    setIsLoading(true);  // Setting loading status to true
    try {
      await uploadFile();  // Uploading the file

      // Sending GET request to get the analysis result
      const response = await axios.get('http://localhost:5001/generate-response');
      console.log(response.data);  // Logging the response
      setResponse(response.data.response);  // Setting the response state
  
      // Navigating to the Results page with response and file data
      setIsLoading(false);  // Setting loading status to false
      navigate('/Results', { state: { response: response.data.response, file: uploadedFile } });
    } catch (error) {
      console.error('Error al analizar el archivo: ', error);  // Logging error if analysis fails
      setIsLoading(false);  // Setting loading status to false in case of error
    }
  };

  return (
    <div
      style={{
        // Inline styling for the main container
      }}
    >
      <Logo />  {/* Rendering the Logo component */}
      {/* Heading and subheading with inline styling */}
      <h1 style={{ /* Inline styles for the heading */ }}>Your Hematological Health Advisor!</h1>
      <h3 style={{ /* Inline styles for the subheading */ }}>Interpret your blood tests intelligently...</h3>
      
      {/* Conditional rendering based on isLoading state */}
      {isLoading ? (
        <LoadingResults />  // Rendering the LoadingResults component if loading
      ) : (
        // Rendering the file upload and analyze interface if not loading
        <>
          {/* Rendering an embedded PDF if file is uploaded */}
          {uploadedFile && (
            <embed
              src={URL.createObjectURL(uploadedFile)}
              type="application/pdf"
              style={{ /* Inline styles for the embedded PDF */ }}
            />
          )}
          <div
            style={{
              // Inline styling for file upload and analyze buttons container
            }}
          >
            {/* File input for uploading files */}
            <input
              type="file"
              accept=".jpg, .pdf"
              style={{ display: 'none' }}
              onChange={handleUploadFile}
              id="fileInput"
            />
            {/* Label and button for file upload */}
            <label htmlFor="fileInput">
              <button style={{ /* Inline styles for the upload button */ }}
                onClick={() => document.getElementById('fileInput').click()}
              >
                Upload File
              </button>
            </label>
            {/* Button for analyzing the file */}
            <label htmlFor="analyzeButton">
              <button
                id="analyzeButton"
                style={{ /* Inline styles for the analyze button */ }}
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

export default TestProvider;  // Exporting the TestProvider component
