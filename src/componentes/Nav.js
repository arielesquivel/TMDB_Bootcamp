import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar ">
      <h1 className="nav_h1">
        TMDB-Plataforma
        <Link to="/">
          <img src={logo} className="App-logo2" alt="logo" />
        </Link>
      </h1>
      <ul>
        <p className="nav_li">
          <Link to="/login">
            Inicio de sesion
            <AiOutlineTeam />
          </Link>
        </p>
      </ul>
    </nav>
  );
}

export default NavBar;
