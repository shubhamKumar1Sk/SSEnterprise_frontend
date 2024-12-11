import React from "react";
import "../CSS/contact.css";

function Contacts() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p> Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:ssenterpriseapplication@gmail.com">ssenterpriseapplication@gmail.com</a></p>
        <p><strong>Contact Number:</strong> +91-1800-1800</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p><strong>Twitter:</strong> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter Profile</a></p>
      </div>
    </div>
  );
}

export default Contacts;
