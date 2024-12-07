import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  overflow: hidden;
`;

const TestimonialsTrack = styled(motion.div)`
  display: flex;
  gap: 24px;
`;

const TestimonialCard = styled(motion.div)`
  flex: 0 0 456px;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? props.theme.colors.primary : '#ddd'};
  border: none;
  padding: 0;
  cursor: pointer;
`;

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Office Worker",
    image: "/images/avatar1.jpg",
    text: "After years of chronic back pain, this app has been a game-changer. The personalized exercises and daily reminders keep me consistent."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    image: "/images/avatar2.jpg",
    text: "The personalized approach and progress tracking have made a huge difference in managing my back pain."
  },
  // Add more testimonials with corresponding images
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsTrack
        ref={trackRef}
        animate={{ x: currentIndex * -(456 + 24) }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <UserInfo>
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </UserInfo>
            <p>{testimonial.text}</p>
          </TestimonialCard>
        ))}
      </TestimonialsTrack>

      <CarouselDots>
        {testimonials.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>
    </TestimonialsSection>
  );
};

export default Testimonials;