import React, { useState, useEffect } from 'react';  // Importing React, useState and useEffect hooks
import { Document, Page } from 'react-pdf';  // Importing Document and Page from react-pdf for PDF rendering
import { useNavigate, useLocation } from 'react-router-dom';  // Importing hooks from react-router-dom for navigation and accessing URL state
import styled from "styled-components";  // Importing styled from styled-components for custom styled components
import '../App.css';  // Importing the main CSS file for global styles
import { auth } from '../api/firebase.config';  // Importing auth from firebase configuration
import { useAuth } from '../context/AuthContext';  // Importing useAuth hook from AuthContext
import Logo from '../components/Logo_4';  // Importing Logo component

// Define the Results functional component
const Results = () => {
  const { user } = useAuth();  // Using useAuth hook to access user details
  const location = useLocation();  // Using useLocation hook to access location state
  const response = location.state.response;  // Extracting response from location state
  const file = location.state.file;  // Extracting file from location state
  const [userName, setUserName] = useState('');  // State for user's first name
  const [userLastName, setUserLastName] = useState('');  // State for user's last name

  const navigate = useNavigate();  // Using useNavigate hook for navigation

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut();  // Signing out from firebase
      navigate('/login');  // Navigating to login page
    } catch (error) {
      console.error('Error al cerrar la sesión', error);  // Logging error in case of a problem
    }
  };

  // useEffect hook to run code when the user object changes
  useEffect(() => {
    if (user && user.displayName) {
      const [firstName, lastName] = user.displayName.split(' ');  // Splitting user's display name into first and last name
      setUserName(firstName || '');  // Setting first name
      setUserLastName(lastName || '');  // Setting last name
      console.log(`Nombre de usuario: ${firstName}, Apellido: ${lastName}`);  // Logging user's name
    } else {
      setUserName('');  // Resetting first name
      setUserLastName('');  // Resetting last name
      console.log('No hay usuario conectado o el usuario no ha establecido un nombre de usuario');  // Logging when there is no user or display name
    }
  }, [user]); 

  return (
    <Container> {/* Styled container for the whole component */}
      <ResponseContainer> {/* Container for the response */}
        <Logo /> {/* Logo component */}
        <Greeting>Hello {user && user.displayName}, Here's your results!</Greeting> {/* Greeting message */}
        <Response>{response}</Response> {/* Displaying response */}
        <DisclaimerContainer> {/* Container for the disclaimer */}
          <b>Disclaimer:</b> We are not healthcare professionals... {/* Disclaimer text */}
        </DisclaimerContainer>
      </ResponseContainer>
      <PDFPreviewContainer> {/* Container for PDF preview */}
        <PDFWrapper> {/* Wrapper for PDF document */}
          <Document file={file}> {/* PDF document component */}
            <Page pageNumber={1} /> {/* First page of the PDF */}
          </Document>
        </PDFWrapper>
      </PDFPreviewContainer>
      <button onClick={handleLogout} style={{
        /* Inline styles for logout button */
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#F05D5D';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#FF3131';
      }}
      >
        Logout
      </button> {/* Logout button */}
    </Container>
  );
};

export default Results;  // Export the Results component

// Styled components for various parts of the Results component
const Container = styled.div`
  /* CSS styles for main container */
`;

const ResponseContainer = styled.div`
  /* CSS styles for response container */
`;

const Response = styled.div`
  /* CSS styles for response text */
`;

const PDFPreviewContainer = styled.div`
  /* CSS styles for PDF preview container */
`;

const PDFWrapper = styled.div`
  /* CSS styles for PDF wrapper */
`;

const Greeting = styled.h1`
  /* CSS styles for greeting text */
`;

const DisclaimerContainer = styled.div`
  /* CSS styles for disclaimer container */
`;

const Logout = styled.button`
  /* CSS styles for logout button */
`;
