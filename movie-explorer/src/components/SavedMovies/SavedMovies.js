import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader';



function SavedMovies({ cards, isLiked, onDelete, isLoading, onSubmit, checked, onChecked, isNotFound, isFailed }) {
  return (
    <section className="saved-movies">
      <SearchForm
        onSubmit={onSubmit}
        checked={checked}
        onChecked={onChecked} />
      {isLoading ? (Preloader) : (
        <MoviesCardList
          isNotFound={isNotFound}
          isFailed={isFailed}
          cards={cards}
          isLiked={isLiked}
          onDelete={onDelete} />)}
    </section>
  );
};

export default SavedMovies;