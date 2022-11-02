import React from 'react';
import './MoviesCard.css';
import { Route } from 'react-router-dom';

function MoviesCard({ card }) {
  return (
    <li className="movie-card">
      <div className="movie-information">
        <p className="movie-name">{card.name}</p>
        <p className="movie-duration">{card.time}</p>
        <Route path="/movies">
        <button className="movie-likebtn" type="button"></button>
        </Route>
        <Route path="/saved-movies">
        <button className="movie-delbtn" type="button"></button>
        </Route>
      </div>
      <img className="movie-img"
      src={card.img}
      alt={card.name}/>
    </li>
  );
}

export default MoviesCard;