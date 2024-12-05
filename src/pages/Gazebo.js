import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

const Gazebo = () => {
  const [gazeboProducts, setGazeboProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/gazebos`)
      .then((response) => {
        setGazeboProducts(response.data);
      })  
      .catch((error) => {
        console.error('Error fetching gazebo products:', error);
      }); 
  }, []);

  const handleProductClick = (productName) => {
    navigate(`/gazebos/${productName}`);
  };  

  return (
    <div className="spa-container">
      <h1>Our Gazebos</h1>
      <div className="spa-list">
        {gazeboProducts.map((gazebo, index) => (
          <div 
            key={index} 
            className="spa-item" 
            onClick={() => handleProductClick(gazebo.PRODUCT_NAME)}
          >   
            <img 
              src={Object.values(gazebo.IMAGE_URLS)[0]} 
              alt={`Gazebo ${gazebo.PRODUCT_NAME}`} 
              className="spa-image"
            />  
            <h2>{gazebo.PRODUCT_NAME}</h2>
            <p className="right-text">
              <i className="fas fa-box"></i> {/* Icon for Measurements */}
              {gazebo.PRODUCT_SPECIFICATIONS[0]["General Specifications"]["Measurements (inch)"]}
            </p>
          </div>
        ))} 
      </div>
    </div>
  );  
};

export default Gazebo;

