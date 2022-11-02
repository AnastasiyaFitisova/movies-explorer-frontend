import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../Register/Register.css';

function Login() {
  return (
    <div className="auth">
      <Link to="/"><div className="auth__logo"></div></Link>
      <p className="auth__title">Рады видеть!</p>
      <form className="auth__form">
      <label className="auth__label">E-mail
          <input className="auth__input"
            type="email"
            name="email"
            placeholder="введите email"
            required
          />
        </label>
        <label className="auth__label">Пароль
          <input className="auth__input"
            type="password"
            name="password"
            placeholder="введите пароль"
            required
          />
        </label>
        <button type="submit" className="auth__button">Войти</button>
      </form>
      <div className="auth__signin">
        <p className="auth__signin-question">Еще не зарегистрированы?&nbsp;
          <Link to="/signup" className="auth__link">Регистрация</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;