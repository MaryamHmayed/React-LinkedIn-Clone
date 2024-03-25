import React from "react";
import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Signup from "./pages/Authentication/components/Signup";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/Signup" element={<Signup/>} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
