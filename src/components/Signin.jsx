import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
// import SignInwithGoogle from "./signInWIthGoogle";

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
      await signInWithEmailAndPassword(auth, email, password);
      // console.log("User logged in Successfully");
      navigate("/services");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
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
