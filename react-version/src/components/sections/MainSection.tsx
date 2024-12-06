import { useState } from 'react';
import '../../styles/global.css';

const MainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phoneScreens = [
    { src: '/assets/dashboard.png', alt: 'Main Dashboard' },
    { src: '/assets/workout.png', alt: 'Workout Screen' },
    { src: '/assets/reminder.png', alt: 'Reminders Edit Screen' },
    { src: '/assets/progress-tracker.png', alt: 'Progress Tracker' },
    { src: '/assets/streak.png', alt: 'Streak Society' }
  ];

  const screenTexts = [
    "Get clear guidance day after day, helping you stay on track and make progress.",
    "Strengthen your back with personalized exercises designed to fit your needs.",
    "Stay on track—set reminders that fit your day to stretch and move.",
    "Log your back health, feelings, and score—watch your progress as you move forward",
    "Stay motivated—compare with peers and challenge friends to join you!"
  ];

  const nextScreen = () => {
    setCurrentIndex((prev) => (prev + 1) % phoneScreens.length);
  };

  const prevScreen = () => {
    setCurrentIndex((prev) => (prev - 1 + phoneScreens.length) % phoneScreens.length);
  };

  return (
    <div className="main-section">
      <div className="blurred-background"></div>
      <div className="plan-intro">
        <h2>
          <span className="italic-text">A week-by-week plan.</span><br />
          <span className="italic-text">Made by us.</span><br />
          <span className="bold-text">Just for you.</span>
        </h2>
        <p className="intro-text">
          Backed learns about you, crafts a personalized routine around your goal and lifestyle, 
          and optimize it over time.
        </p>
      </div>

      <div className="phone-screen-container">
        <div className="phone-screen-carousel">
          {phoneScreens.map((screen, index) => (
            <img
              key={screen.alt}
              src={screen.src}
              alt={screen.alt}
              className={`phone-screen ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="phone-nav-buttons">
          <button className="phone-nav-button prev" onClick={prevScreen}>&#60;</button>
          <button className="phone-nav-button next" onClick={nextScreen}>&#62;</button>
        </div>
      </div>
      
      <p id="phoneScreenText">{screenTexts[currentIndex]}</p>
      <a href="#" className="get-started-button">Get Started</a>
    </div>
  );
};

export default MainSection; 