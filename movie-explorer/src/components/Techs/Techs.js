import React from 'react';
import './Techs.css';
import '../AboutProject/AboutProject.css'

function Techs() {
  return (
    <section className="techs">
      <div className="about__title-box">
        <h2 className="about__title about__title_techs">Технологии</h2>
      </div>
      <div className="techs-content">
        <p className="techs__subtitle">7 технологий</p>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__technologies">
          <li className="techs__item">
            <p className="techs__techs">HTML</p>
          </li>
          <li className="techs__item">
            <p className="techs__techs">CSS</p>
          </li>
          <li className="techs__item">
            <p className="techs__techs">JS</p>
          </li>
          <li className="techs__item">
            <p className="techs__techs">React</p>
          </li>
          <li className="techs__item">
            <p className="techs__techs">Git</p>
          </li>
          <li className="techs__item">
            <p className="techs__techs">Express.js</p>
          </li>
          <li className="techs__item">
            <p className="techs__techs">MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;