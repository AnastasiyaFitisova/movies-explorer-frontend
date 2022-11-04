import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="auth">
      <Link to="/"><div className="auth__logo"></div></Link>
      <p className="auth__title">Добро пожаловать!</p>
      <form className="auth__form">
        <label className="auth__label">Имя
          <input className="auth__input"
            type="name"
            name="name"
            placeholder="введите имя"
            required
          />
        </label>
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
        <button type="submit" className="auth__button">Зарегистрироваться</button>
      </form>
      <div className="auth__signin">
        <p className="auth__signin-question">Уже зарегистрированы?&nbsp;
          <Link to="/signin" className="auth__link">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;