import React from "react";
import "../App.css";
import NavBar from "./Nav";
import Footer from "./Footer";
function Register() {
  return (
    <>
      <NavBar />
      <div className="Register">
        <h2>Registrate</h2>
        <form>
          <label htmlFor="name">Nombre: </label>
          <input type="text" />
          <br />
          <label htmlFor="email">Email: </label>
          <input type="email" />
          <br />
          <label htmlFor="passaword">Contraseña: </label>
          <input type="password" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
