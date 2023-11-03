import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./componentes/Header";
import axios from "axios";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/Register" element={<Register />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
