import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
