import React from "react"
import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

const App=()=>{

  return(
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;