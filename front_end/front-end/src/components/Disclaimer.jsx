// Disclaimer.jsx
import React from 'react';
import styled from 'styled-components';

const StyledDisclaimer = styled.div`
  width: 577px;
  height: 52px;
  color: white;
  font-size: 13px;
  font-weight: normal;

  & b {
    font-weight: bold;
    color: red;
  }
`;

const Disclaimer = () => (
  <StyledDisclaimer>
    <b>Disclaimer:</b>  We are not healthcare professionals. Our advice aims to help users better understand their health and is not a substitute for professional medical guidance. Information provided is for informational purposes only. Always consult a qualified healthcare provider for medical advice. We do not assume liability for any health-related decisions based on our information. In case of a medical emergency, contact your doctor or local emergency services.
  </StyledDisclaimer>
);

export default Disclaimer;
