import React from 'react';
import './WhatWeDoSection.css'; // CSS for this component (to be created)

// Importing planned icon paths - actual SVGs will be in assets
// Ensure these paths match the final asset structure
const iconPaths = {
  branding: '/src/assets/icons/branding_icon.svg',
  packaging: '/src/assets/icons/packaging_icon.svg',
  socialMedia: '/src/assets/icons/social_media_icon.svg',
  stationery: '/src/assets/icons/stationery_icon.svg',
  coffeeTableBooks: '/src/assets/icons/coffee_table_books_icon.svg',
  creativeProjects: '/src/assets/icons/creative_projects_icon.svg',
};

// Array of services offered by hueneu
const services = [
  {
    icon: iconPaths.branding,
    title: 'Branding',
    description: 'Crafting identities that resonate and tell your unique story.',
    microcopy: 'Branding, but make it brave.',
    aosDelay: '100'
  },
  {
    icon: iconPaths.packaging,
    title: 'Packaging',
    description: 'Designing packaging that captivates and communicates value.',
    microcopy: 'Packaging, but make it poetic.',
    aosDelay: '200'
  },
  {
    icon: iconPaths.socialMedia,
    title: 'Social Media',
    description: 'Creating engaging social content that builds community.',
    microcopy: 'Social media, but make it soulful.',
    aosDelay: '300'
  },
  {
    icon: iconPaths.stationery,
    title: 'Stationery',
    description: 'Designing bespoke stationery that leaves a lasting impression.',
    microcopy: 'Stationery, but make it stunning.',
    aosDelay: '400'
  },
  {
    icon: iconPaths.coffeeTableBooks,
    title: 'Coffee Table Books',
    description: 'Artfully curating and designing books that are treasures.',
    microcopy: 'Books, but make them breathtaking.',
    aosDelay: '500'
  },
  {
    icon: iconPaths.creativeProjects,
    title: 'Creative Projects',
    description: 'Collaborating on unique projects that push creative boundaries.',
    microcopy: 'Projects, but make them profound.',
    aosDelay: '600'
  },
];

// WhatWeDoSection component: Showcases hueneu's services
const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="what-we-do-section container">
      {/* Section Title */}
      <h2 className="section-title" data-aos="fade-up">
        What We Do
      </h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        We blend artistry with intention, crafting designs that speak volumes in whispers and shouts.
      </p>

      {/* Grid container for service cards */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card" 
            data-aos="fade-up" 
            data-aos-delay={service.aosDelay}
          >
            {/* Service Icon - using img tag for SVGs */}
            <img src={process.env.PUBLIC_URL + service.icon} alt={`${service.title} icon`} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            {/* <p className="service-description">{service.description}</p> */}
            <p className="service-microcopy">{service.microcopy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
