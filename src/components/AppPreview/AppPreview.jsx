import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PreviewSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background: #f8f9fa;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 545px;
    background: url('/images/after-intro-bg.png') no-repeat center center;
    background-size: cover;
    opacity: 0.8;
    z-index: 0;
  }
`;

const PhoneContainer = styled.div`
  position: relative;
  max-width: 375px;
  margin: 0 auto;
`;

const PhoneScreen = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.3s ease;
  
  img {
    width: 100%;
    border-radius: 25px;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const ScreenText = styled(motion.p)`
  text-align: center;
  max-width: 370px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 25px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AppPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screens = [
    {
      image: "/images/dashboard.png",
      text: "Get clear guidance day after day, helping you stay on track and make progress."
    },
    {
      image: "/images/workout.png",
      text: "Strengthen your back with personalized exercises designed to fit your needs."
    },
    {
      image: "/images/reminder.png",
      text: "Stay on track—set reminders that fit your day to stretch and move."
    },
    {
      image: "/images/progress-tracker.png",
      text: "Log your back health, feelings, and score—watch your progress as you move forward"
    },
    {
      image: "/images/streak.png",
      text: "Stay motivated—compare with peers and challenge friends to join you!"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(screens.length - 1, prev + 1));
  };

  return (
    <PreviewSection id="app-preview">
      <PhoneContainer>
        {screens.map((screen, index) => (
          <PhoneScreen
            key={index}
            active={index === currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={screen.image} alt={`App Screen ${index + 1}`} />
          </PhoneScreen>
        ))}
        
        <NavigationButtons>
          <NavButton 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
          >
            ←
          </NavButton>
          <NavButton 
            onClick={handleNext} 
            disabled={currentIndex === screens.length - 1}
          >
            →
          </NavButton>
        </NavigationButtons>
      </PhoneContainer>

      <ScreenText
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {screens[currentIndex].text}
      </ScreenText>
    </PreviewSection>
  );
};

export default AppPreview;