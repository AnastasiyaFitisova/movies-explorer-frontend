import React from 'react';
import './MoviesCard.css';
import { Route } from 'react-router-dom';

function MoviesCard({ card, onSave, onDelete, isLiked }) {

  function handleLikeandSave()  {
    onSave(card)
  };

  function handleDelete() {
    onDelete(card)
  };
  
  return (
    <li className="movie-card">
      <div className="movie-information">
        <p className="movie-name">{card.nameRU}</p>
        <p className="movie-duration">{card.duration} м</p>
        <Route path="/movies">
          {isLiked(card)?
          (<button className="movie-likebtn movie-likebtn_activated" type="button" onClick={handleDelete}></button>)
          :(<button className="movie-likebtn" type="button" onClick={handleLikeandSave}></button>)}
        </Route>
        <Route path="/saved-movies">
          <button className="movie-delbtn" type="button"></button>
        </Route>
      </div>
      <a href={card.trailerLink}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}>
          <img className="movie-img"
          src={`https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU} />
      </a>
    </li>
  );
}


export default MoviesCard;