import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
import './Header.css';
import HeaderLogo from '../../images/Header/logo.svg'
import HeaderBtn from '../../images/Header/profilebtn.svg'
import HeaderMenu from '../HeaderMenu/HeaderMenu';

function Header({loggedIn}) {
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

      <Route exact path="/">
        {!loggedIn? (
        <nav className='header__navigation'>
          <Link to="/signup" className="header__link">Регистрация</Link>
          <Link to="/signin" className="header__button">Войти</Link>
        </nav>) : (
          <>
          <nav className='header__movies-navigation'>
          <div className="header__movies-nav">
            <Link to="/movies" className="header__link">Фильмы</Link>
            <Link to="/saved-movies" className="header__link">Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_place_movie"><img className="header__btn-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </nav>
        <HeaderMenu />
        </>
        )}
        
      </Route>

      <Route path="/movies">
        <nav className='header__movies-navigation'>
          <div className="header__movies-nav">
            <Link to="/movies" className="header__link header__link_place_movie">Фильмы</Link>
            <Link to="/saved-movies" className="header__link header__link_place_movie">Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_place_movie"><img className="header__btn-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </nav>
        <HeaderMenu />
      </Route>

      <Route path="/saved-movies">
        <nav className='header__movies-navigation'>
          <div className="header__movies-nav">
            <Link to="/movies" className="header__link header__link_place_movie">Фильмы</Link>
            <Link to="/saved-movies" className="header__link header__link_place_movie">Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_place_movie"><img className="header__btn-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </nav>
        <HeaderMenu />
      </Route>

      <Route path="/profile">
        <nav className='header__movies-navigation'>
          <div className="header__movies-nav">
            <Link to="/movies" className="header__link header__link_place_movie">Фильмы</Link>
            <Link to="/saved-movies" className="header__link header__link_place_movie">Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_place_movie"><img className="header__btn-img" src={HeaderBtn} alt="кнопка аккаунт" /></Link>
        </nav>
        <HeaderMenu />
      </Route>

    </header >
  );
};

export default Header;