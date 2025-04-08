import { Link } from 'react-router-dom';
import './Login.css';
import logo from './assets/logo.1f537a5e.png';

function Login() {
  return (
    <>
      <header className="logo-header">
        <img src={logo} alt="UgleTelecom Logo" />
      </header>

      <div className="centrify-log">
        <form className="form-login shade" action="#" method="post">
          <h2>Вход в личный кабинет</h2>

          {/* Поле Эл. почты с плавающим лейблом */}
          <div className="text-field text-field_floating">
            <input
              className="text-field__input"
              type="text"
              name="login"
              id="login"
              placeholder=" "
              required
            />
            <label className="text-field__label" htmlFor="login">
              Эл. почта
            </label>
          </div>

          {/* Поле Пароля с плавающим лейблом */}
          <div className="text-field text-field_floating">
            <input
              className="text-field__input"
              type="password"
              name="password"
              id="password"
              placeholder=" "
              required
            />
            <label className="text-field__label" htmlFor="password">
              Пароль
            </label>
          </div>

          <button type="submit">Войти</button>

          <p className="register-link">
            Нет аккаунта? <Link to="/Registration">Зарегистрироваться</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
