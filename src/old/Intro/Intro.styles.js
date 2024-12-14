import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IntroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
  height:120vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IntroMedia = styled.div`
  position: relative;
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const IntroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 24px;
  object-fit: cover;
`;

export const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
export const VideoPopup = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  
  video {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
`;

export const IntroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 2rem auto 0;
  
  h2 {
    margin-bottom: 1.5rem;
    
    i {
      color: ${props => props.theme.colors.secondary};
    }
    
    b {
      color: ${props => props.theme.colors.primary};
    }
  }
`;