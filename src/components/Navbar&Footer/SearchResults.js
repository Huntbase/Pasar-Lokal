import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import "./css/SearchResults.css";
import Navbar from "../Navbar&Footer/Navbar.js";
import Footer from "../Navbar&Footer/Footer.js";

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate(); // Inisialisasi navigate
  const results = location.state?.results || [];

  return (
    <>
      <Navbar />
      <div className="search-results-container">
        <h2>Hasil Pencarian</h2>
        {results.length === 0 ? (
          <div className="no-results">
            <img
              src="/assets/no-results.png"
              alt="No results"
              className="no-results-image"
            />
            <h3>Oops! Pasar tidak ditemukan 😢</h3>
            <p>Coba periksa kembali kata kunci pencarian kamu.</p>
            <Link to="/" className="back-button">
              Kembali ke Beranda
            </Link>
          </div>
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
                  <button
                    className="map-button"
                    onClick={() => navigate(`/market/${pasar.id}`)}
                  >
                    Lihat Detail
                  </button>
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
