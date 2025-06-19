import React from "react";
import Navbar from "../Navbar&Footer/Navbar";
import FAQ from "../FAQ/FAQ";
import Footer from "../Navbar&Footer/Footer";
import "../Home/css/App.css";

const Isi = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Isi;
