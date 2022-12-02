import React from 'react';
import './AboutMe.css';
import '../AboutProject/AboutProject.css';
import Portfolio from '../Portfolio/Portfolio';
import studentPhoto from '../../images/AboutMe/student-photo.JPG';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about__title-box">
        <h2 className="about__title">Студент</h2>
      </div>
      <div className="about-me__box">
        <div className="about-me__content">
          <p className="about-me__name">Анастасия</p>
          <p className="about-me__position">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me_info">
            Уже почти 8 лет я работаю инженером по качеству на производственных предприятиях, связанных с автомобилестроением. Я решила устроить себе челлендж и кардинально сместить проффесиональные интересы - освоить веб-разработку.
            Моя цель - создавать веб сайты и приложения, помогая тем самым интересным продуктам, идеям и их авторам найти свою аудиторию.
            Одно из моих самых сильных увлечений - разработка пешеходных маршрутов в разных городах России и их прохождение. Было бы здорово применить свои новые знания в т.ч. сфере развития туризма. 
          </p>
          <a href="https://github.com/AnastasiyaFitisova"
          className="about-me_link"
          target="_blank"
          rel="noreferrer">
            Github</a>
        </div>
        <img
        className="about-me_photo"
        alt="фото"
        src={studentPhoto}></img>
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;