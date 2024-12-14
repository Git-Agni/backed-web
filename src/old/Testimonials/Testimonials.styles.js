import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsSection = styled.div`
  padding: 4rem 24px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  background: ${props => props.theme.colors.background};
`;

export const TestimonialTrack = styled.div`
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 1;
`;

export const TestimonialCard = styled(motion.div)`
  flex: 0 0 456.12px;
  width: 456.12px;
  height: 587.5px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center center;
  
  &:hover {
    transform: translateY(-4px);
  }

  &.active {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }
`;

export const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  opacity: 0.8;
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: #fff;
    transform: translate(-50%, -50%) scale(1.1);
  }

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent #0066ff;
    margin-left: 4px;
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  z-index: 2;
`;

export const UserName = styled.h3`
  font-size: 20px;
  margin-bottom: 4px;
`;

export const UserDuration = styled.p`
  font-size: 14px;
  opacity: 0.9;
`;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 200px;
  z-index: 1;
`;

export const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#0066ff' : '#ccc'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;