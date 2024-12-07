import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  text-align: center;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} BackEd. All rights reserved.</p>
      <div>
        <FooterLink href="#privacy">Privacy Policy</FooterLink>
        <FooterLink href="#terms">Terms of Service</FooterLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;