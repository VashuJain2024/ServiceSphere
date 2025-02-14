import React from "react";
import "./HowItWorks.css";
import image from "../assets/image 13.jpg";  

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="content">
        <h2>HOW IT WORKS</h2>
        <ul>
          <li>
            <span className="step-number">1</span> Choose a Service
          </li>
          <li>
            <span className="step-number">2</span> Enter Your Location
          </li>
          <li>
            <span className="step-number">3</span> Get a Professional at Your
            Doorstep
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img src={image} alt="How it works" />
      </div>
    </section>
  );
};

export default HowItWorks;
