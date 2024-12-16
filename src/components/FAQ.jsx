import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why to use Backed?",
    answer:
      "Backed offers personalized, expert-designed routines to help eliminate back pain and improve posture in just 5 minutes a day. Our app adapts to your body, schedule, and lifestyle, making it easier to maintain consistency and see real results.",
  },
  {
    question: "In how many days will I see the result?",
    answer:
      "Results vary from person to person, but many users report feeling improvements within the first few weeks of consistent use. For significant changes in posture and pain reduction, we recommend following your personalized plan for at least 4-6 weeks.",
  },
  {
    question: "Can I use it without the supervision of my physiologist?",
    answer:
      "While Backed is designed to be used independently, we always recommend consulting with your healthcare provider before starting any new exercise program, especially if you have existing health conditions or injuries. Our app provides guidance, but it's not a substitute for professional medical advice.",
  },
  {
    question: "Can I use it if I want to correct my posture?",
    answer:
      "Backed includes specific exercises and routines designed to improve posture. Our app will create a personalized plan tailored to your posture goals, helping you build strength and awareness to maintain better alignment throughout your day.",
  },
  {
    question: "How will Backed assess my back?",
    answer:
      "Backed uses a combination of user-provided information and advanced algorithms to assess your back health. When you start, you'll answer a series of questions about your pain, lifestyle, and goals. As you use the app, it will track your progress and adjust your plan based on your feedback and performance, ensuring a continuously optimized experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6">
      <div className="container px-4">
        <h1 className="text-CustomGrayH font-[700] mb-2">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
        
        <motion.div
          key={index}
          onClick={() => toggleFAQ(index)}
          className="mb-6 p-4 bg-white rounded-lg shadow cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg  italic">{faq.question}</h4>
          {openIndex === index && (
            <motion.p
              className="mt-2 text-CustomGrayH"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer}
            </motion.p>
          )}
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default FAQ;
