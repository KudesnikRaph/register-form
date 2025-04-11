import React from 'react';
import logo from '../assets/logo.png';
import './header.css';

function Header() {
  return (
    <header className="logo-header">
      <img src={logo} alt="UgleTelecom Logo" />
    </header>
  );
}

export default Header;