import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const GazeboDetail = () => {
  const { productName } = useParams(); // Get product name from URL
  const [gazebo, setGazebo] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for current image index
  const [specificationsVisible, setSpecificationsVisible] = useState({}); // State for specifications visibility
  const [accessoriesVisible, setAccessoriesVisible] = useState({}); // State for accessories visibility

  useEffect(() => {
    // Fetch the specific gazebo data using the product name
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/gazebos/${productName}`)
      .then((response) => {
        setGazebo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching gazebo details:', error);
      });
  }, [productName]);

  if (!gazebo) return <div>Loading...</div>; // Loading state

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Object.keys(gazebo.IMAGE_URLS).length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Object.keys(gazebo.IMAGE_URLS).length) % Object.keys(gazebo.IMAGE_URLS).length);
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
                src={Object.values(gazebo.IMAGE_URLS)[currentImageIndex]} 
                alt={`Gazebo ${gazebo.PRODUCT_NAME}`} 
                className="carousel-image"
              />  
              <button onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
        </div>
        <div className="description-container">
          <h1>{gazebo.PRODUCT_NAME}</h1>
          <h3>Description</h3>
          <p>{gazebo.PRODUCT_DESCRIPTION.Description}</p>
          <p>Seats: {gazebo.PRODUCT_DESCRIPTION['Number of Seats']}</p>
          <p>Gallons: {gazebo.PRODUCT_DESCRIPTION.Gallons}</p>
          <p>Weight: {gazebo.PRODUCT_DESCRIPTION.Weight} lbs</p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center' }}>Product Features</h2>
      <div className="features-container">
        {gazebo.PRODUCT_FEATURES.map((feature, index) => (
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
                {Object.entries(gazebo.PRODUCT_SPECIFICATIONS[index][title]).map(([key, value], idx) => (
                  <p key={idx}>{`${key}: ${value}`}</p>
                ))} 
              </div>
            )}  
          </div>
        ))} 
      </div>
    </div>
  );
};

export default GazeboDetail;

