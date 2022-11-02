import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
      <div className="search-box">
        <form className="search-box__form">
          <input
            className="search-box__input"
            type="text"
            placeholder="Фильм"
            name="film"
            required
          />
          <button className="search-box__button" type="submit"></button>
        </form>
        <FilterCheckbox />
      </div>
  );
};

export default SearchForm;