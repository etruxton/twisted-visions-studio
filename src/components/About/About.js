import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate(); // Use React Router for navigation
  return (
    <div>        
    {/* Back to Gallery Button */}
      <button className="back-to-gallery" onClick={() => navigate('/')}>
        &larr; Back to Gallery
      </button>
      <div className="about-container">
        {/* About Me Section */}
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I'm Rich Powers, a artist passionate about creating unique sculptures out of chicken wire.
            [insert more description here]
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="about-images">
          <img class="image-right" src={require('../../assets/images/aboutme_turkey.jpg')} alt="Artwork 1" />
        </div>
        <div className="about-images">
        </div>
      </div>
    </div>
  );
};

export default About;