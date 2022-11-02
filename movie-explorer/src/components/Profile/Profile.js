import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <p className="profile__title">Привет, !</p>
      <form className="profile__form">
          <div className="profile__line"><input className="profile__input"
            type="name"
            name="name"
            placeholder="Имя"
            required
          /></div>
          <input className="profile__input"
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
        <button type="submit" className="profile__correct-button">Редактировать</button>
        <Link to="/" className="profile__exit-button">Выйти из аккаунта</Link>
      </form>
    </div>
  );
};

export default Profile;