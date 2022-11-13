import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../Register/Register.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login({ onLogin }) {

  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.info(data);
    onLogin(data)
  };

  const onError = (errors) => {
    console.error(errors);
  };
  return (
    <div className="auth">
      <Link to="/"><div className="auth__logo"></div></Link>
      <p className="auth__title">Рады видеть!</p>
      <form
        className="auth__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label className="auth__label">E-mail
          <input className="auth__input"
            type="email"
            placeholder="введите email"
            required
            {...register("email")} />
          {errors.email && <p style={{ color: 'red', width: '100%' }}>{errors.email.message}</p>}
        </label>

        <label className="auth__label">Пароль
          <input className="auth__input"
            type="password"
            placeholder="введите пароль"
            required
            {...register("password")} />
          {errors.password && <p style={{ color: 'red', width: '100%' }}>{errors.password.message}</p>}
        </label>

        <button className="auth__button"
          type="submit"
          disabled={!isValid}
          style={{ background: isValid ? '#2BE080' : "#A0A0A0" }}>Войти</button>
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