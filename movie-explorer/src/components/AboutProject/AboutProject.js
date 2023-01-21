import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about">
      <div className="about__title-box">
        <h2 className="about__title">О проекте</h2>
      </div>
      <ul className="about__duration">
        <li className="about__steps">
          <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about__steps">
          <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about_time-scale">
        <div className="about__week">
          <div className="about__week-item">
            <p className="about__week-text">1 неделя</p>
          </div>
          <p className="about__week-devtype">Back-end</p>
        </div>
        <div className="about__week about__week_front">
          <div className="about__week-item about__week-item_front">
            <p className="about__week-text">4 недели</p>
          </div>
          <p className="about__week-devtype">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;