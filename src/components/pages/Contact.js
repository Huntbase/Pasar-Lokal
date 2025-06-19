import React from "react";
import Navbar from "../Navbar&Footer/Navbar.js";
import Kontak from "../Kontak/kontak.js";
import Footer from "../Navbar&Footer/Footer.js";
import "../Home/css/App.css";

const Isi = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap">
        <Kontak />
      </main>
      <Footer />
    </div>
  );
};

export default Isi;
