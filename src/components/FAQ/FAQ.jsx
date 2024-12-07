import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Question = styled.h4`
  margin: 0;
  font-weight: 600;
`;

const Answer = styled(motion.p)`
  margin-top: 0.5rem;
  line-height: 1.5;
`;

const faqs = [
  {
    question: "Why to use Backed?",
    answer: "Backed offers personalized, expert-designed routines to help eliminate back pain and improve posture in just 5 minutes a day. Our app adapts to your body, schedule, and lifestyle, making it easier to maintain consistency and see real results."
  },
  {
    question: "In how many days will I see the result?",
    answer: "Results vary from person to person, but many users report feeling improvements within the first few weeks of consistent use. For significant changes in posture and pain reduction, we recommend following your personalized plan for at least 4-6 weeks."
  },
  {
    question: "Can I use it without the supervision of my physiologist?",
    answer: "While Backed is designed to be used independently, we always recommend consulting with your healthcare provider before starting any new exercise program, especially if you have existing health conditions or injuries. Our app provides guidance, but it's not a substitute for professional medical advice."
  },
  {
    question: "Can I use it if I want to correct my posture?",
    answer: "Backed includes specific exercises and routines designed to improve posture. Our app will create a personalized plan tailored to your posture goals, helping you build strength and awareness to maintain better alignment throughout your day."
  },
  {
    question: "How will Backed assess my back?",
    answer: "Backed uses a combination of user-provided information and advanced algorithms to assess your back health. When you start, you'll answer a series of questions about your pain, lifestyle, and goals. As you use the app, it will track your progress and adjust your plan based on your feedback and performance, ensuring a continuously optimized experience."
  }
  // Add more FAQs...
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          onClick={() => toggleFAQ(index)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Question>{faq.question}</Question>
          {openIndex === index && (
            <Answer
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer}
            </Answer>
          )}
        </FAQItem>
      ))}
    </FAQSection>
  );
};

export default FAQ;