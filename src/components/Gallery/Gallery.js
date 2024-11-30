import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Gallery.css';
import metadata from '../../assets/metadata.json';

// Dynamically import all images from the directory
const images = require.context('../../assets/images', false, /\.(jpg|png|jpeg|gif|JPG)$/);

// Map filenames to their imported image paths
const artworks = metadata.map((meta) => ({
  ...meta,
  src: images(`./${meta.fileName}`),
}));

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="artworks">
        {artworks.map((art, index) => (
          <div key={index} className="artwork">
            {/* Link wraps around the image to navigate to the subpage */}
            <Link to={`/${art.fileName.replace(/\.(jpg|png|jpeg|gif|JPG)$/, '')}`}>
              <img src={art.src} alt={art.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;