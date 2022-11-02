import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
import './Header.css';
import HeaderLogo from '../../images/Header/logo.svg'
import HeaderBtn from '../../images/Header/profilebtn.svg'
import HeaderMenu from '../HeaderMenu/HeaderMenu';

function Header() {
  const location = useLocation();
  return (
    <header className={location.pathname === '/'
      ? 'header'
      : location.pathname === '/movies'
        ? 'header header_place_movies'
        : location.pathname === '/saved-movies'
          ? 'header header_place_movies'
          : location.pathname === '/profile'
            ? 'header header_place_movies' : 'header'}>
      <Link to="/"><img className="header__logo"
        src={HeaderLogo}
        alt="логотип страницы"
      /></Link>

      <nav className={location.pathname === '/'
        ? 'header__navigation'
        : location.pathname === '/movies'
          ? 'header__navigation header__navigation_place_movies'
          : location.pathname === '/saved-movies'
            ? 'header__navigation header__navigation_place_movies'
            : location.pathname === '/profile'
              ? 'header__navigation header__navigation_place_movies' : 'header__navigations'}>

        <Route exact path="/">
          <Link to="/signup" className="header__link">Регистрация</Link>
          <Link to="/signin" className="header__button">Войти</Link>
        </Route>

        <Route path="/movies">
          <div className="header__movies-nav">
            <Link to="/movies" className="header__link header__link_place_movie">Фильмы</Link>
            <Link to="/saved-movies" className="header__link header__link_place_movie">Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_place_movie"><img className="header__btn-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </Route>

        <Route path="/saved-movies">
          <div className="header__movies-nav">
            <Link to="/movies" className="header__link header__link_place_movie">Фильмы</Link>
            <Link to="/saved-movies" className="header__link header__link_place_movie">Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_place_movie"><img className="header__btn-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </Route>

        <Route path="/profile">
          <div className="header__movies-nav">
            <Link to="/movies" className="header__link header__link_place_movie">Фильмы</Link>
            <Link to="/saved-movies" className="header__link header__link_place_movie">Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_place_movie"><img className="header__btn-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </Route>
      </nav>

      <HeaderMenu />
    </header>
  );
};

export default Header;