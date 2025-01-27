import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);

const Spa = () => {
  const [spaProducts, setSpaProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/spas/`)
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
              <p>
                <i className="fas fa-users"></i>
                {spa.PRODUCT_DESCRIPTION["Number of People"]}
              </p>
              <p className="right-text">
                <i className="fas fa-box"></i>
                {spa.PRODUCT_SPECIFICATIONS[0]["General Specifications"]["Measurements (inch)"]}
              </p>
          </div>
        ))} 
      </div>
    </div>
  );  
};

export default Spa;

