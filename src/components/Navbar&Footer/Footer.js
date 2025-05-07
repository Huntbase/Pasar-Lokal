import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding dan Sosial Media */}
        <div className="footer-branding">
          <h2>PasarSila - Temukan Pasar Terbaik di Kotamu</h2>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bx bxl-facebook icon"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="bx bxl-twitter icon"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram icon"></i>
            </a>
          </div>

          <div className="footer-contact">
            <p>
              <i className="bx bx-phone icon"></i> +62 812 3456 7890
            </p>
            <p>
              <i className="bx bx-envelope icon"></i> info@pasarkita.com
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-section">
            <h4>Informasi Pasar</h4>
            <ul>
              <li>
                <Link to="/Daftar">Daftar Pasar</Link>
              </li>
              <li>
                <Link to="/faq">Bantuan & FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Tentang Kami</h4>
            <ul>
              <li>
                <Link to="/MarketProfile">Profil PasarKita</Link>
              </li>
              <li>
                <Link to="/kontak">Kontak</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p> © 2025 PasarSila | Dibuat dengan ♡ untuk pasar Indonesia</p>
      </div>
    </footer>
  );
};

export default Footer;
