import React from 'react'
import './footer_style.css'

const Footer_comp = (props) => {
  return (
    <>
      <footer className="footer_bar">
        <div>
        <a href="#"><img src="./facebook-f-brands-solid-full.svg" alt="Facebook"></img></a>
        <a href="#"><img src="./instagram-brands-solid-full.svg" alt="Instagram"></img></a>
        <a href="#"><img src="./linkedin-in-brands-solid-full.svg" alt="LinkedIn"></img></a>
        <a href="#"><img src="./github-brands-solid-full.svg" alt="GitHub"></img></a>
      </div>
        <p>&copy; 2021 - {new Date().getFullYear()} Felsberg-Design.de Alle Rechte vorbehalten.</p>
        <button type='button'
          className={props.currentSection === "impressum" ? "select" : ""}
          onClick={() => props.setCurrentSection('impressum')}>Impressum</button>
    </footer>
    </>
  )
}

export default Footer_comp
