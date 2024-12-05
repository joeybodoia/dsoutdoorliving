import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

const Swim = () => {
  const [swimProducts, setSwimProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/swimspas`)
      .then((response) => {
        setSwimProducts(response.data);
      })  
      .catch((error) => {
        console.error('Error fetching swim spa products:', error);
      }); 
  }, []);

  const handleProductClick = (productName) => {
    navigate(`/swimspas/${productName}`);
  };  

  return (
    <div className="spa-container">
      <h1>Our Swim Spas</h1>
      <div className="spa-list">
        {swimProducts.map((swim, index) => (
          <div 
            key={index} 
            className="spa-item" 
            onClick={() => handleProductClick(swim.PRODUCT_NAME)}
          >   
            <img 
              src={Object.values(swim.IMAGE_URLS)[0]} 
              alt={`Swim Spa ${swim.PRODUCT_NAME}`} 
              className="spa-image"
            />  
            <h2>{swim.PRODUCT_NAME}</h2>
            <p>
              <i className="fas fa-users"></i> {/* Icon for capacity */}
              {swim.PRODUCT_DESCRIPTION["Number of People"]}
            </p>
            <p className="right-text">
              <i className="fas fa-box"></i> {/* Icon for dimensions */}
              {swim.PRODUCT_SPECIFICATIONS[0]["General Specifications"]["Measurements (inch)"]}
            </p>
          </div>
        ))} 
      </div>
    </div>
  );  
};

export default Swim;

