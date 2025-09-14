import React from 'react'
import Navbar_comp from './Navbar_comp.jsx'
import Aboutme_comp from './about/aboutme_comp'
import './header_style.css'


import { useState } from 'react'


const Header_comp = () => {
  const [currentSection, setCurrentSection] = useState('home')
  
  return (
    <>
      <header className="hero">
        <Navbar_comp currentSection={currentSection} setCurrentSection={setCurrentSection} />
        
        {currentSection === "home" ? (
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hallo, Ich bin Sebastian Felsberg</h1>
              <h2>Frontend Developer</h2>
              <p>
                Willkommen auf meiner Portfolio-Seite! Hier finden Sie eine
                Auswahl meiner Arbeiten und Projekte.
              </p>
              <div className="hero-buttons">
                <button className="hero-button">
                  <div
                    onClick={() => { setCurrentSection("about"); }}
                    className="hero-button-hover-effect"></div>Mehr erfahren
                </button>
                <button className="hero-button">
                  <div
                    onClick={() => { setCurrentSection("contact"); }}
                    className="hero-button-hover-effect">
                  </div>
                  Lass uns reden
                </button>
              </div>
            </div>
            <img
              src='./profile.webp'
              className="hero-image"
              alt="Profilbild von Sebastian Felsberg (Ich)"
            >
            </img>
          </div>
        ) : null}
        {currentSection === "about" ? <Aboutme_comp /> : null}
      </header>
    </>
  );
}

export default Header_comp
