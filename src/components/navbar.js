import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar gaps flex">
    <h1>Bookstore CMS</h1>
    <ul className="gaps flex">
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <button type="button" className="icon-button">
      <span className="material-icons">person</span>
    </button>
  </div>
);

export default Navbar;
