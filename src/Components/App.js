import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import Contacts from "./Contacts";
import Dashboard from "./Dashboard";

function App() {

  return (
   <Router>

    <Routes>
      <Route path = "/login" Component={Login}/>
      <Route path = "/about" Component={About}/>
      <Route path = "/home" Component={Home}/>
      <Route path="/contacts" Component={Contacts}/>
      <Route path="/dashboard" Component={Dashboard} />
    </Routes>

   </Router>
  );
}

export default App;
