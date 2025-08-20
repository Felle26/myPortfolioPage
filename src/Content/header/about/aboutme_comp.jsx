import React from 'react'
import '../header_style.css'
import Progress_Bar_Comp from './progressbar_comp'
import skillset from '../../skills.json'

const Aboutme_comp = () => {
  return (
    <div>
      Hello from about
      <p>
        Ich bin Sebastian Felsberg, ein leidenschaftlicher Frontend-Entwickler
        mit Erfahrung in der Erstellung von benutzerfreundlichen und
        ansprechenden Webanwendungen.
      </p>
      <div className="skills-container">
        {skillset.map((element, index) => (
          <Progress_Bar_Comp  skill={element} />
        ))}
      </div>
    </div>
  );
}

export default Aboutme_comp