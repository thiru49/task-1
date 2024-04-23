// Folder.js

import React from 'react';
import { Link } from 'react-router-dom';

const Folder = () => {
  
  const packages = [
    { id: 1, name: 'Package 1' },
    { id: 2, name: 'Package 2' },
    { id: 3, name: 'Package 3' },
  
  ];

  return (
    <div>
      <h2>All Packages</h2>
      <ul>
        {packages.map((pack) => (
          <li key={pack.id}>
          
            <Link to={`/packages/${pack.id}`}>{pack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Folder;
