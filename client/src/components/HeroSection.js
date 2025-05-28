import React from 'react';
import './HeroSection.css'; // Styles for this component (to be created in next batch)
// Assuming logo.svg is in client/src/assets/ directory as per file structure
import hueneuLogo from '../assets/logo.svg'; 

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="logo-container" data-aos="fade-up" data-aos-delay="300">
          <img src={hueneuLogo} alt="hueneu logo" className="hero-logo" />
        </div>
        <h1 className="hero-tagline" data-aos="fade-up" data-aos-delay="500">
          Where stories find their aesthetic.
        </h1>
        <p className="hero-subtext" data-aos="fade-up" data-aos-delay="700">
          Designs that whisper loud stories.
        </p>
        <a href="#story" className="scroll-down-indicator" aria-label="Scroll to next section" data-aos="fade-up" data-aos-delay="900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
