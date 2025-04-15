import React from 'react';
import logo from '../../assets/logo.png';
import './header.css';

function Header() {
  return (
    <>
    <header className="main-header">
          <div className="logo">
            <img src={logo} alt="Логотип" />
          </div>
    </header>
    </>
  );
}

export default Header;