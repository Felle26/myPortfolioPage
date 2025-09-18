import Header_comp from './Content/header/header_comp.jsx'
import Body_comp from './Content/body/Body_comp.jsx';
import Footer_comp from './Content/footer/footer_comp.jsx'
import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [currentSection, setCurrentSection] = useState('home')
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'dark')
  
  useEffect(() => {

    
    document.body.className = currentTheme;
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme]);

  
  

  return (
    <>
      <Header_comp
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      <Body_comp
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      <Footer_comp
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </>
  );
}

export default App
