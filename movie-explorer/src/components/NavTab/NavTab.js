import React from 'react';
import { Link } from "react-scroll";
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <Link className="nav-tab__link"
        to="about"
        smooth={true}
        duration={500}>
        О проекте</Link>
      <Link className="nav-tab__link"
        to="techs"
        smooth={true}
        duration={500}>
        Технологии</Link>
      <Link className="nav-tab__link"
        to="about-me"
        smooth={true}
        duration={500}>
        Студент</Link>
    </nav>
  );
}

export default NavTab;