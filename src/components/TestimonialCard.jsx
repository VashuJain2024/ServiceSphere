import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, rating, review, category }) => {
  return (
    <div className="testimonial-card">
      <h3>{name}</h3>
      <div className="stars">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} className="star" />
        ))}
      </div>
      <p className="review">{review}</p>
      <p className="category">{category}</p>
    </div>
  );
};

export default TestimonialCard;
