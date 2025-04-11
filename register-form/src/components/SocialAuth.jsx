import React from 'react';
import './SocialAuth.css';

function SocialAuth() {
  return (
    <div className="social-auth">
      <hr className="divider" />
      <p className="social-auth-title">Или войдите с помощью</p>
      <div className="social-auth-icons">
        <a href="#" title="Госуслуги">
          <img src="/icons/gosuslugi.svg" alt="Госуслуги" />
        </a>
        <a href="#" title="Яндекс">
          <img src="/icons/yandex.svg" alt="Яндекс" />
        </a>
        <a href="#">
          <img src="/icons/eshield.svg" alt="Esh" />
        </a>
      </div>
    </div>
  );
}

export default SocialAuth;