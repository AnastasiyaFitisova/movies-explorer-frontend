import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


function Movies({onSubmit, cards, isLoading, isNotFound, isFailed, checked, onChecked}) {

  return (
      <section className="movies">
        <SearchForm 
        onSubmit={onSubmit}
        checked={checked}
        onChange={onChecked}
        />
        {isLoading ? (
        <Preloader/>
        ):(
          <MoviesCardList 
        cards={cards}
        isNotFound={isNotFound}
        isFailed={isFailed}/>
        )}
      </section>
  );
};

export default Movies;