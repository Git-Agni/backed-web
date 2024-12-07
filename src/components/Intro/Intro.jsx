import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const IntroSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const IntroMedia = styled.div`
  position: relative;
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const IntroImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const VideoPopup = styled(motion.div)`
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

const VideoContainer = styled.div`
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

const CloseButton = styled.button`
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

const IntroContent = styled.div`
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

const Intro = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <IntroSection id="intro">
      <IntroMedia>
        <IntroImage 
          src="/images/intro.png" 
          alt="Exercise demonstration" 
        />
        <PlayButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowVideo(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
          </svg>
        </PlayButton>
      </IntroMedia>

      <IntroContent>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <i>People say getting rid of back pain is tough.</i><br/>
          <b>We make it easier.</b>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We believe in the power of change through consistency and a personalized plan that adapts to your body, schedule, and lifestyle. It's time to prioritize your health and wellness like never before—and we're here to guide you every step of the way.
        </motion.p>
      </IntroContent>

      <AnimatePresence>
        {showVideo && (
          <VideoPopup
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <VideoContainer>
              <CloseButton onClick={() => setShowVideo(false)}>×</CloseButton>
              <video controls>
                <source src="/videos/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoContainer>
          </VideoPopup>
        )}
      </AnimatePresence>
    </IntroSection>
  );
};

export default Intro;