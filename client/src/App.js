import React, { useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
      delay: 200, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <div className="App">
      <HeroSection />
      {/* Other sections will be added here later */}
      {/* <StorySection /> */}
      {/* <WhatWeDoSection /> */}
      {/* <WhyHueneuSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
}

export default App;
