// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null); 

    try {
      // Send request to the backend
      // const response = await axios.post(
      //   "http://localhost:5000/api/auth/signin",
      //   {
      //     email,
      //     password,
      //   }
      // );

      if (true) { 
        // localStorage.setItem("authToken", response.data.token);
        setSuccess("Sign-in successful! Redirecting to your profile...");
        setTimeout(() => {
          navigate("/terms");
        }, 2000); 
      } else {
        setError("Signin failed. Please check your credentials.");
      }
    } catch (err) { 
      setError(
        err.response && err.response.data.message
          ? err.response.data.message
          : "Error during in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="headingForm">
        <h2>Log in</h2>
        <form onClick={handleSignin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loging in..." : "Log in"}
          </button>
          <div className="new">
            <Link to="/signup" className="styl">
              New user? Sign up here
            </Link>
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success-message">{success}</p>}{" "} 
        </form>
      </div>
    </div>
  );
}
