"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faUser,
  faEnvelope,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#about-me");

  return (
    <nav>
      <div className="nav__name">
        <span>Hi, my name is</span>
        <span>AHMAD AFRIZA</span>
      </div>
      <div className="nav__container">
        <div className="nav__menu">
          <a href="#about-me" onClick={() => setActiveNav("#about-me")}>
            <FontAwesomeIcon
              icon={activeNav === "#about-me" ? faHome : faHome}
              className={
                activeNav === "#about-me"
                  ? "active__nav nav__icon"
                  : "nav__icon"
              }
            />
            <span className="nav__link">Home</span>
          </a>
          <a href="#skills" onClick={() => setActiveNav("#skills")}>
            <FontAwesomeIcon
              icon={activeNav === "#skills" ? faUser : faUser}
              className={
                activeNav === "#skills" ? "active__nav nav__icon" : "nav__icon"
              }
            />
            <span className="nav__link">skills</span>
          </a>
          <a href="#projects" onClick={() => setActiveNav("#projects")}>
            <FontAwesomeIcon
              icon={
                activeNav === "#projects" ? faProjectDiagram : faProjectDiagram
              }
              className={
                activeNav === "#projects"
                  ? "active__nav nav__icon"
                  : "nav__icon"
              }
            />
            <span className="nav__link">projects</span>
          </a>
        </div>
        <div className="nav__contact">
          <a href="#contact" onClick={() => setActiveNav("#contact")}>
            <FontAwesomeIcon
              icon={activeNav === "#contact" ? faEnvelope : faEnvelope}
              className={
                activeNav === "#contact" ? "active__nav nav__icon" : "nav__icon"
              }
            />
            <span className="nav__link">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
