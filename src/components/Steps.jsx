import React, { useState } from "react";
import "./Steps.css";

const Stepper = ({ step }) => {
  const [currentStep, setCurrentStep] = useState(step);
  const totalSteps = 4;  

  return (
    <div className="stepper-container"> 
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
 
      <div className="steps">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`step ${currentStep === index + 1 ? "active" : ""} ${
              currentStep > index ? "completed" : "disabled"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
