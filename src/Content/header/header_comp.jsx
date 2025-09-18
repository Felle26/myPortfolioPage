import React from 'react'
import Navbar_comp from './Navbar_comp.jsx'

import './header_style.css'



const Header_comp = (props) => {
  
  
  return (
    <>
      <header className="hero">
        <Navbar_comp
          currentSection={props.currentSection}
          setCurrentSection={props.setCurrentSection}
          currentTheme={props.currentTheme}
          setCurrentTheme={props.setCurrentTheme}
        />
      </header>
    </>
  );
}

export default Header_comp
