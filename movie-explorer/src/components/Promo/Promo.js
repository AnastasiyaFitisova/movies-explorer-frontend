import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo-box">
    <div className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </div>
    <NavTab/>
    </section>
  );
}

export default Promo;