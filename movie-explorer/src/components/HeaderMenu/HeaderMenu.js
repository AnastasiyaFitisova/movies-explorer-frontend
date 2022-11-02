import React from 'react';
import './HeaderMenu.css';
import HeaderMenuPopup from '../HeaderMenuPopup/HeaderMenuPopup';

function HeaderMenu() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setIsPopupOpen(!isPopupOpen);
}
  return (
    <div className="menu">
      <input type="checkbox" className="menu__toggle" />
      <label className='menu__btn' type="button" onClick={handleMenuOpen}>
        <span></span>
      </label>
      <HeaderMenuPopup
      isOpen={isPopupOpen} />
    </div>
  )
}

export default HeaderMenu;