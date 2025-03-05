import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding dan Sosial Media */}
        <div className="footer-branding">
          <h2>PasarKita - Temukan Pasar Terbaik di Kotamu</h2>
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
                <Link to="/daftar-pasar">Daftar Pasar</Link>
              </li>
              <li>
                <Link to="/jenis-pasar">Jenis Pasar</Link>
              </li>
              <li>
                <Link to="/jam-operasional">Jam Operasional</Link>
              </li>
              <li>
                <Link to="/fasilitas">Fasilitas Pasar</Link>
              </li>
              <li>
                <Link to="/pedagang-produk">Pedagang & Produk</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Tentang Kami</h4>
            <ul>
              <li>
                <Link to="/profil">Profil PasarKita</Link>
              </li>
              <li>
                <Link to="/visi-misi">Visi & Misi</Link>
              </li>
              <li>
                <Link to="/kerja-sama">Kerja Sama</Link>
              </li>
              <li>
                <Link to="/kontak">Kontak</Link>
              </li>
              <li>
                <Link to="/karir">Karir</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Sumber Daya</h4>
            <ul>
              <li>
                <Link to="/berita">Berita Pasar</Link>
              </li>
              <li>
                <Link to="/artikel">Artikel & Tips</Link>
              </li>
              <li>
                <Link to="/regulasi">Regulasi Pasar</Link>
              </li>
              <li>
                <Link to="/faq">Bantuan & FAQ</Link>
              </li>
              <li>
                <Link to="/laporan">Laporan Tahunan</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2024 PasarKita | <Link to="/privacy">Kebijakan Privasi</Link> |{" "}
          <Link to="/terms">Syarat & Ketentuan</Link>
        </p>
        <p>Dibuat dengan ♡ untuk pasar Indonesia</p>
      </div>
    </footer>
  );
};

export default Footer;
