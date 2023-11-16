import React from 'react';  // Importing React to create functional component
import styled from 'styled-components';  // Importing styled-components for custom styled elements

// Creating a styled div component with specific styles
const StyledDisclaimer = styled.div`
  width: 577px;  // Setting the width of the disclaimer
  height: 52px;  // Setting the height of the disclaimer
  color: white;  // Setting the text color to white
  font-size: 13px;  // Setting the font size
  font-weight: normal;  // Setting the font weight to normal

  & b {  // Applying styles to bold text within the component
    font-weight: bold;  // Making the text bold
    color: red;  // Setting the color of bold text to red
  }
`;

// Define Disclaimer as a functional component
const Disclaimer = () => (
  <StyledDisclaimer>  {/* Using the StyledDisclaimer component */}
    <b>Disclaimer:</b>  {/* Bold text for "Disclaimer:" */}
    We are not healthcare professionals. Our advice aims to help users better understand their health and is not a substitute for professional medical guidance. Information provided is for informational purposes only. Always consult a qualified healthcare provider for medical advice. We do not assume liability for any health-related decisions based on our information. In case of a medical emergency, contact your doctor or local emergency services.
  </StyledDisclaimer>  // Disclaimer text
);

export default Disclaimer;  // Exporting Disclaimer for use in other parts of the application
