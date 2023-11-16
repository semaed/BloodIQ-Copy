// Importing necessary libraries and components
import Logo from '../components/Logo';  // Importing the Logo component from the components directory
import React from 'react';  // Importing React to use JSX and create the component
import "../App.css"  // Importing the main CSS file for styling
import LoginForm from '../components/Forms/LoginForm';  // Importing the LoginForm component

// Define the Login functional component
function Login() {
  return (
    // React Fragment to return multiple elements
    <>
      <div id="rectangle"></div>  {/* Empty div with an id of "rectangle", can be used for styling purposes */}
      <Logo />  {/* Rendering the Logo component */}
      <LoginForm />  {/* Rendering the LoginForm component */}
    </>
  );
}

export default Login;  // Exporting the Login component for use in other parts of the app
