import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const SwimDetail = () => {
  const { productName } = useParams(); // Get product name from URL
  const [swim, setSwim] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for current image index
  const [specificationsVisible, setSpecificationsVisible] = useState({}); // State for specifications visibility
  const [accessoriesVisible, setAccessoriesVisible] = useState({}); // State for accessories visibility

  useEffect(() => {
    // Fetch the specific swim spa data using the product name
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/swimspas/${productName}`)
      .then((response) => {
        setSwim(response.data);
      })
      .catch((error) => {
        console.error('Error fetching swim spa details:', error);
      });
  }, [productName]);

  if (!swim) return <div>Loading...</div>; // Loading state

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Object.keys(swim.IMAGE_URLS).length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Object.keys(swim.IMAGE_URLS).length) % Object.keys(swim.IMAGE_URLS).length);
  };

  const toggleSpecification = (specName) => {
    setSpecificationsVisible((prev) => ({
      ...prev,
      [specName]: !prev[specName], // Toggle visibility
    }));
  };

  const toggleAccessory = (accessoryTitle) => {
    setAccessoriesVisible((prev) => ({
      ...prev,
      [accessoryTitle]: !prev[accessoryTitle], // Toggle visibility
    }));
  };

  // Define the specification titles
  const specificationTitles = [
    "General Specifications",
    "Jets Specifications",
    "Standard Pumps Configuration",
    "Control System Selection",
    "Filtration and Purification"
  ];

  return (
    <div className="spa-detail">
      <div className="spa-description-container">
        <div className="image-container">
          <div className="image-carousel-container">
            <div className="image-carousel">
              <button onClick={handlePrevImage}>&lt;</button>
              <img 
                src={Object.values(swim.IMAGE_URLS)[currentImageIndex]} 
                alt={`Swim Spa ${swim.PRODUCT_NAME}`} 
                className="carousel-image"
              />
              <button onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
        </div>
        <div className="description-container">
          <h1>{swim.PRODUCT_NAME}</h1>
          <h3>Description</h3>
          <p>{swim.PRODUCT_DESCRIPTION.Description}</p>
          <p>Seats: {swim.PRODUCT_DESCRIPTION['Number of Seats']}</p>
          <p>Gallons: {swim.PRODUCT_DESCRIPTION.Gallons}</p>
          <p>Weight: {swim.PRODUCT_DESCRIPTION.Weight} lbs</p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center' }}>Product Features</h2>
      <div className="features-container">
        {swim.PRODUCT_FEATURES.map((feature, index) => (
          <div key={index} className="feature-item">
            <h4>{feature.title}</h4>
            <img src={feature.image_url} alt={`Feature ${feature.title}`} />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center' }}>Product Specifications</h2>
      <div className="specifications-container">
        {specificationTitles.map((title, index) => (
          <div key={index}>
            <button onClick={() => toggleSpecification(title)} className="specification-button">
              {title} {specificationsVisible[title] ? '-' : '+'}
            </button>
            {specificationsVisible[title] && (
              <div className="specification-details">
                {Object.entries(swim.PRODUCT_SPECIFICATIONS[index][title]).map(([key, value], idx) => (
                  <p key={idx}>{`${key}: ${value}`}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center' }}>Accessories</h2> {/* Centered header for accessories */}
      <div className="accessories-container">
        {swim.PRODUCT_ACCESSORIES.map((accessory, index) => (
          <div key={index} className="accessory-item">
            <div className="accessory-content">
              <h4>{accessory.title}</h4>
              <img src={accessory.image_url} alt={`Accessory ${accessory.title}`} className="accessory-image" />
              <p className="accessory-description">{accessory.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwimDetail;

