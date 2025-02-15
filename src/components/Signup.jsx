import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { isLoggedContext } from "../contexts/isLogged";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // "worker" or "user"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(isLoggedContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword || !role) {
      setError("Please fill out all fields and select a role.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: username,
          email: user.email,
          pwd: password,
          role,
        });
      }
      navigate("/services");
      toast.success("User Registered Successfully!!", { position: "top-center" });
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
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

          {/* Role Selection */}
          <div className="role-selection">
            <label>
              <input
                type="checkbox"
                checked={role === "worker"}
                onChange={() => setRole(role === "worker" ? "" : "worker")}
              />
              Worker
            </label>
            <label>
              <input
                type="checkbox"
                checked={role === "user"}
                onChange={() => setRole(role === "user" ? "" : "user")}
              />
              User
            </label>
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
