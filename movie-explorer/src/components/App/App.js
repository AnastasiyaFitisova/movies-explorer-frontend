import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation, useHistory} from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Error from '../Error/Error';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/Auth';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import {
  SHORT_FILM_DURATION
} from '../../utils/constants';

function App() {

  const location = useLocation();
  const history = useHistory();
  //регистрация, вход
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(true);
  //информация о пользователе
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isUserInfoChangeOk, setIsUserInfoChangeOk] = React.useState(false);
  const [isUserInfoChangeNok, setIsUserInfoChangeNok] = React.useState(false);
  //поиск фильмов
  const [movies, setMovies] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  //сохранение и поиск фильмов на своей странице
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesFilter, setSavedMoviesFilter] = React.useState([]);
  const [checkedSaved, setCheckedSaved] = React.useState(false);

  //вход и регистрация, выход
  const onRegister = (data) => {
    return auth.register(data)
      .then(() => {
        onLogin({
          email: data.email,
          password: data.password,
        });
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
  };

  const onLogin = (data) => {
    return auth.authorize(data)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res)
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
  };

  const onLogout = () => {
    return auth.logout()
      .then(() => {
        setLoggedIn(false);
        history.push('/');
        localStorage.clear();
        setMovies([]);
        setSavedMoviesFilter([])
        setChecked(false);
        setSavedMovies([]);
        setCheckedSaved(false);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const updateAuthStatus = () => {
    setIsSuccess(true);
  };

  //информация о пользователе
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        if(!res) {
          onLogout();
        } else {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 401') {
          setLoggedIn(false);
          setMovies([]);
          setSavedMoviesFilter([])
          setSavedMovies([]);
          history.push('/');
          localStorage.clear();
        }
        console.log(err);
      })
  }, [loggedIn, history]);

  function handleUpdateUser(data) {
    api.correctUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setIsUserInfoChangeOk(true);
        setIsUserInfoChangeNok(false)
      })
      .catch((err) => {
        console.log(err);
        setIsUserInfoChangeOk(false);
        setIsUserInfoChangeNok(true)
      })
  };

  //поиск фильмов
  React.useEffect(() => {
    const checkboxStatus = localStorage.getItem('checkboxStatus');
    setChecked(JSON.parse(checkboxStatus));
  }, []);

  function handleFilmSearch(data) {
    setIsLoading(true);
    moviesApi.getMoviesCards()
      .then((res) => {
        localStorage.setItem('moviescards', JSON.stringify(res));
        moviesFilter(data)
      })
      .catch((err) => {
        console.log(err)
        setIsFailed(true)
      })
      .finally(() => setIsLoading(false));

  };

  function handleChecked() {
    setChecked(!checked);
    localStorage.setItem('checkboxStatus', !checked);
  }

  const moviesFilter = React.useCallback((data) => {

    const cardsLocalStorage = JSON.parse(localStorage.getItem('moviescards'));

    if (cardsLocalStorage) {

      const filterByInput = (i) => {
        return JSON.stringify(i.nameRU)
          .toLowerCase().includes(data);
      };
      const moviesArray = cardsLocalStorage.filter(filterByInput);
      setMovies(moviesArray);
      localStorage.setItem('filterdcards', JSON.stringify(moviesArray));
      localStorage.setItem('searchValue', data);

      if (moviesArray.length === 0) {
        setIsNotFound(true)
      } else {
        setIsNotFound(false)
      };

      const filterByTime = (i) => {
        return i.duration <= SHORT_FILM_DURATION;
      };

      if (checked) {
        const filterShort = moviesArray.filter(filterByTime);
        setMovies(filterShort);
        if (filterShort.length === 0) {
          setIsNotFound(true)
        } else {
          setIsNotFound(false)
        };
      }
    }
  }, [checked]
  );

  React.useEffect(() => {
    const savedInput = localStorage.getItem('searchValue');
    moviesFilter(savedInput);
  }, [moviesFilter, checked]);

  //сохранение фильмов
  function handleLikeandSave(data) {
    api.putLikeandSave(data)
      .then((res) => {
        setSavedMovies([res, ...savedMovies])
      })
  };

  const isLiked = (data) => {
    return savedMovies.some(i => i.movieId === data.id && i.owner === currentUser._id)
  }

  function handleMoviesDelete(data) {
    const card = savedMovies.find(i => i.movieId === (data.id || data.movieId) && i.owner === currentUser._id)
    if (!card) return
    api.disLikeAndDelete(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(c => c._id !== card._id))
      })
      .catch((err) => {
        console.log(err);
      })
  };

  React.useEffect(() => {
    if (loggedIn) {
      api.addSavedCardsOnPage()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }

  }, [loggedIn]);

  React.useEffect(() => {
    if (location.pathname !== "/saved-movies") {
      setSavedMoviesFilter(savedMovies);
      setIsNotFound(false);
    }
  }, [location.pathname, savedMovies]);

  //поиск и фильтр фильмов на своей странице
  function handleSavedFilmSearch(data) {

    const filterByInputSaved = (i) => {
      return JSON.stringify(i.nameRU)
        .toLowerCase().includes(data);
    };

    const savedMoviesArray = savedMovies.filter(filterByInputSaved)

    setSavedMoviesFilter(savedMoviesArray);

    if (savedMoviesArray.length === 0) {
      setIsNotFound(true)
    } else {
      setIsNotFound(false)
    };

    const filterByTime = (i) => {
      return i.duration <= SHORT_FILM_DURATION;
    };

    if (checkedSaved) {
      const filterShortSaved = savedMovies.filter(filterByTime);
      setSavedMoviesFilter(filterShortSaved);
      if (filterShortSaved.length === 0) {
        setIsNotFound(true)
      } else {
        setIsNotFound(false)
      };
    }
  }

  function handleSavedChecked() {
    setCheckedSaved(!checkedSaved);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile" ?
          <Header loggedIn={loggedIn}/> : ''}

        <main className="main">

          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register
                  onRegister={onRegister}
                  isSuccess={isSuccess}
                  updateAuthStatus={updateAuthStatus}
                />
              )}
            </Route>

            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login
                  onLogin={onLogin}
                  isSuccess={isSuccess}
                  updateAuthStatus={updateAuthStatus}
                />
              )}
            </Route>

            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onCorrect={handleUpdateUser}
              OnCorrectIsOk={isUserInfoChangeOk}
              OnCorrectIsNok={isUserInfoChangeNok}
              onLogout={onLogout}
            />

            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              onSubmit={handleFilmSearch}
              cards={movies}
              isLoading={isloading}
              isNotFound={isNotFound}
              isFailed={isFailed}
              checked={checked}
              onChecked={handleChecked}
              onSave={handleLikeandSave}
              onDelete={handleMoviesDelete}
              isLiked={isLiked}
            />

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              cards={savedMoviesFilter}
              isLiked={isLiked}
              onDelete={handleMoviesDelete}
              isLoading={isloading}
              onSubmit={handleSavedFilmSearch}
              checked={checkedSaved}
              onChecked={handleSavedChecked}
              isNotFound={isNotFound}
              isFailed={isFailed}
            />

            <Route path="*">
              <Error />
            </Route>

          </Switch>

        </main>

        {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ?
          <Footer /> : ''}


      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
