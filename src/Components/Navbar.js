import React from "react";
import "../CSS/navbar.css";

function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">SSApplication</div>
      <ul className="ul-list">
        <li>
          <a href="/home" >Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
