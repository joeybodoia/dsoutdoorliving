import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Spa = () => {
  const [spaProducts, setSpaProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/spas')
      .then((response) => {
        setSpaProducts(response.data);
      })  
      .catch((error) => {
        console.error('Error fetching spa products:', error);
      }); 
  }, []);

  const handleProductClick = (productName) => {
    navigate(`/spa/${productName}`);
  };

  return (
    <div className="spa-container">
      <h1>Our Spas</h1>
      <div className="spa-list">
        {spaProducts.map((spa, index) => (
          <div 
            key={index} 
            className="spa-item" 
            onClick={() => handleProductClick(spa.PRODUCT_NAME)}
          >
            <img 
              src={Object.values(spa.IMAGE_URLS)[0]} 
              alt={`Spa ${spa.PRODUCT_NAME}`} 
              className="spa-image"
            />
            <h2>{spa.PRODUCT_NAME}</h2>
            <p>Number of People: {spa.PRODUCT_DESCRIPTION["Number of People"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spa;

