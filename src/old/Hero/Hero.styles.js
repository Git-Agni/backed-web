import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.div`
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  background:  url('/images/hero.png') no-repeat center center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin-left: 10rem;
  
  ${'' /* padding: 2rem; */}
  flex-direction: column;

  h1 {
     font-size: clamp(2rem, 5.5vw, 100px);
    line-height: 1;
    margin: 0 0 2rem 0;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1F2024;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    flex-direction: column;
    gap: 0.5rem;
        
    span {
      display: block;
    }
    
    ${'' /* .line-one {
      font-size: 5.5rem;
    }
    
    .line-two {
      font-size: 5.5rem;
    } */}
  }

  p {
    font-size: clamp(18px, 2vw, 26px);
    color: #666;
    margin-bottom: 2.5rem;
    line-height: 1.2;
    gap:2rem;
    max-width: 450px;
    font-weight: 400;
  }
`;

export const GetNotified = styled.div`
  font-size: 24px;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 29.5px;
`;

// EmailForm Styled Component
export const EmailForm = styled.form`
  display: flex;
  background-color: #fff;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 43px;
  width: clamp(280px, 80%, 480px); /* Responsive width */
  align-items: center;
  padding: 10px,0;

  @media (max-width: 768px) {
    height: 38px; /* Adjust height for tablets */
  }

  @media (max-width: 480px) {
    border-radius: 30px; /* Smaller border radius for mobile */
    height: 35px; /* Smaller height for mobile */
    width: 90%; /* Makes form fill more of the screen width */
  }
`;

// Input Styled Component
export const Input = styled.input`
  flex-grow: 1; /* Allows the input to take up remaining space */
  border: none;
  padding: 0 15px;
  height: 100%;
  font-size: 16px;
  border-radius: 50px 0 0 50px;
  outline: none;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Adjust font size for mobile */
    padding: 0 10px;
  }
`;

// SubmitButton Styled Component
export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
   flex-grow: 1;
  border: none;
  ${'' /* border-radius: 0 50px 50px 0; */}
  padding: 0 20px;
  height: 100%;
  
  cursor: pointer;
  font-size: 16px;

  /* Scale effects for hover and tap */
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for tablets */
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Adjust font size for mobile */
    padding: 0 10px;
  }



  &:hover {
    background-color: #0052cc;
  }
`;

export const Notifications = styled(motion.div)`
  display: none;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
  }

  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;

// Media Queries
const media = {
  mobile: '@media (max-width: 515px)',
};

// Add mobile responsiveness
export const ResponsiveStyles = css`
  ${media.mobile} {
    .hero-text h1 {
      font-size: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 60px;
      justify-content: center;
    }

    .line-one,
    .line-two {
      display: block;
    }

    .line-one {
      margin-bottom: 0;
    }

    .hero-content {
      padding-top: 500px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: calc(100vh - 80px);
    }

    .email-form {
      width: 100%;
      max-width: 100%;
    }
  }
`;
