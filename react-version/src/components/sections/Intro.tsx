import { useState } from 'react';
import '../../styles/global.css';

const Intro = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="intro" className="intro-section">
      <div className="container intro-container">
        <div className="intro-media">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intro-cBhoLiy6thzmr1ciWjYBD0pXX9GViI.png" 
            alt="Exercise demonstration" 
            className="intro-image" 
          />
          <button 
            className="play-button" 
            aria-label="Watch our showreel"
            onClick={handlePlayVideo}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
          </button>
          <span className="video-label"></span>
        </div>
        <div className="intro-content">
          <h2>
            <i>People say getting rid of back pain is tough.</i><br/>
            <b>We make it easier.</b>
          </h2>
          <p>
            We believe in the power of change through consistency and a personalized 
            plan that adapts to your body, schedule, and lifestyle. It's time to 
            prioritize your health and wellness like never before—and we're here to 
            guide you every step of the way.
          </p>
        </div>
      </div>

      {isVideoPlaying && (
        <div className="video-popup active">
          <div className="video-container active">
            <video controls width="100%" height="100%" autoPlay>
              <source 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-sample-LDptUYsndiB8LVf037X7YDwHWGj6uG.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video element.
            </video>
          </div>
          <span 
            className="close-video" 
            onClick={() => setIsVideoPlaying(false)}
          >
            &times;
          </span>
        </div>
      )}
    </section>
  );
};

export default Intro; 