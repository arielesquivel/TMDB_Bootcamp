import React from "react";
import "../App.css";
import NavBar from "./Nav";
function Register() {
  return (
    <>
      <NavBar />
      <div className="Register">
        <h2>Registrate</h2>
        <form>
          <label htmlFor="name">Nombre: </label>
          <input type="text" name="name" id="" />
          <br />
          <label htmlFor="email">Email: </label>
          <input type="text" email="email" id="" />
          <br />
          <label htmlFor="passaword">Contraseña: </label>
          <input type="text" email="passaword" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Register;
