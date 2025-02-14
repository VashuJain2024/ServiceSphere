import React, { useState, useEffect } from "react";
import "./Services.css";
import homeServices from "../data/HomeServices";
import { useNavigate, useLocation } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
  const queryParams = new URLSearchParams(location.search);
  const searchFromURL = queryParams.get("search") || "";
 
  const [searchTerm, setSearchTerm] = useState(searchFromURL);
 
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    navigate({ search: params.toString() }, { replace: true });
  }, [searchTerm, navigate]);
 
  const filteredServices = homeServices.map((category) => ({
    ...category,
    services: category.services.filter((service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <section id="services" className="services-section">
      <h2>Our Home Services</h2>
 
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a service..."
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
 
      {filteredServices.some((category) => category.services.length > 0) ? (
        filteredServices.map(
          (category, index) =>
            category.services.length > 0 && (
              <div key={index} className="service-category">
                <h3>{category.category}</h3>
                <div className="services-grid">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-card">
                      <img src={service.image} alt={service.title} />
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <button
                        className="learn-more-btn"
                        onClick={() =>
                          navigate(`/services/task-form`, {
                            state: { title: service.title },
                          })
                        }
                      >
                        Book a Task
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
        )
      ) : (
        <p className="no-results">No services found.</p>
      )}
    </section>
  );
};

export default Services;
