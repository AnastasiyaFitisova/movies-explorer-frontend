import React from 'react';
import { useLocation } from "react-router-dom";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onSubmit, checked, onChecked}) {

  //фильмы
  const savedInput = localStorage.getItem('searchValue');
  const [searchValue, setSearchValue] = React.useState(savedInput);

  function handleSearchChange(evt) {
    setSearchValue(evt.target.value)
  };
  function handlerSubmit(evt) {
    evt.preventDefault();
    onSubmit(searchValue);
  };

  //сохраненные фильмы
  const savedInputSavedPage = localStorage.getItem('searchValueSaved');
  const [searchValueSaved, setSearchValueSaved] = React.useState(savedInputSavedPage);

  function handleSearchChangeSaved(evt) {
    setSearchValueSaved(evt.target.value)
  };
  function handlerSubmitSaved(evt) {
    evt.preventDefault();
    onSubmit(searchValueSaved);
  };

  const location = useLocation();
  const moviesPage = location.pathname === "/movies"

  return (
      <div className="search-box">
        <form className="search-box__form"
        onSubmit={moviesPage? handlerSubmit : handlerSubmitSaved}>
          <input
            className="search-box__input"
            type="text"
            placeholder="Фильм"
            name="film"
            value={moviesPage? (searchValue || '') : (searchValueSaved || '')}
            onChange={moviesPage? handleSearchChange : handleSearchChangeSaved}
          />
          <button className="search-box__button" type="submit"></button>
        </form>
        <FilterCheckbox 
        checked={checked}
        onChecked={onChecked}/>
      </div>
  );
};

export default SearchForm;