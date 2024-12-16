import React, { useState, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import carousel from "../images/carousel.jpeg";
import carousel2 from "../images/carousel2.jpeg";
const testimonials = [
  {
    name: "Valerie",
    duration: "4 months",
    imageUrl: carousel ,
    videoUrl: "/videos/valerie.mp4"
  },
  {
    name: "Arthur",
    duration: "3 weeks",
    imageUrl: carousel2,
    videoUrl: "/videos/arthur.mp4"
  },
  {
    name: "Lola",
    duration: "11 months",
    imageUrl: carousel,
    videoUrl: "/videos/lola.mp4"
  },
  {
    name: "Sarah",
    duration: "6 months",
    imageUrl: carousel2,
    videoUrl: "/videos/sarah.mp4"
  },
  {
    name: "Michael",
    duration: "2 months",
    imageUrl: carousel,
    videoUrl: "/videos/michael.mp4"
  }
];

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleCardClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    const cardWidth = scrollRef.current.offsetWidth;
    const scrollPosition = (cardWidth + 24) * index; // 24px is the gap
    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  // Calculate visible cards based on screen width
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const maxIndex = Math.max(0, testimonials.length - getVisibleCards());

  return (
    <section className="id='reviews' container  mx-auto px-4 py-16 md:py-20">
      {/* Header */}
      <div className=" mx-auto max-w-2xl text-center text-CustomGrayH">
        <h2 className="mb-4 text-3xl  md:text-4xl">
          <span className="block italic font-[400]">Real stories.</span>
          <span className="block italic font-[400]">Shared by them.</span>
          <span className="mt-2 block font-[700]">To inspire you.</span>
        </h2>
      </div>

      {/* Testimonial Carousel */}
      <div className=" relative mx-auto max-w-5xl ">
        <div 
          ref={scrollRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="min-w-[280px] flex-shrink-0 snap-center sm:min-w-[320px]"
            >
              <TestimonialCard
                {...testimonial}
                onClick={() => handleCardClick(testimonial.videoUrl)}
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-blue-600 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
          <button
            onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
            className={`-ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:bg-white ${
              currentIndex === 0 ? 'invisible' : ''
            }`}
            aria-label="Previous slide"
          >
            <svg className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(maxIndex, currentIndex + 1))}
            className={`-mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:bg-white ${
              currentIndex === maxIndex ? 'invisible' : ''
            }`}
            aria-label="Next slide"
          >
            <svg className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
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
              <video 
                controls 
                className="h-full w-full"
                autoPlay
              >
                <source src={activeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
