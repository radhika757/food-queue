import React, { useState } from "react";
import Home from "./Components/Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./Components/Layout/Login";
// import NavBar from "./Components/Pages/NavBar";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
      
          <Route exact path="/" element={<Home />} />
          <Route path="/Admin" element={<Login/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
