import React from 'react';
import './Footer.css';;

function Footer() {
  return (
    <section className="footer">
      <div className="footer__project-description">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__navigation">
        <p className="footer__authorize">&copy;2022</p>
        <nav className="footer__nav-links">
          <a className="footer__link" 
          href="https://practicum.yandex.ru/"
          target="_blank"
          rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" 
          href="https://github.com/AnastasiyaFitisova" 
          target="_blank"
          rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;