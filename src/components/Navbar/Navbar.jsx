import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: relative;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #0066ff;
  text-decoration: none;
  
  img {
    max-height: 25px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: #0066ff;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <NavContainer>
      <Logo href="#">
        <img src="/images/logo.png" alt="BackEd Logo" />
      </Logo>
      <NavLinks isOpen={isOpen}>
        <NavLink 
          href="#" 
          className={activeSection === '' ? 'active' : ''}
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          Home
        </NavLink>
        <NavLink 
          href="#how-it-works"
          className={activeSection === 'how-it-works' ? 'active' : ''}
          onClick={(e) => handleLinkClick(e, 'how-it-works')}
        >
          How it Works
        </NavLink>
        <NavLink 
          href="#reviews"
          className={activeSection === 'reviews' ? 'active' : ''}
          onClick={(e) => handleLinkClick(e, 'reviews')}
        >
          Reviews
        </NavLink>
        <NavLink 
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleLinkClick(e, 'about')}
        >
          About
        </NavLink>
      </NavLinks>
      <MenuToggle onClick={() => setIsOpen(!isOpen)}>☰</MenuToggle>
    </NavContainer>
  );
};

export default Navbar;