import React from "react";
import "./Aboutus.css"; 
import serviceImage from "../assets/cleaning-service.jpeg";  
import { FaRegThumbsUp, FaRegHandshake, FaRecycle } from "react-icons/fa";  

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are a passionate team dedicated to providing high-quality services
          that empower our clients. With a focus on innovation, customer
          satisfaction, and social impact, our mission is to create positive
          change through our platform.
        </p>
        <p>
          Our platform connects users with top-rated professionals and services,
          ensuring a seamless experience from start to finish. We believe in
          creating lasting partnerships and making a difference in the
          communities we serve.
        </p>
      </div>

      <div className="about-image">
        <img src={serviceImage} alt="About Us" />
      </div>

      <div className="about-services">
        <h3>Our Core Values</h3>
        <div className="services-grid">
          <div className="service-item">
            <FaRegThumbsUp size={40} color="#28a745" />
            <h4>Customer Satisfaction</h4>
            <p>
              We prioritize customer satisfaction by providing top-tier service
              tailored to each client.
            </p>
          </div>
          <div className="service-item">
            <FaRegHandshake size={40} color="#007bff" />
            <h4>Partnerships</h4>
            <p>
              We build long-term partnerships with our clients and collaborators
              for sustainable growth.
            </p>
          </div>
          <div className="service-item">
            <FaRecycle size={40} color="#ffc107" />
            <h4>Environmental Impact</h4>
            <p>
              We believe in protecting the environment, focusing on sustainable
              practices and eco-friendly services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
