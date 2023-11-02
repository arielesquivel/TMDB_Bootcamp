import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import logo from "../logo.svg";

function NavBar() {
  return (
    <nav className="navbar ">
      <h1 className="nav_h1">
        TMDB-Plataforma
        <img src={logo} className="App-logo2" alt="logo" />
      </h1>
      <ul>
        <li className="nav_li">
          <a href="./peliculas">inicio</a>
        </li>
        <li className="nav_li">
          <a href="#/home">Programa de Television</a>
        </li>
        <li className="nav_li">
          <a href="#/home">Personas</a>
        </li>
        <li className="nav_li">
          <a href="#/home">Mas</a>
        </li>
        <p className="nav_li">
          Inicio de sesion
          <AiOutlineTeam />
        </p>
      </ul>
    </nav>
  );
}

export default NavBar;
