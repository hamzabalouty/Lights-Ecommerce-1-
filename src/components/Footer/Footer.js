import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h4>CONTACT US</h4>
          <p>
            No: 58 A, East Madison <br />
            Street, Baltimore, MD, USA
            <br /> 4508
          </p>
          <p>0000 - 123 - 456789</p>
          <p>info@example.com</p>
        </div>
        <div className="footer-box">
          <h4>HELP</h4>
          <p>Search</p>
          <p>Help</p>
          <p>Information</p>
          <p>Privacy Policy</p>
          <p>Shipping Delails</p>
        </div>
        <div className="footer-box">
          <h4>SUPPORT</h4>
          <p>Contact us</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Refunds & Returns</p>
          <p>Deliveries</p>
        </div>
        <div className="footer-box">
          <h4>INFORMATION</h4>
          <p>Search Terms</p>
          <p>Advanced Search</p>
          <p>Help & Faq's</p>
          <p>Store Location</p>
          <p>Orders & Returns</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
