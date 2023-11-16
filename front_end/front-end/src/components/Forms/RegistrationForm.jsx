import React, { useState } from 'react';  // Importing React and useState hook from React
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for navigation
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';  // Importing authentication methods from Firebase
import './style.css';  // Importing CSS for styling

// Define RegistrationForm as a functional component
const RegistrationForm = () => {
  const navigate = useNavigate();  // Initializing navigate for programmatic navigation
  const [firstName, setFirstName] = useState('');  // State for storing the first name
  const [lastName, setLastName] = useState('');  // State for storing the last name
  const [email, setEmail] = useState('');  // State for storing the email
  const [password, setPassword] = useState('');  // State for storing the password

  // Function to handle user registration
  const handleRegistration = async () => {
    try {
      const auth = getAuth();  // Getting Firebase auth instance

      // Creating an object with user data
      const userData = {
        email: email,
        password: password,
        displayName: firstName + ' ' + lastName,
      };

      // Registering the user using Firebase authentication
      await createUserWithEmailAndPassword(auth, userData.email, userData.password);

      // Navigates to TestProvider page after successful registration
      navigate('/TestProvider'); 
    } catch (error) {
      console.error('Error registering:', error);  // Logging any registration error
    }
  };

  // JSX for rendering the registration form
  return (
    <div className="form-container">  {/* Container for the form */}
      <div className="form-title">Create Account</div>  {/* Form title */}
      {/* Input fields for first name, last name, email, and password */}
      <input
        type="text"
        placeholder="First Name"
        className="form-input_1"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="form-input_2"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="form-input_3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-input_4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Button to submit the registration form */}
      <button className="form-button" onClick={handleRegistration}>
        Register Now
      </button>
    </div>
  );
};

export default RegistrationForm;  // Exporting RegistrationForm for use in other parts of the application
