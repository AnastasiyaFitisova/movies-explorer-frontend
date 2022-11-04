import React from 'react';
import './Portfolio.css';
import ImageLink from "../../images/Portfolio/image-link.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link"
            href="https://anastasiyafitisova.github.io/how-to-learn/"
            target="blank"
            rel="noreferrer">
            <p className="portfolio__link-text">Статичный сайт</p>
            <img className="portfolio__link-img"
            src={ImageLink}
            alt="черная стрелка"></img>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link"
            href="https://anastasiyafitisova.github.io/russian-travel/"
            target="blank"
            rel="noreferrer">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img className="portfolio__link-img"
            src={ImageLink}
            alt="черная стрелка"></img>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link"
            href="https://frontanastasiyafitisova.nomoredomains.icu/sign-in"
            target="blank"
            rel="noreferrer">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img className="portfolio__link-img"
            src={ImageLink}
            alt="черная стрелка"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;