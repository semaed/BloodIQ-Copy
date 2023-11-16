import React from 'react';  // Importing React for creating the component
import styled from 'styled-components';  // Importing styled-components for custom styling
import logo from '../assets/logo_2.svg'; // Importing the logo image, ensure the path is correct

// Creating a styled image component using styled-components
const StyledLogo = styled.img`
  position: absolute;  // Setting the position of the logo to absolute
  top: 50px;  // Positioning the logo 50 pixels from the top of its parent
  width: 704px;  // Setting the width of the logo to 704 pixels
  height: 160px;  // Setting the height of the logo to 160 pixels
`;

// Functional component for Logo
const Logo = () => <StyledLogo src={logo} alt="Logo" />;  // Rendering the styled image with the logo

export default Logo;  // Exporting Logo for use in other parts of the application
