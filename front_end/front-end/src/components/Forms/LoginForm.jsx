import React, { useState } from 'react';  // Importing React and the useState hook
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for navigation
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Importing Firebase authentication functions
import './style.css';  // Importing CSS styles

// Define LoginForm as a functional component
const LoginForm = () => {
  const navigate = useNavigate();  // Initializing navigate for programmatic navigation
  const [email, setEmail] = useState('');  // State for storing the email input
  const [password, setPassword] = useState('');  // State for storing the password input

  // Function to handle the login process
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the form from submitting traditionally

    try {
      const auth = getAuth();  // Getting the Firebase auth instance

      // Using Firebase to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Navigates to TestProvider page upon successful login
      navigate('/TestProvider');
    } catch (error) {
      console.error('Error logging in:', error);  // Logs any login error
    }
  };

  // JSX for rendering the login form
  return (
    <div className="form-container">  {/* Container for the form */}
      <div className="form-title">Login</div>  {/* Form title */}
      <form onSubmit={handleLogin}>  {/* Form element with onSubmit handler */}
        {/* Email input field */}
        <input
          type="text"
          placeholder="Email"
          className="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password input field */}
        <input
          type="password"
          placeholder="Password"
          className="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Submit button for the form */}
        <button type="submit" className="form-button">Login</button>
      </form>
      {/* Link to navigate to the SignUp page */}
      <div className="signup-link">
        You don't have an account?{' '}
        <span onClick={() => navigate('/CreateAccount')} className="signup-link-text">
          SignUp
        </span>
      </div>
    </div>
  );
};

export default LoginForm;  // Export LoginForm for use in other parts of the application
