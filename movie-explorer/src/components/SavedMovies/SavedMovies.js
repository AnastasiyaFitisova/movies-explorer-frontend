import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'



function SavedMovies(cards, isLiked, onDelete) {
  return (
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList
          cards={cards}
          isLiked={isLiked}
          onDelete={onDelete}/>
      </section>
  );
};

export default SavedMovies;