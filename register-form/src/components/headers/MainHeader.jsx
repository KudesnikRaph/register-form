import React from 'react';
import logo from '../../assets/logo.png';
import './mainHeader.css';
import logoutIcon from '../../assets/logout.png';
import profileIcon from '../../assets/profile.png';
import { NavLink, useNavigate } from 'react-router-dom';

function MenuHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Здесь можно добавить логику выхода из системы, например, очистку токена аутентификации
    // После выхода перенаправляем на страницу входа
    navigate('/');
  }

  return (
    <header className="main-header">
      <div className="logo">
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="left-menu">
        <NavLink to="/accounts" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Лицевые счета</NavLink>
        <NavLink to="/payments" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Платежи</NavLink>
        <NavLink to="/history" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>История операций</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Услуги</NavLink>
      </nav>
      <div className="right-menu">
        <button className="profile-btn">
          <img className="profile-icon" src={profileIcon} alt="Профиль" />
          Профиль
        </button>
        <button className="logout-btn"  onClick={handleLogout}>
          <img className="logout-icon" src={logoutIcon} alt="Выход" />
          Выйти
        </button>
      </div>
    </header>
  );
}

export default MenuHeader;
