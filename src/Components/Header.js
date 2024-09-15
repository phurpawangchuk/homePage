import React, { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("#about"); // Default to "Home"

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

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
          <li className={activeSection === "#about" ? "current" : ""}>
            <a
              className="smoothscroll"
              href="#about"
              onClick={() => handleSetActive("#about")}
            >
              Home
            </a>
          </li>

          <li className={activeSection === "#education" ? "current" : ""}>
            <a
              className="smoothscroll"
              href="#education"
              onClick={() => handleSetActive("#education")}
            >
              Education
            </a>
          </li>

          <li className={activeSection === "#experiences" ? "current" : ""}>
            <a
              className="smoothscroll"
              href="#experiences"
              onClick={() => handleSetActive("#experiences")}
            >
              Experiences
            </a>
          </li>

          <li className={activeSection === "#skill" ? "current" : ""}>
            <a
              className="smoothscroll"
              href="#skill"
              onClick={() => handleSetActive("#skill")}
            >
              Skills
            </a>
          </li>

          <li className={activeSection === "#contactme" ? "current" : ""}>
            <a
              className="smoothscroll"
              href="#contactme"
              onClick={() => handleSetActive("#contactme")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about"></a>
      </p>
    </header>
  );
};

export default Header;
