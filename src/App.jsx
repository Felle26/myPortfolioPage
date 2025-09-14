import Header_comp from './Content/header/header_comp.jsx'
import Body_comp from './Content/body/Body_comp.jsx';
import Footer_comp from './Content/footer/footer_comp.jsx'
import { useState } from 'react'
import './App.css'


function App() {

  const [impressumVisible, setImpressumVisible] = useState(false);

  const toggleImpressum = () => {
    setImpressumVisible(!impressumVisible);
    console.log("Impressum button clicked", impressumVisible);
  };
  
  

  return (
    <>
      <Header_comp />
      <Body_comp />
      <Footer_comp showImpressum={toggleImpressum} />
      {impressumVisible && (<div className="impressum">
        <h2>Impressum</h2>
        <p>Angaben gemäß § 5 TMG:</p>
        <p>Sebastian Felsberg<br />
        Tulpenstraße 18<br />
        01705 Freital</p>
        <p>Kontakt:<br />
        E-Mail: sebastianfelsberg@web.de</p>
      </div>)}
    </>
  )
}

export default App
