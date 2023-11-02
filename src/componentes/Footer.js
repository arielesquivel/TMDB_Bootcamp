import React from "react";
import NavBar from "./Nav";
function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <h2>Lo básico</h2>
        <ul>
          <li>
            <a href="#">Sobre TMDB</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Foros de ayuda</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Estado del sistema</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Participa</h2>
        <ul>
          <li>
            <a href="#">Guía de aportaciones</a>
          </li>
          <li>
            <a href="#">Añadir nueva película</a>
          </li>
          <li>
            <a href="#">Añadir nuevo programa de TV</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Comunidad</h2>
        <ul>
          <li>
            <a href="#">Directrices</a>
          </li>
          <li>
            <a href="#">Discusiones</a>
          </li>
          <li>
            <a href="#">Tabla de clasificación</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Legal</h2>
        <ul>
          <li>
            <a href="#">Términos de uso</a>
          </li>
          <li>
            <a href="#">Términos de uso de la API</a>
          </li>
          <li>
            <a href="#">Política de privacidad</a>
          </li>
          <li>
            <a href="#">DMCA Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
