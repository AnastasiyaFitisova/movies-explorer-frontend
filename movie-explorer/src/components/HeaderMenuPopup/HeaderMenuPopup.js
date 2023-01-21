import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../../images/Header/profilebtn.svg'
import './HeaderMenuPopup.css';

function HeaderMenuPopup({ isOpen }) {
  return (
    <div className={`popup ${isOpen ? "popup_activated" : ""}`}>
      <ul className="popup__content">
        <li className="popup__item">
          <Link to="/" className="popup__item-text">Главная</Link>
        </li>
        <li className="popup__item">
          <Link to="/movies" className="popup__item-text">Фильмы</Link>
        </li>
        <li className="popup__item">
          <Link to="/saved-movies" className="popup__item-text">Сохраненные фильмы</Link>
        </li>
        <li className="popup__item">
          <Link to="/profile"><img className="popup__item-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenuPopup;