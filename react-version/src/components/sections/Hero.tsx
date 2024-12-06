import { useState, FormEvent } from 'react';
import '../../styles/global.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyn8cebFcTHz0JZdu_356EwlL-szsT-vHp4o_-Q8_m8Z7gGHOdUZC9aCesKvQJ5ij2WVA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ email }),
      });
      
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Oops! Something went wrong. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem'
    }}>
      <div className="overlay"></div>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="hero-content">
          <div className="hero-text" style={{
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '4rem',
              lineHeight: 1.2,
              marginBottom: '2rem'
            }}>
              <span className="line-one" style={{
                display: 'block',
                marginBottom: '0.5rem'
              }}>YOUR BACK</span>
              <span className="line-two">DESERVES BETTER</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem'
            }}>
              Proven routines designed by leading experts to help you eliminate back pain
              and improve posture in just 5 minutes a day.
            </p>
            <div className="notifications">
              <div className="get-notified" style={{
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>Get notified when we launch</div>
              <form onSubmit={handleSubmit} className="email-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  aria-label="Email address"
                  style={{
                    padding: '1rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginRight: '1rem',
                    width: '300px'
                  }}
                />
                <button 
                  type="submit" 
                  className="button"
                  style={{
                    padding: '1rem 2rem',
                    borderRadius: '4px',
                    border: 'none',
                    background: '#007AFF',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
            {message && (
              <div 
                className="message"
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  borderRadius: '4px',
                  background: message.includes('thank you') ? '#4CAF50' : '#f44336',
                  color: 'white'
                }}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 