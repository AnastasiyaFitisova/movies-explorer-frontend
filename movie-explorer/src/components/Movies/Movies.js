import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { movies } from '../../utils/movies';


function Movies() {
  return (
      <section className="movies">
        <SearchForm />
        <MoviesCardList 
        cards={movies}/>
        <div className="movies__button-box">
          <button className="movies__button">Еще</button>
        </div>
      </section>
  );
};

export default Movies;