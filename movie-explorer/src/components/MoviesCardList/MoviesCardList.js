import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


function MoviesCardList({cards}) {
  return (
    <section className="movies-list">
    <ul className="movies__cardholder">
      {cards.map((card) => {
        return (
          <MoviesCard
            key={card.id}
            card={card}
            //onCardLike={onCardLike}
            //onCardDelete={onCardDelete}
          />
        )
      }
      )}
    </ul>
  </section>
  )
}

export default MoviesCardList;