import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onSubmit, checked, onChecked}) {

  const savedInput = localStorage.getItem('searchValue');

  const [searchValue, setSearchValue] = React.useState(savedInput);

  function handleSearchChange(evt) {
    setSearchValue(evt.target.value)
  };
  function handlerSubmit(evt) {
    evt.preventDefault();
    onSubmit(searchValue);
  };

  return (
      <div className="search-box">
        <form className="search-box__form"
        onSubmit={handlerSubmit}>
          <input
            className="search-box__input"
            type="text"
            placeholder="Фильм"
            name="film"
            value={searchValue}
            onChange={handleSearchChange}
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