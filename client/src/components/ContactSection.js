import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactSection.css'; // CSS will be created in a subsequent step

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // For success/error messages

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        setStatus(`Message sent! Thank you, ${formData.name}.`);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorResult = await response.json();
        setStatus(`Error: ${errorResult.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      setStatus('Error: Could not reach server. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Let's Work Together
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up" data-aos-delay="200">
          <div className="form-group form-group-name" data-aos="fade-right" data-aos-delay="300">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="What should I call you?"
            />
          </div>

          <div className="form-group form-group-email" data-aos="fade-left" data-aos-delay="300">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Where can I reach you?"
            />
          </div>

          <div className="form-group form-group-message" data-aos="fade-up" data-aos-delay="400">
            <label htmlFor="message">Your Story (or message)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project, your ideas, or your favorite hue..."
            ></textarea>
          </div>

          <div className="form-actions" data-aos="fade-up" data-aos-delay="500">
            <button type="submit" className="cta-button">
              Let's design your story
            </button>
            {status && <p className="form-status">{status}</p>}
          </div>
        </form>

        <div className="social-links" data-aos="fade-up" data-aos-delay="600">
          <p>Find more of hueneu's journey on Instagram:</p>
          <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="instagram-link">
            @hueneu_
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
