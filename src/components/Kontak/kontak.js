import React from "react";
import "./css/contact.css";

const ContactSection = () => {
  return (
    <section className="contact-info-section">
      <h2>Kontak Kami</h2>
      <p>Hubungi kami melalui salah satu kontak di bawah ini:</p>

      <div className="contact-info-grid">
        <div className="contact-card">
          <i className="bx bxs-phone contact-icon"></i>
          <a href="tel:+6281234567890">+62 812-3456-7890</a>
        </div>
        <div className="contact-card">
          <i className="bx bx-envelope contact-icon"></i>
          <a href="mailto:info@pasarbogor.com">info@pasarbogor.com</a>
        </div>
        <div className="contact-card">
          <i className="bx bxl-whatsapp contact-icon"></i>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
