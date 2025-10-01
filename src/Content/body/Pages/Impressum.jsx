import React from 'react'
import "./impressum_style.css";

const Impressum = () => {
  return (
    <div className="impressum-container">
      <h1>Impressum</h1>

      <p>
        Sebastian Felsberg
        <br />
        felsberg-design.de Web &amp; App Entwicklung
        <br />
        Tulpenstra&szlig;e 18
        <br />
        01705 Freital
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 01736722738
        <br />
        E-Mail: sebastianfelsberg@web.de
      </p>

      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </div>
  );
}

export default Impressum
