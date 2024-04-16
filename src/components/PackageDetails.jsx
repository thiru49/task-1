// PackageDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
  // Get the package ID from the URL params
  const { id } = useParams();

  // Dummy package data (replace with actual data fetched from backend)
  const packageData = {
    1: { name: 'Package 1', description: 'Description for Package 1', images: ['image1.jpg', 'image2.jpg'] },
    2: { name: 'Package 2', description: 'Description for Package 2', images: ['image3.jpg', 'image4.jpg'] },
    3: { name: 'Package 3', description: 'Description for Package 3', images: ['image5.jpg', 'image6.jpg'] },
    // Add more package details as needed
  };

  // Fetch package details based on the package ID
  const selectedPackage = packageData[id];

  // If the package ID doesn't exist or is invalid, display an error message
  if (!selectedPackage) {
    return <div>Package not found.</div>;
  }

  // Otherwise, display package details
  return (
    <div>
      <h2>{selectedPackage.name}</h2>
      <p>{selectedPackage.description}</p>
      <h3>Images:</h3>
      <div>
        {selectedPackage.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;
