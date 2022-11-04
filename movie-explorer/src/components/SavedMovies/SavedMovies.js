import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { movies } from '../../utils/movies';


function SavedMovies() {
  return (
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList 
        cards={movies}/>
      </section>
  );
};

export default SavedMovies;