import React from 'react';  // Importing React to create a functional component
import styled from 'styled-components';  // Importing styled-components for custom styled elements
import logo from '../assets/logo_2.svg';  // Importing the logo image, ensure the path is correct

// Creating a styled image component for the logo
const StyledLogo = styled.img`
  position: absolute;  // Setting the position to absolute
  top: 50px;  // Positioning from the top of the parent container
  left: 63px;  // Positioning from the left of the parent container
  width: 254px;  // Setting the width of the logo
  height: 85px;  // Setting the height of the logo
`;

// Define Logo as a functional component
const Logo = () => <StyledLogo src={logo} alt="Logo" />;  // Using StyledLogo with the imported logo image

export default Logo;  // Exporting Logo for use in other parts of the application
