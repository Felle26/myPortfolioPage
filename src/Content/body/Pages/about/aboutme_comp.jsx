import React from 'react'
import Progress_Bar_Comp from './progressbar_comp.jsx'
import skillset from './skills.json'
import './../../body_style.css'

const Aboutme_comp = () => {
  return (
    <>
      <div className="hero-text">
        <p>
          Ich bin Sebastian Felsberg, ein leidenschaftlicher Frontend-Entwickler
          mit Erfahrung in der Erstellung von benutzerfreundlichen und
          ansprechenden Webanwendungen.
        </p>
      </div>
      <div className="skills-container">
        {skillset.map((skill, index) => (
          <Progress_Bar_Comp key={index} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default Aboutme_comp