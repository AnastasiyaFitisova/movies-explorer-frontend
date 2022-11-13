import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation, useHistory } from "react-router-dom";
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

function App() {

  const location = useLocation();
  const history = useHistory();
  //регистрация, вход
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(null);
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


  //вход и регистрация, выход
  const onRegister = (data) => {
    return auth.register(data)
      .then(() => {
        onLogin({
          email: data.email,
          password: data.password,
        });
        setIsSuccess(true);
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
      })
      .catch((err) => {
        console.log(err);
      })
  };

  //информация о пользователе
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
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
    const savedInput = localStorage.getItem('searchValue');
    moviesFilter(savedInput);
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
  }

  function moviesFilter(data) {
    const filterByInput = (i) => {
      return JSON.stringify(i.nameRU)
        .toLowerCase().includes(data);
    };
    const filterByTime = (i) => {
        return i.duration <= 52
    };
    const moviesArray = JSON.parse(localStorage.getItem('moviescards')).filter(filterByInput)
    setMovies(moviesArray);
    localStorage.setItem('filterdcards', JSON.stringify(moviesArray));
    localStorage.setItem('searchValue', data);
   
    if (moviesArray.length === 0) {
      setIsNotFound(true)
    } else {
      setIsNotFound(false)
    }
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile" ?
          <Header /> : ''}

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
                />
              )}
            </Route>

            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login
                  onLogin={onLogin}
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
              onChange={handleChecked}
            />

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
            />

            <Route path="*">
              <Error />
            </Route>

            <Route>
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Redirect to="/signin" />
              )}
            </Route>

          </Switch>

        </main>

        {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ?
          <Footer /> : ''}

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
