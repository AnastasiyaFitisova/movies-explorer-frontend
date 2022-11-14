import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


function Movies({onSubmit, cards, isLoading, isNotFound, isFailed, checked, onChecked, onSave, onDelete, isLiked}) {

  return (
      <section className="movies">
        <SearchForm 
        onSubmit={onSubmit}
        checked={checked}
        onChecked={onChecked}
        />
        {isLoading ? (
        <Preloader/>
        ):(
          <MoviesCardList 
        cards={cards}
        isNotFound={isNotFound}
        isFailed={isFailed}
        onSave={onSave}
        onDelete={onDelete}
        isLiked={isLiked}/>
        )}
      </section>
  );
};

export default Movies;