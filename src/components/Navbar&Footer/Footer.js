import React, { useEffect } from "react";
import "./css/Footer.css";

const Footer = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <h2>Superchat - The name says it all</h2>
          <div className="footer-socials">
            <i className="bx bx-home icon"></i>
            <i className="bx bx-home icon"></i>
            <i className="bx bx-home icon"></i>
          </div>
          <div className="footer-contact">
            <p>
              <i className="bx bx-home icon">+44 1224 051727</i>
            </p>
            <p>
              <i className="bx bx-home icon">+44 1224 051727</i>
            </p>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li>WhatsApp Business</li>
              <li>WhatsApp Newsletter</li>
              <li>Automations</li>
              <li>Integrations</li>
              <li>Universal Inbox</li>
              <li>Webchat</li>
              <li>Team Chat</li>
              <li>Reviews</li>
              <li>Mobile App</li>
              <li>Desktop App</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Prices</li>
              <li>
                Career <span className="hiring">We are hiring!</span>
              </li>
              <li>Contact</li>
              <li>Affiliate Program</li>
              <li>Press</li>
              <li>System Status</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Success Stories</li>
              <li>Superchat Comparison</li>
              <li>Free Tools</li>
              <li>Free eBooks</li>
              <li>Messaging Report 2023</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SuperX GmbH | Imprint | Data Privacy | Terms of Use</p>
        <p>Made with ♡ in Berlin</p>
      </div>
    </footer>
  );
};

export default Footer;
