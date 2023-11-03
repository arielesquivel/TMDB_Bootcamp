import React, { useState } from "react";
import axios from "axios";
import NavBar from "./Nav";
import "../App.css";
import { Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/api/login",
        formData
      );
      console.log("Inicio de sesión exitoso", response.data);
    } catch (error) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <NavBar />
      <div className=" login">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
        {error && <p>{error}</p>}
        <Link to="./Register">
          <p>Registrate aqui</p>
        </Link>
      </div>
    </>
  );
}

export default Login;
