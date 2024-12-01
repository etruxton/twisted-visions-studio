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
          <h2>About the Artist</h2>
          <p>
          Meet Richard Powers; he is a 100% disabled veteran with PTSD who is primarily homebound. He has found peace and purpose through his art. He prefers to keep this private and appreciates understanding regarding his wish not to discuss it extensively with others. 
          </p>
          <p>
          His journey began unexpectedly in the backyard, where he picked up a stray piece of chicken wire and saw a face looking back at him. That moment sparked a creative obsession, and as you can see from his gallery, his skills and artistry have flourished over the years. 
          </p>
          <p>
          He is particularly drawn to creating life-sized sculptures—typically larger than a turkey—and specializes in pieces that showcase intricate, textured "hair."
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