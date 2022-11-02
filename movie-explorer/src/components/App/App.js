import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from "react-router-dom";
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

function App() {

  const location = useLocation();

  return (
    <div className="page">

      {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile" ?
      <Header /> : ''}

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="*">
          <Error />
        </Route>

      </Switch>

      {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ?
      <Footer /> : ''}

    </div>
  );
}

export default App;
