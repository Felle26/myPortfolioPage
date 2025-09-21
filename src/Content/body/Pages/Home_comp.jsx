import React from 'react'
import './../body_style.css'

const Home_comp = ({ setCurrentSection }) => {
  return (
    <>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hallo, Ich bin Sebastian Felsberg</h1>
          <h2>Frontend Developer</h2>
          <p>
            Willkommen auf meiner Portfolio-Seite! Hier finden Sie eine
            Auswahl meiner Arbeiten und meiner Skills.
          </p>
          <div className="hero-buttons">
            <button type="button" className="hero-button">
              <div
                onClick={() => {
                  setCurrentSection("about");
                }}
                className="hero-button-hover-effect"
              ></div>
              Mehr erfahren
            </button>
            <button type="button" className="hero-button">
              <div
                onClick={() => {
                  setCurrentSection("contact");
                }}
                className="hero-button-hover-effect"
              ></div>
              Lass uns reden
            </button>
          </div>
        </div>
        <img
          src="./profile.webp"
          className="hero-image"
          alt="Profilbild von Sebastian Felsberg (Ich)"
        ></img>
      </div>
    </>
  )
}

export default Home_comp
