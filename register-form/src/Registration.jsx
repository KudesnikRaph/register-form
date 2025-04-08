import { Link } from 'react-router-dom';
import './Registration.css';
import logo from './assets/logo.1f537a5e.png';

function Registration() {
  return (
    <>
      <header className="logo-header">
        <img src={logo} alt="UgleTelecom Logo" />
      </header>

      <div className="centrify-reg">
        <form className="form-registration shade" action="#" method="post">
          <h2>Регистрация</h2>

          <div className="text-field text-field_floating">
            <input type="text" name="username" id="username" className="text-field__input" placeholder=" " required />
            <label htmlFor="username" className="text-field__label">Имя пользователя</label>
          </div>

          <div className="text-field text-field_floating">
            <input type="email" name="email" id="email" className="text-field__input" placeholder=" " required />
            <label htmlFor="email" className="text-field__label">Эл. почта</label>
          </div>

          <div className="text-field text-field_floating">
            <input type="password" name="password" id="password" className="text-field__input" placeholder=" " required />
            <label htmlFor="password" className="text-field__label">Пароль</label>
          </div>

          <div className="text-field text-field_floating">
            <input type="password" name="confirm-password" id="confirm-password" className="text-field__input" placeholder=" " required />
            <label htmlFor="confirm-password" className="text-field__label">Повторить пароль</label>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              Я ознакомился(-ась) и согласен(-на) с условиями&nbsp; 
              <a href="https://lk.iqdata.center/docs/agreement.pdf" target="_blank" rel="noopener noreferrer">
                Пользовательского соглашения
              </a>
              &nbsp;и даю согласие на обработку&nbsp;
              <a href="https://lk.iqdata.center/docs/personal.pdf" target="_blank" rel="noopener noreferrer">
                персональных данных.
              </a>
            </label>
          </div>

          <button type="submit">Зарегистрироваться</button>

          <p className="login-link">
            Уже есть аккаунт? <Link to="/">Страница входа</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration;
