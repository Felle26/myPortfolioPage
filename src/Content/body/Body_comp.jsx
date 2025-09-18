import React from 'react'

import Home_comp from './Pages/Home_comp.jsx'
import Aboutme_comp from './Pages/about/aboutme_comp.jsx'
import Projects_comp from './Pages/projects/Projects_comp.jsx'
import Contact_comp from './Pages/Contact/Contact_comp.jsx'
import Impressum from './Pages/Impressum.jsx'

const Body_comp = ({ currentSection, setCurrentSection }) => {
  return (
    <>
      {currentSection === "home" ? (
        <Home_comp
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      ) : null}
      {currentSection === "about" ? <Aboutme_comp /> : null}
      {currentSection === "projects" ? <Projects_comp /> : null}
      {currentSection === "contact" ? <Contact_comp /> : null}
      {currentSection === "impressum" ? <Impressum /> : null}
    </>
  );
}

export default Body_comp
