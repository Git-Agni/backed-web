import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../images/hero.png'

const Hero = () => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setNotification('Please enter a valid email address.');
      setTimeout(() => setNotification(''), 3000);
      return;
    }
    try {
      // Add your email submission logic here
      setNotification('Thanks for signing up! We\'ll be in touch soon.');
      console.log(email);
      setEmail('');
      setTimeout(() => setNotification(''), 3000);
    } catch (error) {
      setNotification('Something went wrong. Please try again.');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div
      id="hero"
      className=" relative min-h-[100svh] overflow-hidden bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container mx-auto flex min-h-[100svh] flex-col justify-center pt-20 md:pt-24 font-inter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="mb-6 text-4xl font-[700] text-customGrayH sm:text-5xl md:text-6xl">
            <span className="block">YOUR BACK</span>
            <span className="block">DESERVES BETTER</span>
          </h1>
          <p className="mb-[56px] max-w-lg text-base text-[#494A50] sm:text-lg md:text-[26px] leading-7">
            Proven routines designed by leading experts to help you eliminate back pain
            and improve posture in just 5 minutes a day.
          </p>
          <h2 className="mb-4 text-[24px] font-semibold text-black">
            Get notified when we launch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg border-none sm:rounded-full sm:gap-0 sm:flex-row gap-2 flex max-w-md flex-col overflow-hidden "
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              aria-label="Email Address"
              className="w-full rounded-full sm:rounded-l-full sm:rounded-r-none border  px-4 py-3 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 "
            />
            <button
              type="submit"
              className="w-full rounded-full sm:rounded-r-full sm:rounded-l-none border bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-700 sm:w-auto "
              aria-label="Subscribe to Updates"
            >
              Subscribe
            </button>
          </form>

          <AnimatePresence>
            {notification && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`mt-4 rounded-lg px-4 py-3 text-sm ${
                  notification.includes('Thanks')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {notification}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
