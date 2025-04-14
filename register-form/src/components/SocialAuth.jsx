import React from 'react';
import './SocialAuth.css';
import yandexIcon from '../assets/Yandex_icon.png'; // Adjust the path as necessary

function SocialAuth() {
  return (
    <div className="social-auth">
      <hr className="divider" />
      <p className="social-auth-title">Или войдите с помощью</p>
      <div className="social-auth-icons">
        <div className="yandex-btn" title="Войти через Яндекс">
          <img src={yandexIcon} alt="Яндекс" />
        </div>
      </div>
    </div>
  );
}


export default SocialAuth;
