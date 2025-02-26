import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./css/SearchResults.css";
import Navbar from "../Navbar&Footer/Navbar.js";
import Footer from "../Navbar&Footer/Footer.js";

function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <>
      <Navbar />
      <div className="search-results">
        <h2>Hasil Pencarian</h2>
        {results.length === 0 ? (
          <p>Tidak ada pasar yang ditemukan.</p>
        ) : (
          <ul>
            {results.map((pasar) => (
              <li key={pasar.id}>
                <img src={pasar.gambar} alt={pasar.nama} width="100" />
                <p>{pasar.nama}</p>
                <p>Lokasi: {pasar.lokasi}</p>
                <Link to={pasar.GoogleMaps} target="_blank">
                  Lihat di Google Maps
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link to="/">Kembali ke Beranda</Link>
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
