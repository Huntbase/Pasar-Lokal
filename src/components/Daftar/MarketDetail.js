import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import pasarData from "../../Data/data.js";
import "./css/detail.css";
import Navbar from "../Navbar&Footer/Navbar.js";
import Footer from "../Navbar&Footer/Footer.js";

const MarketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const market = pasarData.find((m) => m.id === parseInt(id));

  if (!market) {
    return <h2>Pasar tidak ditemukan</h2>;
  }

  const { nama, lokasi, kota, gambar, JamOperasional, GoogleMaps, type } =
    market;

  return (
    <>
      <Navbar />
      <div className="market-detail">
        <div className="detail-header">
          {/* Tombol Kembali dengan Ikon Boxicons */}
          <button className="back-button" onClick={() => navigate(-1)}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <img src={gambar} alt={nama} className="detail-image" />
        </div>
        <div className="detail-info">
          <h2>{nama}</h2>
          <p>
            <strong>Lokasi:</strong> {lokasi}
          </p>
          <p>
            <strong>Kota:</strong> {kota}
          </p>
          <p>
            <strong>Jam Operasional:</strong> {JamOperasional}
          </p>
          <p>
            <strong>Tipe:</strong>{" "}
            {type === "pasar" ? "Pasar Tradisional" : "Minimarket"}
          </p>
          <a
            href={GoogleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-button"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketDetail;
