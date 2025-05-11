import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>TeleHealth</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/consultation">Consultation</Link></li>
        <li><Link to="/transcript">Transcript</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
