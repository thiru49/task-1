// Folder.js

import React from 'react';
import { Link } from 'react-router-dom';

const Folder = () => {
  // Dummy data for packages (replace with actual data fetched from backend)
  const packages = [
    { id: 1, name: 'Package 1' },
    { id: 2, name: 'Package 2' },
    { id: 3, name: 'Package 3' },
    // Add more packages as needed
  ];

  return (
    <div>
      <h2>All Packages</h2>
      <ul>
        {packages.map((pack) => (
          <li key={pack.id}>
            {/* Link to the PackageDetails component with the package ID */}
            <Link to={`/packages/${pack.id}`}>{pack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Folder;
