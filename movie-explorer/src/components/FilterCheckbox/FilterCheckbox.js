import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  const [checked, setChecked] = React.useState(false);

  function handleFilter() {
    setChecked(true)
  }

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__switch"
          type="checkbox"
          checked={checked}
          onChange={handleFilter} />
        <span className="checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
};

export default FilterCheckbox;