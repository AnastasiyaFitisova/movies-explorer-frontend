import React from 'react';
import './MoviesCard.css';
import { Route } from 'react-router-dom';

function MoviesCard({ card }) {
  return (
    <a href={card.trailerLink} 
    target="_blank"
    rel="noreferrer"
    style={{textDecoration: 'none'}}>
      <li className="movie-card">
      <div className="movie-information">
        <p className="movie-name">{card.nameRU}</p>
        <p className="movie-duration">{card.duration} м</p>
        <Route path="/movies">
        <button className="movie-likebtn" type="button"></button>
        </Route>
        <Route path="/saved-movies">
        <button className="movie-delbtn" type="button"></button>
        </Route>
      </div>
      <img className="movie-img"
      src={`https://api.nomoreparties.co/${card.image.url}`}
      alt={card.nameRU}/>
    </li></a>
  );
}

export default MoviesCard;