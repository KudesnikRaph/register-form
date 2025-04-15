import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/headers/Header';
import SocialAuth from '../../components/SocialAuth';
import { isValidEmailSyntax, validatePassword, getEmailSuggestion } from '../../components/utils/formValidation';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState('');
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [name]: false
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFieldErrors = {
      email: !isValidEmailSyntax(formData.email),
      password: !validatePassword(formData.password)
    };
    
    const suggestion = getEmailSuggestion(formData.email);
    if (suggestion) {
      setFieldErrors({ email: true, password: false });
      return setErrors(`Возможно, вы имели в виду ${suggestion}?`);
    }

    if (newFieldErrors.email) {
      setFieldErrors(newFieldErrors);
      return setErrors('Введите корректный email');
    }

    if (newFieldErrors.password) {
      setFieldErrors(newFieldErrors);
      return setErrors('Пароль должен быть не менее 6 символов');
    }

    setErrors('');
    setFieldErrors({ email: false, password: false });
    console.log('Форма прошла валидацию:', formData);
    navigate('/accounts');
  };

  return (
    <>
      <Header />
      <div className="centrify-log">
        <form className="form-login shade" onSubmit={handleSubmit}>
          <h2>Вход в личный кабинет</h2>

          <div className="text-field text-field_floating">
            <input
              className={`text-field__input ${fieldErrors.email ? 'input-error' : ''}`}
              type="text"
              name="email"
              id="login"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="text-field__label" htmlFor="login">
              Эл. почта
            </label>
          </div>

          <div className="text-field text-field_floating">
            <input
              className={`text-field__input ${fieldErrors.password ? 'input-error' : ''}`}
              type="password"
              name="password"
              id="password"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label className="text-field__label" htmlFor="password">
              Пароль
            </label>
          </div>
          
          {errors && <p className="error-message-login">{errors}</p>}
          
          <button type="submit">Войти</button>
          
          <p className="register-link">
            Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
          </p>
          <SocialAuth />
        </form>
      </div>
    </>
  );
}

export default Login;
