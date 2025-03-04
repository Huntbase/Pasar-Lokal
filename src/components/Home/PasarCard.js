// src/components/PasarCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/PasarCard.css"; // CSS khusus untuk kartu (opsional)

const PasarCard = ({ id, nama, lokasi, kota, gambar, type }) => {
  const navigate = useNavigate(); // Untuk navigasi antar halaman
  return (
    <div className="card-container">
      <img src={gambar} alt={nama} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{nama}</h3>
        <p className="card-location">{kota}</p>
        <p className="card-city">{lokasi}</p>
        <div className="card-bottom">
          <span className={`card-type ${type}`}>
            {type === "pasar" ? "Pasar Tradisional" : "Mini Market"}
          </span>
          <button
            className="card-button"
            onClick={() => navigate(`/market/${id}`)}
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasarCard;
