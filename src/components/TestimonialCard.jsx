import React from 'react';

const TestimonialCard = ({ name, duration, imageUrl, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-2xl w-[304px] h-[353px]"
      onClick={onClick}
    >
      <div className="w-full max-w-xs aspect-[3/4]">
        <img 
          src={imageUrl} 
          alt={`${name}'s testimonial`} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg 
            className="h-6 w-6 text-blue-600" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-200">{duration} with Backed</p>
      </div>
    </div>
  );
};

export default TestimonialCard;