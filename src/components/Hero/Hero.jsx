import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  background: url('/images/hero.png') no-repeat center center;
  background-size: cover;
`;

const HeroContent = styled.div`
  padding-top: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 80px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const EmailForm = styled.form`
  width: 100%;
  max-width: 385px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 24px;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  width: 45%;
  border-radius: 25px;
  height: 45px;
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  font-weight: 600;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}ee;
  }
`;

const Notifications = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 385px;
  border-radius: 25px;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Hero = () => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your email submission logic here
      setNotification('Thanks for signing up! We\'ll be in touch soon.');
      setEmail('');
      setTimeout(() => setNotification(''), 3000);
    } catch (error) {
      setNotification('Something went wrong. Please try again.');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <HeroSection id="hero">
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            <span className="line-one">Back pain stopping you?</span>
            <span className="line-two">Let's fix that.</span>
          </h1>
          <p className="intro-text">
            Join thousands who've found relief through our personalized approach to back pain management.
          </p>
        </motion.div>

        <EmailForm onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </SubmitButton>
        </EmailForm>

        {notification && (
          <Notifications
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {notification}
          </Notifications>
        )}
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;