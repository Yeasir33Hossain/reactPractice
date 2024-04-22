// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <h2>Sidebar</h2>
      <ul>
        <li><Link to="/json-data">Link 1</Link></li>
        {/* Add other links as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
