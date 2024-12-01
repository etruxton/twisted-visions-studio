import React, { useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Filter artworks based on search query and tags
  const filteredArtworks = searchQuery.trim()
  ? artworks.filter((art) =>
      art.tags && art.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  : artworks;

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by tags... (ex: 'animal', 'human')"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="artworks">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art, index) => (
            <div key={index} className="artwork">
              {/* Link wraps around the image to navigate to the subpage */}
              <Link to={`/${art.fileName.replace(/\.(jpg|png|jpeg|gif|JPG)$/, '')}`}>
                <img src={art.src} alt={art.title} />
              </Link>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;