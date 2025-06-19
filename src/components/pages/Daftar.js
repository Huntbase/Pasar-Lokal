import React from "react";
import Navbar from "../Navbar&Footer/Navbar.js";
import Marketlist from "../Daftar/Marketlist.js";
import Footer from "../Navbar&Footer/Footer.js";
import "../Home/css/App.css";

const Isi = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap">
        <Marketlist />
      </main>
      <Footer />
    </div>
  );
};

export default Isi;
