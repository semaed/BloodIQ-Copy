import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";
import '../App.css';
import { auth } from '../api/firebase.config';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo_4';
const Results = () => {
  const { user } = useAuth();
  const location = useLocation();
  const response = location.state.response;
  const file = location.state.file;
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login'); 
    } catch (error) {
      console.error('Error al cerrar la sesión', error);
    }
  };

  useEffect(() => {
    if (user && user.displayName) {
      const [firstName, lastName] = user.displayName.split(' ');
      setUserName(firstName || '');
      setUserLastName(lastName || '');
      console.log(`Nombre de usuario: ${firstName}, Apellido: ${lastName}`);
    } else {
      setUserName('');
      setUserLastName('');
      console.log('No hay usuario conectado o el usuario no ha establecido un nombre de usuario');
    }
  }, [user]); 

  return (
    <Container>
      <ResponseContainer>
        <Logo />
      <Greeting>Hello {user && user.displayName}, Here's your results!</Greeting>
        <Response>{response}</Response>
        <DisclaimerContainer>
        <b>Disclaimer:</b>  We are not healthcare professionals. Our advice aims to help users better understand their health and is not a substitute for professional medical guidance. Information provided is for informational purposes only. Always consult a qualified healthcare provider for medical advice. We do not assume liability for any health-related decisions based on our information. In case of a medical emergency, contact your doctor or local emergency services.
          </DisclaimerContainer>
      </ResponseContainer>
      <PDFPreviewContainer>
        <PDFWrapper>
          <Document file={file}>
            <Page pageNumber={1} />
          </Document>
        </PDFWrapper>
      </PDFPreviewContainer>
      <button onClick={handleLogout} style={{
        marginRight: '2rem',
        marginTop: '2rem',
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
      >
        Logout</button>
    </Container>
  );
};


export default Results;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;

const ResponseContainer = styled.div`
  width: 50%;
  background-color: #2E9DDD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  box-sizing: border-box;
`;

const Response = styled.div`
  position: relative;
  font-size: 24px;
  color: #fff;
  width: 577px;
  line-height: 1.5;
  margin: 20px;
  padding: 15x;

`;

const PDFPreviewContainer = styled.div`
  width: 775px;
  height: 825px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  margin-left: 12rem;
  margin-top: 10rem;
`;

const PDFWrapper = styled.div`

`;

const Greeting = styled.h1`
  position: relative;
  color: #fff;
  padding: 20px;
`;

const DisclaimerContainer = styled.div`
  position: relative;
  width: 577px;
  height: 52px;
  color: white;
  font-size: 13px;
  font-weight: normal;
  padding-top: 2rem;

  & b {
    font-weight: bold;
    color: red;
  }
`;

const Logout = styled.button`
`;
