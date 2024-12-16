import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhonePreview = ({ screens, currentIndex, onNext, onPrev }) => {
  return (
    <div className="relative  w-[min(375px,90vw)] h-[min(700px,60vh)] my-8 flex justify-center z-10">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={`${screens[currentIndex].image}`}
          alt={`Screen ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-contain px-"
        />
      </AnimatePresence>
      {/* md:left-[-10px] md:right-[-10px] */}

     <div className="absolute top-1/2 left-[-35px] right-[-40px]  flex justify-between items-center transform -translate-y-1/2 pointer-events-none">
      <button
        onClick={onPrev}
        className="pointer-events-auto  border-none pl-0 text-CustomGrayH cursor-pointer text-[48px]"
        style={{ marginLeft: '20px' }}
      >
        &#60;
      </button>
      <button
        onClick={onNext}
        className="pointer-events-auto  border-none text-[48px]  text-CustomGrayH cursor-pointer"
        style={{ marginRight: '20px' }}
      >
        &#62;
      </button>
    </div>

    </div>
  );
};

export default PhonePreview;
