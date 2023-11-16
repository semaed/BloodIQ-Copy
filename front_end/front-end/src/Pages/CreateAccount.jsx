// Importing the necessary modules and components
import Logo from '../components/Logo';  // Importing the Logo component from the components directory
import React from 'react';  // Importing React to use JSX and create the component
import "../App.css"  // Importing the main CSS file for styling
import RegistrationForm from '../components/Forms/RegistrationForm';  // Importing the RegistrationForm component

// Defining custom styles for the form container
const formContainerStyles = {
  display: 'flex',  // Using flexbox for layout
  justifyContent: 'center',  // Centering content horizontally in the flex container
};

// Define the CreateAccount functional component
function CreateAccount() {
  return (
    <div id="rectangle">  {/* Main container div with an id of "rectangle" */}
      <Logo />  {/* Rendering the Logo component */}
      <div style={formContainerStyles}>  {/* Applying the custom styles to the form container */}
        <RegistrationForm />  {/* Rendering the RegistrationForm component */}
      </div>
    </div>
  );
}

export default CreateAccount;  // Exporting the CreateAccount component for use in other parts of the app
