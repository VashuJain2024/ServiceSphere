import React from "react";
import "./TopRatedServices.css";
import { GrServices } from "react-icons/gr";
import Services from "../data/Services";

export default function TopRatedServices() {
  return (
    <section className="top-rated-services">
      <h2>
        <GrServices />
        Top Rated Services
      </h2>
      <div className="services-grid">
        {Services.map((service) => (
          <div key={service.id} className="service-block">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <p className="swipe">&lt;&lt; Swipe &gt;&gt;</p>
    </section>
  );
}
