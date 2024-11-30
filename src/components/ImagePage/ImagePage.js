import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import metadata from '../../assets/metadata.json';
import './ImagePage.css';

const ImagePage = () => {
  const { imageId } = useParams(); // Get the pageId from the URL
  const navigate = useNavigate(); // Get the navigate function
  const pageData = metadata.find((item) => item.pageId === imageId); // Find the matching page data

  const [focusedImage, setFocusedImage] = useState(null); // State for modal image

  const handleImageClick = (image) => {
    setFocusedImage(image); // Open the modal with the clicked image
  };

  const closeModal = () => {
    setFocusedImage(null); // Close the modal
  };

  useEffect(() => {
    // If no pageData is found, navigate to the NotFound page
    if (!pageData) {
      navigate('/404', { replace: true });
    }
  }, [imageId, pageData, navigate]);

  if (!pageData) {
    // Temporarily render "Loading..." before navigation occurs
    return <div>Loading...</div>;
  }

  return (
    <div className="image-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back to Gallery
      </button>
      <h2>{pageData.title}</h2>
      <p className="image-page-description">{pageData.description}</p>
      <div className="image-gallery">
        {pageData.images.map((image, index) => (
          <div key={index} className="image-thumbnail" onClick={() => handleImageClick(image)}>
            <img src={require(`../../assets/images/${image.fileName}`)} alt={image.title} />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {focusedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={require(`../../assets/images/${focusedImage.fileName}`)} alt={focusedImage.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePage;