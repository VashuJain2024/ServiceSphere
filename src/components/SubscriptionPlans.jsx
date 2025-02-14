import React from "react";
import "./SubscriptionPlans.css";
import plans from "../data/SubscriptionPlans";

const SubscriptionPlans = () => {
  return (
    <section className="subscription-section">
      <h2>OUR SUBSCRIPTION PLANS</h2>
      <p>Choose the Best Plan for You!</p>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p className="description">{plan.description}</p>
            <button className="select-btn">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPlans;
