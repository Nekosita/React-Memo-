import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
        <span style={{ marginLeft: '10px' }}>
        <Link to="/">Home</Link>
      </span>
      <span style={{ marginLeft: '10px' }}>
        <Link to="/viewA">View A</Link>
        </span>
        <span style={{ marginLeft: '10px' }}>
        <Link to="/viewB">View B</Link>
        </span>
  </nav>
  );
}

export default Header;