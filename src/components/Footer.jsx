import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 ServiceSphere. All rights reserved.</p>
      <div className="footer-container"> 
        <div className="footer-section">
          <p>Contact Information :-</p>
          <p>
            <strong>📍 Address:</strong>
          </p>
          <p>
            <strong>📞 Phone:</strong>
          </p>
          <p>
            <strong>📧 Email:</strong> support@servicesphere.com
          </p>
        </div>
 
        <div className="footer-section">
          <p>Links :-</p>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>
 
        <div className="footer-section">
          <p>Follow us on :-</p>
          <p>
            <strong>📘 Facebook:</strong>{" "}
            <a href="#">www.facebook.com/servicesphere</a>
          </p>
          <p>
            <strong>📸 Instagram:</strong> <a href="#">@service_sphere</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
