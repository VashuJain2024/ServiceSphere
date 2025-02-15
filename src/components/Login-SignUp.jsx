import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login-SignUp.css";
import logo from "../assets/logo.png";

const LoginSignUp = () => {
  const navigate = useNavigate();
  
  return (
    <div className="landing-container">
      <div className="overlay">
        <div className="auth-box">
          <img src={logo} alt="logo" />
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign-Up
          </button>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Log-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
