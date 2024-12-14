import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: ${props => props.theme.colors.background};
`;

export const IntroSection = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ContentSection = styled.div`
${'' /* width: 100%;
text-align:center;
margin-top:-1;
background:'images/after-intro-test' */}
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: 1rem;
  
  .italic-text {
    font-style: italic;
    font-weight: 500;
  }
  
  .bold-text {
    font-weight: 700;
  }
`;

export const IntroText = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

export const PhoneContainer = styled.div`
  position: relative;
  width: min(375px, 90vw);
  height: min(700px, 60vh);
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const PhoneScreen = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const NavigationButtons = styled.div`
  position: absolute;
  left: -60px;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
  
  button {
    pointer-events: auto;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem;
  color: #333;
  
 
`;

export const ScreenText = styled(motion.p)`
  text-align: center;
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
  margin: 1rem 0;
  max-width: 600px;
`;

export const GetStartedButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #007AFF;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1rem;
`;