import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/Testimonials";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>
        See what happy customers are saying about <span>ServiceSphere</span>
      </h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
