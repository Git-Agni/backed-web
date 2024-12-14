import React from "react";
import { useState } from "react";

const Carousel = () => {
  // Example data for carousel cards
 const data = [
  { name: "Valerie", duration: "4 months with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Arthur", duration: "3 weeks with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Lola", duration: "11 months with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Daniel", duration: "8 months with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Sophia", duration: "1 year with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Ethan", duration: "5 months with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Mia", duration: "3 months with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Noah", duration: "2 months with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Isabella", duration: "7 months with Backed", imgSrc: "https://via.placeholder.com/300" },
  { name: "Oliver", duration: "6 weeks with Backed", imgSrc: "https://via.placeholder.com/300" },
];


  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel Display */}
      <div className="w-full max-w-lg overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full text-center">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Scroller */}
      <div className="flex mt-4 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-4 space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
