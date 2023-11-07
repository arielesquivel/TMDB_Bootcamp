import React, { useState } from "react";
import "../App.css";
import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/api/users/register",
        formData,
        { withCredentials: true }
      );
      console.log("Registro exitoso", response.data);
    } catch (error) {
      setError("Error al registrarse. Inténtalo de nuevo.");
    }
  };
  return (
    <>
      <NavBar />
      <div className="Register">
        <h2>Registrate</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="passaword">Contraseña: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
        {error && <p>{error}</p>}
        <Link to="/login">
          <p>El Usuario Ya Esta Registrado</p>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Register;
