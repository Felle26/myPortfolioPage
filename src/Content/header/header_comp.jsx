import React from 'react'
import './header_style.css'

import { useState } from 'react'

const [currentSection, setCurrentSection] = useState('home')

const Header_comp = () => {
  return (
    <>
      <header className="hero">
    <nav className="navbar">
      <a href="" className="logo-container">
        <div className="logo">
          <img src="./FD-Logo.svg" alt="Felsberg-Design Logo"></img>
        </div>
        <h2>Felsberg-Design</h2>
      </a>
      <ul>
        <li><button className="select" href="#">Home</button></li>
        <li><button href="#">Über mich</button></li>
        <li><button href="#">Projekte</button></li>
        <li><button href="#">Kontakt</button></li>
      </ul>
    </nav>
    <div className="hero-content">
      <div className="hero-text">
        <h1>Hallo, Ich bin Sebastian Felsberg</h1>
        <h2>Frontend Developer</h2>
        <p>Willkommen auf meiner Portfolio-Seite! Hier finden Sie eine Auswahl meiner Arbeiten und Projekte.</p>
        <div className="hero-buttons">
          <button className="hero-button"><div className="hero-button-hover-effect"></div>Mehr erfahren</button>
          <button className="hero-button"><div className="hero-button-hover-effect"></div>Lass uns reden</button>
        </div>
      </div>
    <div className="hero-image" alt="Profilbild von Sebastian Felsberg">
      <span className="hero-image-overlay"></span>
    </div>
  </div>
    
  </header>
    </>
  )
}

export default Header_comp
