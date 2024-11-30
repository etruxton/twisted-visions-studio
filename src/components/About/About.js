import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* About Me Section */}
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hi! I'm [name], a artist passionate about creating unique artwork out of chicken wire.
          [insert more description here]
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="about-images">
        <img src={require('../../assets/images/aboutme_turkey.jpg')} alt="Artwork 1" />
        <img src={require('../../assets/images/aboutme_artist.jpg')} alt="Artwork 2" />
      </div>
    </div>
  );
};

export default About;