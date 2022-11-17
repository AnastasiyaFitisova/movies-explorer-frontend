import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Register.css';

function Register({onRegister}) {

  const SignupSchema = yup.object().shape({
    name: yup.string().required().matches(/[^a-zа-я ]+$/ , 'Please, use only Latin, Cyrillic, space or hyphen'),
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
    onRegister(data)
  };

  const onError = (errors) => {
    console.error(errors);
  };

  return (
    <div className="auth">
      <Link to="/"><div className="auth__logo"></div></Link>
      <p className="auth__title">Добро пожаловать!</p>
      <form
        className="auth__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label className="auth__label">Имя
          <input className="auth__input"
            type="text"
            placeholder='Введите имя'
            required
            {...register("name")} />
          {errors.name && <p style={{ color: 'red', width: '100%' }}>{errors.name.message}</p>}
        </label>

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
          style={{ background: isValid ? '#2BE080' : "#A0A0A0" }}>Зарегистрироваться</button>
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