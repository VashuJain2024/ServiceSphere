import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/home" className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link
        to={true ? "/login-signup" : "/login-signup"}
        className="login-signup"
      >
        {false ? (
          <img
            src="../src/assets/tasker1.png"
            alt="profileImage"
            className="profileImage"
          />
        ) : (
          <button className="login">Login / Sign Up</button>
        )}
      </Link>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}
