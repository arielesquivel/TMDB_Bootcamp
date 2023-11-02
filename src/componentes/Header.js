import React from "react";
import logo from "../logo.svg";
import NavBar from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
function Header() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p> Creando la TMDB</p>
        <Main />
      </header>
      <Footer />
    </div>
  );
}

export default Header;
