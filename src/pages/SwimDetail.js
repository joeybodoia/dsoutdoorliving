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
    // Fetch the specific spa product data using the product name
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/spas/${productName}`)
      .then((response) => {
        setSwim(response.data);
      })
      .catch((error) => {
        console.error("Error fetching spa details:", error);
      });
  }, [productName]);

  if (!swim) return <div>Loading...</div>; // Loading state

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % Object.keys(swim.IMAGE_URLS).length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + Object.keys(swim.IMAGE_URLS).length) %
        Object.keys(swim.IMAGE_URLS).length
    );
  };

  const toggleSpecification = (specName) => {
    setSpecificationsVisible((prev) => ({
      ...prev,
      [specName]: !prev[specName], // Toggle visibility
    }));
  };

  const specificationTitles = [
    "General Specifications",
    "Jets Specifications",
    "Standard Pumps Configuration",
    "Control System Selection",
    "Filtration and Purification",
  ];

  return (
    <div className="spa-detail">
      <div className="teal-container">
        <div className="image-description-container">
          {/* Image Carousel */}
          <div className="image-container">
            <div className="image-carousel-container">
              <div className="image-carousel">
                <img
                  src={Object.values(swim.IMAGE_URLS)[currentImageIndex]}
                  alt={`${swim.PRODUCT_NAME}`}
                  className="carousel-image"
                />
              </div>
            </div>
            <div className="thumbnail-carousel">
              <button
                onClick={handlePrevImage}
                className="carousel-nav left-nav"
              >
                &lt;
              </button>
              <div className="thumbnails">
                {Object.values(swim.IMAGE_URLS).map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${
                      currentImageIndex === index
                        ? "active-thumbnail"
                        : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              <button
                onClick={handleNextImage}
                className="carousel-nav right-nav"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="description-container">
            <h1>{swim.PRODUCT_NAME}</h1>
            <hr className="title-divider" />
            <p className="description-text">
              {swim.PRODUCT_DESCRIPTION.Description}
            </p>
            <ul className="description-icons">
              <li>
                <i className="fas fa-users"></i>{" "}
                {swim.PRODUCT_DESCRIPTION["Number of People"]} People
              </li>
              <li>
                <i className="fas fa-chair"></i>{" "}
                {swim.PRODUCT_DESCRIPTION["Number of Seats"]} Seats
              </li>
              <li>
                <i className="fas fa-weight-hanging"></i>{" "}
                {swim.PRODUCT_DESCRIPTION.Weight} lbs
              </li>
              <li>
                <i className="fas fa-ruler-combined"></i>{" "}
                {`${swim.PRODUCT_DESCRIPTION.Length} x ${swim.PRODUCT_DESCRIPTION.Width} x ${swim.PRODUCT_DESCRIPTION.Height}`}{" "}
                inches
              </li>
              <li>
                <i className="fas fa-water"></i>{" "}
                {swim.PRODUCT_DESCRIPTION.Gallons} Gallons
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Features */}
      <h2 style={{ textAlign: "center" }}>Product Features</h2>
      <div className="features-container">
        {swim.PRODUCT_FEATURES.map((feature, index) => (
          <div key={index} className="feature-item">
            <h4>{feature.title}</h4>
            <img src={feature.image_url} alt={`Feature ${feature.title}`} />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Product Specifications */}
      <h2 style={{ textAlign: "center" }}>Product Specifications</h2>
      <div className="specifications-container">
        {specificationTitles.map((title, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSpecification(title)}
              className="specification-button"
            >
              {title} {specificationsVisible[title] ? "-" : "+"}
            </button>
            {specificationsVisible[title] && (
              <div className="specification-details">
                {Object.entries(
                  swim.PRODUCT_SPECIFICATIONS[index][title]
                ).map(([key, value], idx) => (
                  <p key={idx}>{`${key}: ${value}`}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Accessories */}
      <h2 style={{ textAlign: "center" }}>Accessories</h2>
      <div className="accessories-container">
        {swim.PRODUCT_ACCESSORIES.map((accessory, index) => (
          <div key={index} className="accessory-item">
            <div className="accessory-content">
              <h4>{accessory.title}</h4>
              <img
                src={accessory.image_url}
                alt={`Accessory ${accessory.title}`}
                className="accessory-image"
              />
              <p className="accessory-description">{accessory.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwimDetail;
