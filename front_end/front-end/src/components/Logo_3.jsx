import React from 'react';  // Importing React for creating the component
import styled from 'styled-components';  // Importing styled-components for custom styling
import logo from '../assets/logo_2.svg';  // Importing the logo image from assets

// Creating a styled image component using styled-components
const StyledLogo = styled.img`
  position: absolute;  // Setting the position of the logo to absolute
  top: 50px;  // Positioning the logo 50 pixels from the top of its parent
  left: 63px;  // Positioning the logo 63 pixels from the left of its parent
  width: 396px;  // Setting the width of the logo to 396 pixels
  height: 90px;  // Setting the height of the logo to 90 pixels
`;

// Functional component for Logo
const Logo = () => <StyledLogo src={logo} alt="Logo" />;  // Rendering the styled image with the logo

export default Logo;  // Exporting Logo for use in other parts of the application
