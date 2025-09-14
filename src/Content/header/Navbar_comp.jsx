import React from 'react'

const Navbar_comp = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="navbar">
      <a href="" className="logo-container">
        <div className="logo">
          <img src="./logo_darkmode.svg" alt="Felsberg-Design Logo"></img>
        </div>
      </a>
      <ul>
        <li>
          <button
            onClick={() => {
              setCurrentSection("home");
            }}
            className={currentSection === "home" ? "select" : ""}
            href="#"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("about");
            }}
            className={currentSection === "about" ? "select" : ""}
            href="#"
          >
            Über mich
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("projects");
            }}
            className={currentSection === "projects" ? "select" : ""}
            href="#"
          >
            Projekte
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("contact");
            }}
            className={currentSection === "contact" ? "select" : ""}
            href="#"
          >
            Kontakt
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar_comp
