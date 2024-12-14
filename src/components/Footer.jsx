import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-blue-600 text-white text-center">
      <p>&copy; {new Date().getFullYear()} BackEd. All rights reserved.</p>
      <div className="mt-4">
        <a
          href="#privacy"
          className="text-white hover:underline mx-4 font-medium"
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          className="text-white hover:underline mx-4 font-medium"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
