import React from "react";
import Navbar from "../Navbar&Footer/Navbar.js";
import Slide from "../Home/Slide.js";
import Informasi from "../Home/Informasi.js";
import Informasi2 from "../Home/Informasi_2.js";
import PasarList from "../Home/PasarList.js";
import Footer from "../Navbar&Footer/Footer.js";
import "../Home/css/App.css";

const isi = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Informasi />
      <Informasi2 />
      <div className="App">
        <PasarList />
      </div>
      <Footer />
    </>
  );
};

export default isi;
