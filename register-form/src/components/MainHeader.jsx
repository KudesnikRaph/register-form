import React from 'react';
import logo from '../assets/logo.png';
import './mainHeader.css';
import logoutIcon from '../assets/logout.png';
import profileIcon from '../assets/profile.png';

function MenuHeader() {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="left-menu">
        <a href="#" className='tab active'>Лицевые счета</a>
        <a href="#" className='tab active'>Платежи</a>
        <a href="#" className='tab active'>История операций</a>
        <a href="#" className='tab active'>Услуги</a>
      </nav>
      <div className="right-menu">
        <button className="profile-btn">
          <img className="profile-icon" src={profileIcon} alt="Профиль" />
          Профиль
        </button>
        <button className="logout-btn">
          <img className="logout-icon" src={logoutIcon} alt="Выход" />
          Выйти
        </button>
      </div>
    </header>
  );
}

export default MenuHeader;
