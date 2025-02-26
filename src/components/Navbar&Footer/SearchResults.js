import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar&Footer/Navbar.js";
import Footer from "../Navbar&Footer/Footer.js";

function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q"); // Mengambil parameter q dari URL

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Hasil Pencarian untuk: "{query}"</h2>
        {/* Tambahkan logika pencarian di sini, misalnya fetch data */}
        <p>Menampilkan hasil terkait dengan "{query}".</p>
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
