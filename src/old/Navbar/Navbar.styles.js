import styled, { css } from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: relative;
`;

export const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #0066ff;
  text-decoration: none;
  margin-left: 10rem;
  img {
    max-height: 25px;
    width: auto;
  }
`;

export const NavLinks = styled.div`
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

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: #0066ff;
  }
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;
