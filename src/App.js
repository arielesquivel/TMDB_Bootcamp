import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./componentes/Header";
import axios from "axios";
import Login from "./componentes/Login";
//import Header from "./componentes/Header";

/*
import NavBa from "./componentes/Nav";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
*/
function App() {
  return (
    <div className="App">
      <Login />
      <Header />;
    </div>
  );
}

export default App;
