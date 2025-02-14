import React from "react";
import "./WhyChooseUs.css";
import {
  FaShieldAlt,
  FaTags,
  FaClock,
  FaHandshake,
  FaPhone,
} from "react-icons/fa";

const features = [
  { id: 1, icon: <FaShieldAlt />, title: "Verified Professionals" },
  { id: 2, icon: <FaTags />, title: "Affordable Pricing" },
  { id: 3, icon: <FaClock />, title: "Fast and Reliable Service" },
  { id: 4, icon: <FaHandshake />, title: "Customer Satisfaction Guarantee" },
  { id: 5, icon: <FaPhone />, title: "24/7 Availability" },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2>❓ WHAT MAKES US STAND OUT</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
