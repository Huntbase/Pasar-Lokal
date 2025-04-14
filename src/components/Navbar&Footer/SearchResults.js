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
      <div className="search-results-container">
        <h2>Hasil Pencarian</h2>
        {results.length === 0 ? (
          <p className="no-results">Tidak ada pasar yang ditemukan.</p>
        ) : (
          <div className="search-results-grid">
            {results.map((pasar) => (
              <div key={pasar.id} className="pasar-card">
                <img
                  src={pasar.gambar}
                  alt={pasar.nama}
                  className="pasar-image"
                />
                <div className="pasar-details">
                  <h3>{pasar.nama}</h3>
                  <p>
                    <strong>Lokasi:</strong> {pasar.lokasi}
                  </p>
                  <p>
                    <strong>Jam Operasional:</strong> {pasar.JamOperasional}
                  </p>
                  <Link
                    to={pasar.GoogleMaps}
                    target="_blank"
                    className="map-button"
                  >
                    Lihat di Google Maps
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
