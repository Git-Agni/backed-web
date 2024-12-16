import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { screens } from './AppPreview.data'; // Importing the screens data
import PhonePreview from './PhonePreview'; // Importing PhonePreview component
import afterIntroTest from '../images/after-intro-test.png';// Importing the image

const AppPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % screens.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + screens.length) % screens.length);
  };

  return (
    <div className=" id='reviews' relative w-full min-h-screen flex flex-col items-center justify-center text-customGrayH">
      <div className="w-full text-center ">
        <h2 className="text-[20px] sm:text-[48px] ">
          <span className="italic  font-[400]">A week-by-week plan.</span>
          <br />
          <span className="italic font-[400]">Made by us.</span>
          <br />
          <span className="font-[600]">Just for you.</span>
        </h2>
        <p className="text-[14px] font-[500] sm:text-[18px] text-CustomGrayD  max-w-[311px] sm:max-w-xl mx-auto text-center">
          Backed learns about you, crafts a personalized routine around your goal and lifestyle, and optimizes it over time.
        </p>
      </div>

      {/* Background Section */}
      <div
       className="relative min-h-screen flex flex-col items-center justify-center bg-center w-full"
        style={{
          backgroundImage: `url(${afterIntroTest})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* PhonePreview Component */}
        <PhonePreview
          screens={screens}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        {/* Screen Text */}
        <motion.p
          key={currentIndex}
          // text-[clamp(0.9rem,1.2vw,1.2rem)]
          className="text-center text-CustomGrayH font-[600] my-4 max-w-xl mx-auto  text-[16px] sm:text-[32px] leading-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {screens[currentIndex].text}
        </motion.p>

        {/* Get Started Button */}
        <a
          href="#"
          className="inline-block text-center py-3 bg-CustomBlue text-white rounded-full font-bold mt-4 w-[220px] "
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AppPreview;
