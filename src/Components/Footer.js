import React from "react";
import "../CSS/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 SSApplication. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/contacts">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
