// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Signup.css";

export default function Signup() {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);  
  const navigate = useNavigate();  

  const handleSignup = async (e) => {
    e.preventDefault();  

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    try { 
      // const response = await axios.post(
      //   "http://localhost:5000/api/auth/signup",
      //   {
      //     username,
      //     email,
      //     password,
      //   }
      // );

      if (true) { 
        // if (response.data.token) {
        //   localStorage.setItem("authToken", response.data.token);  
        // }
 
        setSuccess("You have successfully signed up! You can now log in.");
 
        setTimeout(() => {
          navigate("/terms");
        }, 1500);  
      } else {
        setError(response.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response && err.response.data.message
          ? err.response.data.message
          : "Error during signup. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="headingForm">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Username:</label> 
            <input
              type="text"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a strong password"
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
