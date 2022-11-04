import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <section className="landing">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </section>
  );
}

export default Main;