// CreateAccount.jsx
import Logo from '../components/Logo';
import React from 'react';
import "../App.css"
import RegistrationForm from '../components/Forms/RegistrationForm'; 

const formContainerStyles = {
  display: 'flex',
  justifyContent: 'center', 
};

function CreateAccount() {
  return (
    <div id="rectangle">
      <Logo />
      <div style={formContainerStyles}>
        <RegistrationForm />
      </div>

    </div>
  );
}

export default CreateAccount;
