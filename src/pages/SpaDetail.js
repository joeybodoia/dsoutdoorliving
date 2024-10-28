import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SpaDetail = () => {
  const { productName } = useParams(); // Get product name from URL
  const [spa, setSpa] = useState(null);

  useEffect(() => {
    // Fetch the specific spa product data using the product name
    axios.get(`http://localhost:3001/api/spas/${productName}`)
      .then((response) => {
        setSpa(response.data);
      })
      .catch((error) => {
        console.error('Error fetching spa details:', error);
      });
  }, [productName]);

  if (!spa) return <div>Loading...</div>; // Loading state

  return (
    <div className="spa-detail">
      <h1>{spa.PRODUCT_NAME}</h1>
      <img src={Object.values(spa.IMAGE_URLS)[0]} alt={`Spa ${spa.PRODUCT_NAME}`} />
      <h3>Description</h3>
      <p>{spa.PRODUCT_DESCRIPTION.Description}</p>
      <p>Seats: {spa.PRODUCT_DESCRIPTION['Number of Seats']}</p>
      <p>Gallons: {spa.PRODUCT_DESCRIPTION.Gallons}</p>
      <p>Weight: {spa.PRODUCT_DESCRIPTION.Weight} lbs</p>
      {/* Add more detailed information as needed */}
    </div>
  );
};

export default SpaDetail;

