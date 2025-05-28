import React from 'react';
import './StorySection.css'; // Styles for this component

// StorySection component: Tells the story of hueneu
const StorySection = () => {
  return (
    <section id="story" className="story-section container">
      {/* Section Title with AOS animation */}
      <h2 className="section-title" data-aos="fade-up">
        The <span className="highlight-hue">hue</span>neu Story
      </h2>
      
      {/* Introductory paragraph about the name and philosophy */}
      <div className="story-content">
        <p data-aos="fade-up" data-aos-delay="100">
          At hueneu, our name is our philosophy. 
          <strong className="highlight-hue">'Hue'</strong> embodies the vibrant bursts of creativity, the unexpected palettes, the color that breathes life into stories. 
          It's the spark, the surprise, the visual poetry.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          <strong className="highlight-neu">'Neu'</strong> represents the grounding neutrality, the calm foundation upon which bold ideas can stand tall. 
          It's the quiet confidence, the intentional space, the balance that makes creativity resonate deeply.
        </p>
        <p data-aos="fade-up" data-aos-delay="300">
          We believe in design that whispers loud stories – a delicate dance between vivid imagination and thoughtful restraint. 
          It's where color finds its calm, and stories find their most evocative aesthetic.
        </p>

        {/* The "Who Knew?" moment with a distinct visual and animation */}
        <div className="who-knew-moment" data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="800">
          <span className="who-knew-pop">Who Knew?</span>
          <p className="who-knew-text">
            ...that such quiet beginnings could lead to such bold expressions? 
            That's the magic we strive for: designs that unfold with delightful surprises, 
            revealing layers of meaning and personality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
