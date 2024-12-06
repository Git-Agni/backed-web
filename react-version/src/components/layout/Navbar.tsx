import { useState } from 'react';
import '../../styles/global.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar" style={{ 
      padding: '2rem 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    }}>
      <a href="#" className="logo" style={{ 
        display: 'block',
        width: '300px',  // Increased logo size
        height: 'auto'
      }}>
        <img 
          src="/assets/logo.png" 
          alt="Logo" 
          style={{ 
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }} 
        />
      </a>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#" className="active">Home</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#reviews">Reviews</a>
        <a href="#about">About</a>
      </div>
      <div 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar; 