import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { isLoggedContext } from "../contexts/isLogged";
import user from "../assets/default-Image.png";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const { isLogged } = useContext(isLoggedContext);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <Link
        to={isLogged ? "/profile" : "/login-signup"}
        className="login-signup"
        onClick={closeMenu}
      >
        {isLogged ? (
          <img src={user} alt="profileImage" className="profileImage" />
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
