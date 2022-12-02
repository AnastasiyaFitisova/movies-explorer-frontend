import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({checked, onChecked}) {

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__switch" 
          type="checkbox"
          checked={checked}
          onChange={onChecked} />
        <span className="checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
};

export default FilterCheckbox;