import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyHueneuSection.css';

const WhyHueneuSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100, // Trigger animations a bit earlier
    });
  }, []);

  return (
    <section id="why-hueneu" className="why-hueneu-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Why hueneu?
        </h2>
        <div className="why-hueneu-content">
          <p className="poetic-copy" data-aos="fade-up" data-aos-delay="100">
            We don't just design—<span className="highlight">we decode stories</span>.
          </p>
          <p className="poetic-copy" data-aos="fade-up" data-aos-delay="200">
            Creating visual narratives that speak quietly but <span className="highlight">stay with you</span>, long after the first glance.
          </p>
          <div className="values-showcase" data-aos="fade-up" data-aos-delay="300">
            <div className="value-item" data-aos="fade-right" data-aos-delay="400">
              <h3 className="value-title">Calm Presence</h3>
              <p className="value-description">Our designs bring a sense of tranquility and focus, cutting through the noise with intentional simplicity.</p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="500">
              <h3 className="value-title">Mysterious Allure</h3>
              <p className="value-description">We craft experiences that invite curiosity, with layers of meaning that unfold gently.</p>
            </div>
            <div className="value-item" data-aos="fade-left" data-aos-delay="600">
              <h3 className="value-title">Balanced Harmony</h3>
              <p className="value-description">Striving for the perfect equilibrium between vibrant creativity and grounding neutrality, the hue and the neu.</p>
            </div>
          </div>
          <p className="poetic-copy final-statement" data-aos="fade-up" data-aos-delay="700">
            With hueneu, discover design that feels <span className="highlight">both familiar and refreshingly new</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
