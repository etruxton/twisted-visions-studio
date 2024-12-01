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
      <h2>Contact Us</h2>
      <p>Email: artist@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Facebook Group: <a href="https://www.facebook.com/groups/">Group</a> </p>
    </div>
    </div>
  );
};

export default Contact;