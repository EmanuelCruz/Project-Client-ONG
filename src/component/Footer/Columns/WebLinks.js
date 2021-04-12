import React from "react";

function WebLinks({ webLinks }) {
  return (
    <div className="col-md-4 column item">
      <h3>Links</h3>
      <ul>
        <li key={`wl-home`}>
          <a href="/">Inicio</a>
        </li>
        <li key={`wl-about`}>
          <a href="/nosotros">Nostros</a>
        </li>
        <li key={`wl-contact`}>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </div>
  );
}

export default WebLinks;
