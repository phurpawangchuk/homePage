import React from "react";

const Header = () => {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#experiences">
              Experiences
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#skill">
              Skills
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contactme">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
