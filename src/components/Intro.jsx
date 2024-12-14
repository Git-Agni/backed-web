import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import intro from '../images/intro.png';

const Intro = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="container mx-auto px-6 py-16 md:py-24 font-inter">
      <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
        {/* Left Section - Image */}
        <div className=" relative ">
          <div className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl bg-gray-100 mx-auto">
            <img
              src={intro}
              alt="Person doing legs up wall pose"
              className="object-cover "
            />
            <div className="absolute inset-0 flex items-end justify-start p-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-2 text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium drop-shadow-md">
                  Watch our showreel
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
       
        <div className="w-full lg:w-1/2 py-2 px-4  ">
       
            <div className="heading flex sm:justify-start justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[20px] sm:text-[48px]  font-[400] tracking-tight text-gray-900 leading-snug text-center lg:text-left"
              >
                <span className="block text-CustomGrayH italic">
                  People say getting rid of
                </span>
                <span className="block text-CustomGrayH italic">
                  back pain is tough.
                </span>
                <span className="mt-2 block font-bold text-CustomGrayH">
                  We make it easier.
                </span>
              </motion.h2>
            </div>
            <div className="description  flex flex-col justify-center items-center lg:items-start lg:pl-2 float-right sm:w-[500px] sm:h-[342px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-[14px] sm:text-[18px] leading-relaxed text-CustomGrayD text-center sm:text-left"
              >
                We believe in the power of change through consistency and a personalized plan that adapts to your body, schedule, and lifestyle. It's time to prioritize your health and wellness like never before—and we're here to guide you every step of the way. Answer a few questions and discover your personalized plan in just a few minutes.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-[182px] h-[54px] mt-8 rounded-full border-CustomBlue border-2 px-8 py-3 text-base font-semibold text-CustomGrayH transition-colors hover:bg-blue-700"
              >
                Start now
              </motion.button>
            </div>
          </div>
        </div>
   

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -right-2 -top-2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="aspect-video overflow-hidden rounded-xl bg-black">
                <video controls className="h-full w-full" autoPlay>
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Intro;
