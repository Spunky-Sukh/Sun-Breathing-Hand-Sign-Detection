import React from "react";
import Camera from "./pages/camera/camera"
import "./App.css";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
      <Route exact path="/sunbreathing" element={<Camera />} /> 
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
