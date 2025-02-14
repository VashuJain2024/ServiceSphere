import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TermsAndConditions.css";
import Steps from "./Steps";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleAgree = () => {
    if (isChecked) {
      alert("You have agreed to the terms and conditions.");
      navigate("/payment");
    } else {
      alert("Please accept the terms and conditions first.");
    }
  };

  const handleExit = () => {
    navigate("/home");
  };

  return (
    <>
      <Steps step={4} />
      <div className="terms-container">
        <div className="terms-box">
          <h2>Terms and Conditions</h2>
          <div className="terms-content">
            <p>
              Welcome to Service Sphere. Before using our platform, please read
              and accept the following terms and conditions:
            </p>
            <ul>
              <li>You must be at least 18 years old to use this service.</li>
              <li>
                All transactions and communications must comply with our
                policies.
              </li>
              <li>
                We are not responsible for third-party content or services.
              </li>
              <li>
                Your data is protected, but you must follow security guidelines.
              </li>
              <li>
                Violation of these terms may result in account suspension.
              </li>
            </ul>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              I agree to the terms and conditions
            </label>
          </div>
          <div className="buttons">
            <button className="exit-btn" onClick={handleExit}>
              Exit
            </button>
            <button className="agree-btn" onClick={handleAgree}>
              Agree
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
