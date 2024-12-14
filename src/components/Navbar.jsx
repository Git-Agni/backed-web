import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const scrollPosition = window.scrollY; // Use window.scrollY instead of pageYOffset
        if (scrollPosition >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className=" fixed w-full z-50 mx-auto py-4 px-4 backdrop-filter  bg-opacity-30 bg-white font-work-sans color-text-black ">
      <div className=" container ">
        <div className="flex items-center justify-evenly">
          <div className="logo justify-start">
           
              <a href="#" className="text-2xl font-bold text-blue-600">
                <img src={logo} alt="BackEd Logo" className="h-8 md:h-10" />
              </a>
           
          </div>
          <div className="right justify-center flex flex-1">
          <div className=" hidden md:flex items-center space-x-8">
            {['Home', 'How it Works', 'Reviews', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-base font-medium transition-colors duration-300 ${
                  activeSection === item.toLowerCase().replace(/\s+/g, '-')
                    ? 'text-blue-600'
                    : 'text-gray-800'
                } hover:text-blue-600`}
                onClick={(e) => handleLinkClick(e, item.toLowerCase().replace(/\s+/g, '-'))}
              >
                {item}
              </a>
            ))}
          </div>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'max-h-64' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-4 space-y-4">
            {['Home', 'How it Works', 'Reviews', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block px-4 py-2 text-base font-medium transition-colors duration-300 ${
                  activeSection === item.toLowerCase().replace(/\s+/g, '-')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-800'
                } hover:text-blue-600 hover:bg-blue-50 rounded-lg`}
                onClick={(e) => handleLinkClick(e, item.toLowerCase().replace(/\s+/g, '-'))}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
