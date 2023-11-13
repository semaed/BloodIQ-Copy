// Logo.jsx
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo_2.svg';

const StyledLogo = styled.img`
  position: absolute;
  top: 50px;
  left: 63px;
  width: 396px;
  height: 90px;
`;

const Logo = () => <StyledLogo src={logo} alt="Logo" />;

export default Logo;
