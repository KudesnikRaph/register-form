import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Registration.css';
import Header from '../../components/Header'; 
import {
  isValidEmailSyntax,
  validatePassword,
  validateConfirmPassword,
  validateUsername,
  getEmailSuggestion
} from '../../components/utils/formValidation'; 

function Registration() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState('');
  const [fieldErrors, setFieldErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [name]: false
    }));
  };

  const handleCheckbox = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: !validateUsername(formValues.username),
      email: !isValidEmailSyntax(formValues.email),
      password: !validatePassword(formValues.password),
      confirmPassword: !validateConfirmPassword(formValues.password, formValues.confirmPassword)
    };

    if (Object.values(newErrors).includes(true)) {
      setFieldErrors(newErrors);

      if (newErrors.username) return setErrors('Введите корректное имя пользователя (только буквы)');
      if (newErrors.email) return setErrors('Введите корректный email');
      if (newErrors.password) return setErrors('Пароль должен быть не менее 6 символов');
      if (newErrors.confirmPassword) return setErrors('Пароли не совпадают');
    }

    const suggestion = getEmailSuggestion(formValues.email);
    if (suggestion) {
      setFieldErrors((prev) => ({ ...prev, email: true }));
      return setErrors(`Возможно, вы имели в виду ${suggestion}?`);
    }

    if (!agreed) {
      return setErrors('Необходимо согласиться с условиями');
    }

    setErrors('');
    setFieldErrors({
      username: false,
      email: false,
      password: false,
      confirmPassword: false
    });

    console.log('Форма прошла валидацию:', formValues);
  };

  return (
    <>
      <Header />
      <div className="centrify-reg">
        <form className="form-registration shade" onSubmit={handleSubmit}>
          <h2>Регистрация</h2>

          <div className="text-field text-field_floating">
            <input
              type="text"
              name="username"
              id="username"
              className={`text-field__input ${fieldErrors.username ? 'input-error' : ''}`}
              placeholder=" "
              value={formValues.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="username" className="text-field__label">Имя пользователя</label>
          </div>

          <div className="text-field text-field_floating">
            <input
              type="email"
              name="email"
              id="email"
              className={`text-field__input ${fieldErrors.email ? 'input-error' : ''}`}
              placeholder=" "
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="text-field__label">Эл. почта</label>
          </div>

          <div className="text-field text-field_floating">
            <input
              type="password"
              name="password"
              id="password"
              className={`text-field__input ${fieldErrors.password ? 'input-error' : ''}`}
              placeholder=" "
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="text-field__label">Пароль</label>
          </div>

          <div className="text-field text-field_floating">
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              className={`text-field__input ${fieldErrors.confirmPassword ? 'input-error' : ''}`}
              placeholder=" "
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirm-password" className="text-field__label">Повторить пароль</label>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={handleCheckbox}
              checked={agreed}
              required
            />
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

          {errors && <p className="error-message">{errors}</p>}

          <button
            type="submit"
            disabled={!agreed}
            style={{
              opacity: agreed ? 1 : 0.5,
              cursor: agreed ? 'pointer' : 'not-allowed'
            }}
          >
            Зарегистрироваться
          </button>

          <p className="login-link">
            Уже есть аккаунт? <Link to="/">Страница входа</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration;
