import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Contact.css'; // Import CSS for styling

const Contact = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>        
    {/* Back to Gallery Button */}
      <button className="back-to-gallery" onClick={() => navigate('/')}>
        &larr; Back to Gallery
      </button>
      <div className="contact-container">
        {/* contact Me Section */}
        <div className="contact-me">
          <h2>Contact Us</h2>
          <p>
          Richard does not sell his art, but he accepts gift cards to cover the cost of materials. Since each project varies in size and complexity, Visa or MasterCard gift cards work best to allow flexibility in sourcing supplies. 
          </p>
          <p>
          Richard will not make or consider any art that is political, religious nor controversial in any manner and has the right to refuse service for any reason.
          </p>
          <p>
          If you are interested in a piece, you may reach out to the <b>Twisted Visions Studio Facebook Page</b> through Facebook Messenger. 
          </p>
          <p>
          Twisted Visions Studio Facebook Page: <a href="https://www.facebook.com/twistedvisionsstudio">https://www.facebook.com/twistedvisionsstudio</a>
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="contact-images">
          <img class="image-right" src={require('../../assets/images/aboutme_artist.jpg')} alt="Artwork 1" />
        </div>
        <div className="contact-images">
        </div>
      </div>
    </div>
  );
};

export default Contact;