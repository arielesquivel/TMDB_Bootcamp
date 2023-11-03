import "./App.css";
import Header from "./componentes/Header";
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
