import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">TOP</Link></li>
          <li><Link to="/next">NEXT</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
